
'use server';

/**
 * @fileOverview A flow to submit validation data for a tree.
 *
 * - submitValidation - A function that handles the validation submission process.
 * - SubmitValidationInput - The input type for the submitValidation function.
 * - SubmitValidationOutput - The return type for the submitValidation function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as admin from 'firebase-admin';
import { Client, PrivateKey, TopicMessageSubmitTransaction } from '@hashgraph/sdk';
import { firebaseConfig } from '@/firebase/config';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: `https://${firebaseConfig.projectId}.firebaseio.com`
  });
}
const db = admin.firestore();

let hederaClient: Client | undefined;
if (process.env.HEDERA_ACCOUNT_ID && process.env.HEDERA_PRIVATE_KEY) {
    hederaClient = Client.forTestnet();
    hederaClient.setOperator(
      process.env.HEDERA_ACCOUNT_ID,
      PrivateKey.fromString(process.env.HEDERA_PRIVATE_KEY)
    );
}

const SubmitValidationInputSchema = z.object({
  treeId: z.string(),
  photos: z.array(z.string().describe("A photo data URI.")),
  measurements: z.object({
    height: z.number(),
    diameter: z.number(),
    healthScore: z.number(),
  }),
  notes: z.string(),
  // In a real app, we'd get the validatorId from the authenticated context
  // validatorId: z.string(), 
});
export type SubmitValidationInput = z.infer<typeof SubmitValidationInputSchema>;

const SubmitValidationOutputSchema = z.object({
  success: z.boolean(),
  verificationId: z.string().optional(),
  message: z.string().optional(),
});
export type SubmitValidationOutput = z.infer<typeof SubmitValidationOutputSchema>;


async function distributeRewards(verificationId: string) {
    const verificationDoc = await db.collection('verifications').doc(verificationId).get();
    const verification = verificationDoc.data();

    if (!verification) throw new Error("Verification not found");

    const treeDoc = await db.collection('trees').doc(verification.treeId).get();
    const tree = treeDoc.data();
    
    if (!tree) throw new Error("Tree not found");

    // Mint JANI tokens on Hedera (simplified)
    console.log("Minting 1 JANI token...");

    // Record rewards
    await db.collection('rewards').add({
        userId: verification.validatorId,
        type: 'validation',
        amount: 0.1,
        treeId: verification.treeId,
        status: 'completed',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    await db.collection('rewards').add({
        userId: tree.planting.plantedBy,
        type: 'tree_planting',
        amount: 0.8,
        treeId: verification.treeId,
        status: 'completed',
        createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Update user balances in a transaction
    const validatorRef = db.collection('users').doc(verification.validatorId);
    const planterRef = db.collection('users').doc(tree.planting.plantedBy);

    await db.runTransaction(async (transaction) => {
        transaction.update(validatorRef, {
            'wallet.janiBalance': admin.firestore.FieldValue.increment(0.1)
        });
        transaction.update(planterRef, {
            'wallet.janiBalance': admin.firestore.FieldValue.increment(0.8)
        });
    });

    console.log("Rewards distributed successfully.");
}


async function triggerAIValidation(verificationId: string) {
    const verificationDoc = await db.collection('verifications').doc(verificationId).get();
    const data = verificationDoc.data();

    // Simulated AI response
    const aiResult = {
        confidence: Math.floor(Math.random() * 10) + 90, // 90-99%
        anomalyDetected: false,
        fraudRisk: 'low'
    };

    await db.collection('verifications').doc(verificationId).update({
        aiValidation: aiResult,
        status: aiResult.fraudRisk === 'low' ? 'approved' : 'disputed'
    });
    
    if (aiResult.fraudRisk === 'low' && aiResult.confidence > 90) {
        await verificationDoc.ref.update({ status: 'approved' });
        await distributeRewards(verificationId);
    } else {
        await verificationDoc.ref.update({ status: 'disputed' });
    }
}


export const submitValidation = ai.defineFlow(
  {
    name: 'submitValidation',
    inputSchema: SubmitValidationInputSchema,
    outputSchema: SubmitValidationOutputSchema,
  },
  async (input) => {
    // In a real app, we would get the validator's UID from the auth context.
    const validatorId = 'placeholder-validator-uid';

    try {
        if (!hederaClient) {
          throw new Error("Hedera client is not initialized.");
        }

        // In a real app, we'd verify the user is a validator.
        
        // TODO: In a real app, upload photos to IPFS and get hashes.
        const photoHashes = input.photos.map((_, i) => `ipfs-hash-${i}`);

        // Create verification document
        const verificationRef = await db.collection('verifications').add({
            treeId: input.treeId,
            validatorId: validatorId,
            type: 'growth_check',
            data: {
                photos: photoHashes,
                measurements: input.measurements,
                notes: input.notes,
            },
            status: 'pending',
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        const message = JSON.stringify({
            verificationId: verificationRef.id,
            treeId: input.treeId,
            validator: validatorId,
            timestamp: Date.now()
        });

        const transaction = new TopicMessageSubmitTransaction()
            .setTopicId(process.env.HEDERA_TOPIC_ID!)
            .setMessage(message);
            
        const response = await transaction.execute(hederaClient);
        const receipt = await response.getReceipt(hederaClient);

        await verificationRef.update({
            hederaHash: receipt.consensusTimestamp.toString()
        });

        await triggerAIValidation(verificationRef.id);

        return { success: true, verificationId: verificationRef.id };
    } catch (error: any) {
        console.error('Validation submission error:', error);
        return { success: false, message: error.message };
    }
  }
);
