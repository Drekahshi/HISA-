'use server';

import { z } from 'zod';
import { getTokenBalance } from '@/ai/flows/token-balance-inquiry';

const formSchema = z.object({
  projectId: z.string().min(1, 'Project ID is required.'),
});

type BalanceState = {
  data: {
    tokenBalance: number;
    projectId: string;
  } | null;
  error: string | null;
};

// In a real implementation, this would fetch from a database or blockchain.
// For this example, we generate a pseudo-random but deterministic balance based on projectId.
const getDeterministicBalance = (projectId: string) => {
    let hash = 0;
    for (let i = 0; i < projectId.length; i++) {
        const char = projectId.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash % 100000); // Return a balance between 0 and 99,999
}

export async function handleBalanceInquiry(prevState: BalanceState, formData: FormData): Promise<BalanceState> {
  try {
    const parsed = formSchema.safeParse({
      projectId: formData.get('projectId'),
    });

    if (!parsed.success) {
      return {
        data: null,
        error: parsed.error.errors.map((e) => e.message).join(', '),
      };
    }
    const { projectId } = parsed.data;

    // The genkit flow is mocked, so we'll use a mock function here to simulate different balances.
    // In a real scenario, you would call `getTokenBalance({ projectId })`.
    const balance = getDeterministicBalance(projectId);
    
    // Simulate calling the AI flow
    const result = { tokenBalance: balance };
    await getTokenBalance({ projectId }); // We call it to show it's used, but use our deterministic result.


    return { data: { tokenBalance: result.tokenBalance, projectId }, error: null };
  } catch (error) {
    console.error('Balance Inquiry Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { data: null, error: `Failed to get token balance: ${errorMessage}` };
  }
}
