'use client';

import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Image from 'next/image';
import { handleValidation } from './actions';
import { AppHeader } from '@/components/app-header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Bot, Leaf, HeartPulse, ShieldAlert, AlertCircle, CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useWallet } from '@/hooks/use-wallet';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  data: null,
  error: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Analyzing...' : 'SUBMIT'}
    </Button>
  );
}

export default function ValidatePage() {
  const { account } = useWallet();
  const { toast } = useToast();
  const [state, formAction] = useFormState(handleValidation, initialState);
  const [photoPreview, setPhotoPreview] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (state.success) {
      toast({
        title: "Validation Successful!",
        description: "1 JANI token has been minted to your account.",
        action: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
    }
  }, [state.success, toast]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

  const defaultImage = PlaceHolderImages.find(p => p.id === 'tree-1');

  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="AI Tree Health Validator"
        description="Submit tree data for an AI-powered health analysis and mint a JANI token."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Submit Verification Data</CardTitle>
            <CardDescription>Upload a photo and provide details about the tree.</CardDescription>
          </CardHeader>
          <CardContent>
            {!account ? (
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Wallet Not Connected</AlertTitle>
                <AlertDescription>
                  Please connect your wallet to submit a validation request.
                </AlertDescription>
              </Alert>
            ) : (
              <form action={formAction} className="space-y-6">
                <input type="hidden" name="walletAccount" value={account} />
                <div className="space-y-2">
                  <Label htmlFor="photo">Tree Photo</Label>
                  <Input id="photo" name="photo" type="file" required onChange={handleFileChange} accept="image/*" />
                </div>
                
                <div className="w-full aspect-video rounded-md overflow-hidden border bg-muted flex items-center justify-center">
                   <Image
                      src={photoPreview || defaultImage?.imageUrl || "https://picsum.photos/seed/tree1/800/600"}
                      alt="Tree preview"
                      width={800}
                      height={600}
                      className="object-cover h-full w-full"
                      data-ai-hint={defaultImage?.imageHint || 'tree'}
                    />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="treeDescription">Tree Description</Label>
                  <Textarea id="treeDescription" name="treeDescription" placeholder="e.g., Young acacia tree in a sunny, dry environment. Leaves appear slightly yellow." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gpsLocation">GPS location</Label>
                  <Input id="gpsLocation" name="gpsLocation" placeholder="e.g., 1.2921, 36.8219" required />
                </div>
                <SubmitButton />
              </form>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Bot /> AI Analysis Result
            </CardTitle>
             <CardDescription>The AI's assessment of the tree's health will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            {state.error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Analysis Failed</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
              </Alert>
            )}

            {!state.data && !state.error && (
               <div className="text-center text-muted-foreground py-12">
                  <Leaf className="mx-auto h-12 w-12" />
                  <p className="mt-4">Results will be displayed once analysis is complete.</p>
              </div>
            )}
            
            {state.data && (
              <div className="space-y-6">
                 <Alert>
                    <HeartPulse className="h-4 w-4" />
                    <AlertTitle>Overall Health Status</AlertTitle>
                    <AlertDescription>
                        <p className="font-bold text-lg text-foreground">{state.data.healthStatus}</p>
                    </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold flex items-center gap-2"><ShieldAlert /> Issues Identified</h3>
                    <p className="text-muted-foreground">{state.data.issuesIdentified}</p>
                  </div>
                   {state.data.affectedByNaturalPhenomena && (
                      <div>
                        <h3 className="font-semibold flex items-center gap-2"><AlertCircle /> Natural Phenomena</h3>
                        <p className="text-muted-foreground">{state.data.affectedByNaturalPhenomena}</p>
                      </div>
                   )}
                  <div>
                    <h3 className="font-semibold flex items-center gap-2"><Terminal /> Recommendations</h3>
                    <p className="text-muted-foreground">{state.data.recommendations}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
