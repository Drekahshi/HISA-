'use server';

import { z } from 'zod';
import { analyzeTreeHealth } from '@/ai/flows/tree-health-analysis';
import type { AnalyzeTreeHealthOutput } from '@/ai/flows/tree-health-analysis';
import { incrementBalance, getBalance, setBalance } from '@/lib/db';

const GAS_FEE = 0.3;

const fileToDataURI = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return `data:${file.type};base64,${buffer.toString('base64')}`;
};

const formSchema = z.object({
  photo: z.instanceof(File).refine((file) => file.size > 0, 'Photo is required.'),
  treeDescription: z.string().min(1, 'Tree description is required.'),
  gpsLocation: z.string().min(1, 'GPS location is required.'),
  walletAccount: z.string().min(1, 'Wallet account is required to mint tokens.'),
});

type ValidationState = {
  data: AnalyzeTreeHealthOutput | null;
  error: string | null;
  success: boolean;
};

export async function handleValidation(prevState: ValidationState, formData: FormData): Promise<ValidationState> {
  try {
    const parsed = formSchema.safeParse({
      photo: formData.get('photo'),
      treeDescription: formData.get('treeDescription'),
      gpsLocation: formData.get('gpsLocation'),
      walletAccount: formData.get('walletAccount'),
    });

    if (!parsed.success) {
      return {
        data: null,
        error: parsed.error.errors.map((e) => e.message).join(', '),
        success: false,
      };
    }

    const { photo, treeDescription, gpsLocation, walletAccount } = parsed.data;

    const currentBalance = getBalance(walletAccount);
    if (currentBalance < GAS_FEE) {
        return {
            data: null,
            error: `Insufficient balance to pay the 0.3 JANI gas fee. Your current balance is ${currentBalance} JANI.`,
            success: false,
        };
    }

    setBalance(walletAccount, currentBalance - GAS_FEE);

    const photoDataUri = await fileToDataURI(photo);

    const result = await analyzeTreeHealth({
      photoDataUri,
      treeDescription,
      gpsLocation,
    });
    
    // If the analysis is successful, simulate minting a token.
    incrementBalance(walletAccount);

    return { data: result, error: null, success: true };
  } catch (error) {
    console.error('Validation Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to analyze tree health: ${errorMessage}`, success: false };
  }
}
