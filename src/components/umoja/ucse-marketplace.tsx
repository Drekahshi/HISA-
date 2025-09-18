'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Building,
  BrainCircuit,
  BarChart,
  FileText,
} from 'lucide-react';

const smes = [
  {
    id: 'SME_001',
    name: 'Green-Tech Innovations',
    sector: 'Renewable Energy',
    creditScore: 820,
    marketOpportunity: 8.5,
    tokenizationReadiness: 95,
    fundingGoal: 500000,
    raised: 250000,
    investors: 42,
  },
  {
    id: 'SME_002',
    name: 'Agri-Connect Solutions',
    sector: 'Agriculture',
    creditScore: 780,
    marketOpportunity: 9.2,
    tokenizationReadiness: 88,
    fundingGoal: 300000,
    raised: 300000,
    investors: 89,
  },
  {
    id: 'SME_003',
    name: 'Afya-Care Diagnostics',
    sector: 'Healthcare',
    creditScore: 850,
    marketOpportunity: 8.8,
    tokenizationReadiness: 92,
    fundingGoal: 750000,
    raised: 450000,
    investors: 112,
  },
];

export function UcseMarketplace() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
          <Building /> Umoja Central Securities Exchange (UCSE)
        </CardTitle>
        <CardDescription>
          Invest in Kenyan SMEs through our enterprise-grade tokenization
          platform, powered by HSUITE.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {smes.slice(0, 2).map((sme) => (
          <Card
            key={sme.id}
            className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <CardHeader>
              <CardTitle className="font-headline text-base">
                {sme.name}
              </CardTitle>
              <CardDescription className="text-xs">{sme.sector}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-3 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-primary">
                    Raised: ${sme.raised.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    Goal: ${sme.fundingGoal.toLocaleString()}
                  </span>
                </div>
                <Progress value={(sme.raised / sme.fundingGoal) * 100} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-1.5 rounded-md bg-muted">
                  <p className="font-bold flex items-center justify-center gap-1">
                    <FileText className="h-3 w-3" />
                    {sme.creditScore}
                  </p>
                  <p className="text-muted-foreground text-[10px]">
                    Credit Score
                  </p>
                </div>
                <div className="p-1.5 rounded-md bg-muted">
                  <p className="font-bold flex items-center justify-center gap-1">
                    <BarChart className="h-3 w-3" />
                    {sme.marketOpportunity}/10
                  </p>
                  <p className="text-muted-foreground text-[10px]">Market</p>
                </div>
                <div className="p-1.5 rounded-md bg-muted">
                  <p className="font-bold flex items-center justify-center gap-1">
                    <BrainCircuit className="h-3 w-3" />
                    {sme.tokenizationReadiness}%
                  </p>
                  <p className="text-muted-foreground text-[10px]">Readiness</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 !pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Details
              </Button>
              <Button size="sm" className="w-full">
                Invest
              </Button>
            </CardFooter>
          </Card>
        ))}
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button variant="secondary" className="w-full">
          Register Your SME
        </Button>
      </CardFooter>
    </Card>
  );
}
