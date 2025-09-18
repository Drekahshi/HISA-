import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { AppHeader } from '@/components/app-header';
import { BadgeDollarSign, LineChart, Users, TrendingUp, Bot, CheckCircle, Target, Briefcase, Droplets, Banknote, Lock, Building, BrainCircuit, BarChart, FileText, PlusCircle, Repeat } from 'lucide-react';
import { ConservationChart } from '@/components/conservation-chart';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

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

const liquidityPools = [
  {
    id: 'pool_001',
    name: 'UMOT / UMOS',
    tvl: 1250000,
    volume24h: 78000,
    apr: 24.5,
  },
  {
    id: 'pool_002',
    name: 'UMOT / HBAR',
    tvl: 850000,
    volume24h: 45000,
    apr: 18.2,
  },
  {
    id: 'pool_003',
    name: 'UMOS / USDC',
    tvl: 2500000,
    volume24h: 150000,
    apr: 8.5,
  },
];

export default function UmojaPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Umoja Hisa Dashboard"
        description="Track financial metrics and ecosystem growth in real-time."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Value Locked
            </CardTitle>
            <Lock className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">$42.8M</div>
            <p className="text-xs text-muted-foreground">+12.4% from last month</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Revenue
            </CardTitle>
            <BadgeDollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">$2.4M</div>
            <p className="text-xs text-muted-foreground">+8.2% from last month</p>
          </CardContent>
        </Card>
         <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Users
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">28.5K</div>
            <p className="text-xs text-muted-foreground">+15.7% from last month</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Transaction Volume</CardTitle>
            <LineChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">186.4K</div>
            <p className="text-xs text-muted-foreground">+22.3% this month</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
           <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Droplets /> HISA SAUCE Swap Pools</CardTitle>
            <CardDescription>Provide liquidity to earn rewards and swap tokens seamlessly.</CardDescription>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pool</TableHead>
                  <TableHead>TVL</TableHead>
                  <TableHead>Volume (24h)</TableHead>
                  <TableHead>APR</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {liquidityPools.map((pool) => (
                  <TableRow key={pool.id}>
                    <TableCell className="font-medium">{pool.name}</TableCell>
                    <TableCell>${pool.tvl.toLocaleString()}</TableCell>
                    <TableCell>${pool.volume24h.toLocaleString()}</TableCell>
                    <TableCell className="text-green-600 font-medium">{pool.apr.toFixed(1)}%</TableCell>
                    <TableCell className="text-right">
                       <div className="flex justify-end gap-2">
                         <Button variant="outline" size="sm">
                           <PlusCircle />
                           Add
                         </Button>
                         <Button variant="outline" size="sm">
                           <Repeat />
                           Swap
                         </Button>
                       </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
           <CardFooter className="border-t pt-6">
            <Button>Create New Pool</Button>
          </CardFooter>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline flex items-center gap-2"><Building /> Umoja Central Securities Exchange (UCSE)</CardTitle>
                <CardDescription>Invest in Kenyan SMEs through our AI-driven tokenization platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {smes.slice(0, 2).map((sme) => (
                    <Card key={sme.id} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className="font-headline text-base">{sme.name}</CardTitle>
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
                                    <p className="font-bold flex items-center justify-center gap-1"><FileText className='h-3 w-3' />{sme.creditScore}</p>
                                    <p className="text-muted-foreground text-[10px]">Credit Score</p>
                                </div>
                                <div className="p-1.5 rounded-md bg-muted">
                                     <p className="font-bold flex items-center justify-center gap-1"><BarChart className='h-3 w-3' />{sme.marketOpportunity}/10</p>
                                    <p className="text-muted-foreground text-[10px]">Market</p>
                                </div>
                                 <div className="p-1.5 rounded-md bg-muted">
                                     <p className="font-bold flex items-center justify-center gap-1"><BrainCircuit className='h-3 w-3' />{sme.tokenizationReadiness}%</p>
                                    <p className="text-muted-foreground text-[10px]">Readiness</p>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter className="flex gap-2 !pt-0">
                            <Button variant="outline" size="sm" className="w-full">Details</Button>
                            <Button size="sm" className="w-full">Invest</Button>
                        </CardFooter>
                    </Card>
                ))}
            </CardContent>
             <CardFooter className="border-t pt-4">
                <Button variant="secondary" className="w-full">Register Your SME</Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
