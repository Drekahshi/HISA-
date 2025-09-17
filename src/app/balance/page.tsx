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
import { useEffect } from 'react';

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
  const { account } = useWallet();
  const [state, formAction] = useFormState(handleBalanceInquiry, initialState);

  // Automatically submit the form when an account is connected
  useEffect(() => {
    if (account) {
      const formData = new FormData();
      formData.append('accountId', account);
      // We are calling the action directly
      handleBalanceInquiry(initialState, formData).then((newState) => {
        // This is a bit of a hack to update the state from an effect
        // A better approach in a larger app might involve a state management library
        document.querySelector('button[type="submit"]')?.click();
      });
    }
  }, [account]);


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

        <Card className="flex flex-col items-center justify-center p-6 text-center bg-card">
          <CircleDollarSign className="w-16 h-16 text-primary mb-4" />
          <CardTitle className="font-headline text-2xl mb-2">Token Balance</CardTitle>
          {state.data ? (
            <div>
              <p className="text-4xl font-bold text-primary">
                {state.data.tokenBalance.toLocaleString()} JANI
              </p>
              <p className="text-muted-foreground text-sm break-all">
                Balance for: {state.data.accountId}
              </p>
            </div>
          ) : (
             account ? (
                 <p className="text-muted-foreground">Click "Check Balance" to see your tokens.</p>
             ) : (
                <p className="text-muted-foreground">
                Connect your wallet to check your balance.
                </p>
            )
          )}
        </Card>
      </div>
    </div>
  );
}