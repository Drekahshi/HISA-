'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useWallet } from '@/hooks/use-wallet';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Logo } from '@/components/logo';

export default function LoginPage() {
  const { account, connectMetaMask, connectHashPack } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (account) {
      router.push('/');
    }
  }, [account, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="font-headline text-2xl">Connect Your Wallet</CardTitle>
          <CardDescription>Choose your preferred wallet to log in to JANI.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={connectMetaMask} className="w-full">
            <svg className="mr-2 h-5 w-5" width="24" height="24" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M938.15 233.36L511.96 11.21L85.82 233.36L387.89 367.75L387.89 594.39L237.4 507.57L237.4 430.2L85.82 507.57L511.96 743.76L938.15 507.57L938.15 233.36Z" fill="#E2761B"/>
                <path d="M512 11.21L85.82 233.36L512 743.76L938.15 233.36L512 11.21Z" fill="#E4761B"/>
                <path d="M636.12 367.75L512.05 430.13L387.98 367.75L512.05 11.21L636.12 367.75Z" fill="#F6851B"/>
                <path d="M938.15 233.36L636.12 367.75L512.05 430.13L512.05 743.76L938.15 507.57L938.15 233.36Z" fill="#C03403"/>
                <path d="M85.82 233.36L237.4 430.13V507.57L387.89 594.39V367.75L85.82 233.36Z" fill="#D75F1E"/>
                <path d="M636.12 594.39L512.05 656.77L387.98 594.39L512.05 845.24L636.12 594.39Z" fill="#F6851B"/>
                <path d="M636.12 594.39L512.05 656.77V845.24L636.12 594.39Z" fill="#C03403"/>
                <path d="M387.89 594.39L512.02 656.77V845.24L387.89 594.39Z" fill="#D75F1E"/>
                <path d="M237.4 507.57L387.89 594.39L512.02 532L512.02 430.13L237.4 507.57Z" fill="#E2761B"/>
                <path d="M786.61 507.57L636.12 594.39L512.05 532L512.05 430.13L786.61 507.57Z" fill="#E4761B"/>
            </svg>
            Connect MetaMask
          </Button>
          <Button onClick={connectHashPack} className="w-full">
            <svg className="mr-2 h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22V12h10V2zM4 12H2v10h10v-2z" fill="currentColor"></path>
            </svg>
            Connect HashPack
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
