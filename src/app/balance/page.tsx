'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleBalanceInquiry } from './actions';
import { AppHeader } from '@/components/app-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CircleDollarSign } from 'lucide-react';
import { useWallet } from '@/hooks/use-wallet';
import { useEffect, useState } from 'react';
import { getHbarBalance } from './hbar-actions';

const initialState = {
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Querying...' : 'Check Balance'}
    </Button>
  );
}

export default function BalancePage() {
  const { account, walletType } = useWallet();
  const [state, formAction] = useFormState(handleBalanceInquiry, initialState);
  const [hbarBalance, setHbarBalance] = useState<string | null>(null);
  const [hbarError, setHbarError] = useState<string | null>(null);
  const [isHbarLoading, setIsHbarLoading] = useState<boolean>(false);

  useEffect(() => {
    if (account && walletType === 'hashpack') {
      const fetchHbarBalance = async () => {
        setIsHbarLoading(true);
        setHbarError(null);
        try {
          const balance = await getHbarBalance(account);
          setHbarBalance(balance);
        } catch (error) {
          setHbarError(error instanceof Error ? error.message : 'An unknown error occurred.');
        } finally {
          setIsHbarLoading(false);
        }
      };
      fetchHbarBalance();
    } else {
        setHbarBalance(null);
        setHbarError(null);
    }
  }, [account, walletType]);

  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="JANI Token Balance"
        description="Check the JANI token balance for a specific account."
      />
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Account Balance Inquiry</CardTitle>
            <CardDescription>Enter an account ID to retrieve its JANI token balance, or connect your wallet to see your own balance.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="accountId">Account ID</Label>
                <Input id="accountId" name="accountId" placeholder="e.g., 0.0.123456" required defaultValue={account || ''} />
              </div>
              <SubmitButton />
              {state.error && (
                <Alert variant="destructive" className="mt-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{state.error}</AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
        </Card>

        <Card className="flex flex-col p-6 text-center bg-card justify-center">
            <div className='flex-grow space-y-4'>
                <div className="flex flex-col items-center">
                  <CircleDollarSign className="w-12 h-12 text-primary mb-2" />
                  <CardTitle className="font-headline text-2xl mb-1">JANI Balance</CardTitle>
                  {state.data ? (
                    <div>
                      <p className="text-4xl font-bold text-primary">
                        {state.data.tokenBalance.toLocaleString()} JANI
                      </p>
                      <p className="text-muted-foreground text-sm break-all">
                        For: {state.data.accountId}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      {account ? 'Click "Check Balance" to see your JANI tokens.' : 'Connect wallet to see your balance.'}
                    </p>
                  )}
                </div>
                {walletType === 'hashpack' && (
                    <div className="border-t pt-4 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-primary mb-2"><path d="M12 22V12h10V2zM4 12H2v10h10v-2z"></path></svg>
                         <CardTitle className="font-headline text-2xl mb-1">HBAR Balance</CardTitle>
                        {isHbarLoading && <p className="text-muted-foreground text-sm">Loading HBAR balance...</p>}
                        {hbarError && <p className="text-red-500 text-sm">{hbarError}</p>}
                        {hbarBalance !== null && (
                             <p className="text-3xl font-bold text-primary">{hbarBalance}</p>
                        )}
                   </div>
                )}
            </div>
        </Card>
      </div>
    </div>
  );
}
