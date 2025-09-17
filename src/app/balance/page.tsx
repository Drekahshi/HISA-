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
import Image from 'next/image';

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
  const [state, formAction] = useFormState(handleBalanceInquiry, initialState);

  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="JANI Token Balance"
        description="Check the JANI token balance for a specific project."
      />
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Project Balance Inquiry</CardTitle>
            <CardDescription>Enter a project ID to retrieve its JANI token balance.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectId">Project ID</Label>
                <Input id="projectId" name="projectId" placeholder="e.g., P-XYZ-001" required />
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
              <p className="text-muted-foreground">
                Balance for Project: {state.data.projectId}
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">
              Enter a project ID and click "Check Balance" to see the result.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
