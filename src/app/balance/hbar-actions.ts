'use server';

import { Client, AccountBalanceQuery, AccountId } from '@hashgraph/sdk';

export async function getHbarBalance(accountId: string): Promise<string> {
    if (!process.env.HEDERA_OPERATOR_ID || !process.env.HEDERA_OPERATOR_KEY) {
        throw new Error('Hedera operator ID and key are not configured in environment variables.');
    }

    try {
        const client = Client.forTestnet().setOperator(
            process.env.HEDERA_OPERATOR_ID,
            process.env.HEDERA_OPERATOR_KEY
        );
        
        const account = AccountId.fromString(accountId);

        const accountBalance = await new AccountBalanceQuery()
            .setAccountId(account)
            .execute(client);
        
        return accountBalance.hbars.toString();
    } catch (error) {
        console.error('Error fetching HBAR balance:', error);
        if (error instanceof Error && error.message.includes('INVALID_ACCOUNT_ID')) {
            throw new Error(`The account ID "${accountId}" is not valid on the Hedera network.`);
        }
        throw new Error('Failed to fetch HBAR balance from Hedera network.');
    }
}
