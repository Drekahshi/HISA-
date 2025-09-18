import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { AppHeader } from '@/components/app-header';
import { BadgeDollarSign, LineChart, Users, TrendingUp, Bot, CheckCircle, Target, Briefcase, Droplets, Banknote, Lock, Building, BrainCircuit, BarChart, FileText } from 'lucide-react';
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

const projections = [
    {
        metric: 'Total Value Locked',
        value: '$42.8M',
        timeframe: 'next 12 months',
        icon: TrendingUp
    },
    {
        metric: 'Revenue Growth',
        value: '15%',
        timeframe: 'projected this quarter',
        icon: CheckCircle,
    },
    {
        metric: 'New Users',
        value: '5,000+',
        timeframe: 'by end of year',
        icon: Users,
    },
     {
        metric: 'UMOT Token Value',
        value: '$5.00',
        timeframe: 'next 6 months target',
        icon: Target,
    },
];

const tokenizedAssets = [
  {
    id: 'TA001',
    name: 'Kilimani Land Plot',
    value: 'KSh 5,000,000',
    fractions: 1000,
    status: 'Active',
  },
  {
    id: 'TA002',
    name: 'SME Green Bond',
    value: 'KSh 1,200,000',
    fractions: 500,
    status: 'Active',
  },
  {
    id: 'TA003',
    name: 'Community Solar Farm',
    value: 'KSh 8,500,000',
    fractions: 2500,
    status: 'Funding',
  },
];

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
      
      <Card>
        <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Building /> Umoja Central Securities Exchange (UCSE)</CardTitle>
            <CardDescription>Invest in the next generation of Kenyan SMEs through a transparent, AI-driven tokenization platform.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {smes.map((sme) => (
                    <Card key={sme.id} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardHeader>
                            <CardTitle className="font-headline text-lg">{sme.name}</CardTitle>
                            <CardDescription>{sme.sector}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs">
                                    <span className="font-medium text-primary">
                                       Raised: ${sme.raised.toLocaleString()}
                                    </span>
                                    <span className="text-muted-foreground">
                                        Goal: ${sme.fundingGoal.toLocaleString()}
                                    </span>
                                </div>
                                <Progress value={(sme.raised / sme.fundingGoal) * 100} />
                                 <p className="text-xs text-muted-foreground">{sme.investors} Investors</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center text-xs">
                                <div className="p-2 rounded-md bg-muted">
                                    <p className="font-bold flex items-center justify-center gap-1"><FileText className='h-3 w-3' />{sme.creditScore}</p>
                                    <p className="text-muted-foreground">Credit Score</p>
                                </div>
                                <div className="p-2 rounded-md bg-muted">
                                     <p className="font-bold flex items-center justify-center gap-1"><BarChart className='h-3 w-3' />{sme.marketOpportunity}/10</p>
                                    <p className="text-muted-foreground">Market</p>
                                </div>
                                 <div className="p-2 rounded-md bg-muted">
                                     <p className="font-bold flex items-center justify-center gap-1"><BrainCircuit className='h-3 w-3' />{sme.tokenizationReadiness}%</p>
                                    <p className="text-muted-foreground">Readiness</p>
                                </div>
                            </div>
                        </CardContent>
                         <CardFooter className="flex gap-2">
                            <Button variant="outline" className="w-full">View Details</Button>
                            <Button className="w-full">Invest Now</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </CardContent>
         <CardFooter className="border-t pt-6 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">Empowering Kenyan businesses through decentralized capital.</p>
            <Button>Register Your SME</Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Briefcase /> Asset Tokenization (TaaS)</CardTitle>
            <CardDescription>Manage your tokenized Real World Assets (RWAs).</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Asset ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Fractions</TableHead>
                   <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tokenizedAssets.map((asset) => (
                  <TableRow key={asset.id}>
                    <TableCell className="font-mono text-xs">{asset.id}</TableCell>
                    <TableCell className="font-medium">{asset.name}</TableCell>
                    <TableCell>{asset.value}</TableCell>
                    <TableCell>{asset.fractions}</TableCell>
                     <TableCell>
                        <Badge variant={asset.status === 'Active' ? 'default' : 'secondary'} className={asset.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {asset.status}
                        </Badge>
                     </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
           <CardFooter className="border-t pt-6">
            <Button>Tokenize New Asset</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Droplets /> Liquidity Pools</CardTitle>
            <CardDescription>Provide liquidity to earn rewards.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className='space-y-4 rounded-lg border p-4'>
                <div className='flex items-center gap-2'>
                    <Banknote className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-headline">UMOT / UMOS</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Liquidity</p>
                  <p className="text-2xl font-bold font-headline">$1.2M</p>
                </div>
                 <div>
                  <p className="text-sm text-muted-foreground">APR</p>
                  <p className="text-2xl font-bold font-headline text-green-600">24.5%</p>
                </div>
             </div>
             <Button className="w-full">Go to Swap</Button>
          </CardContent>
        </Card>
      </div>


      <div className="grid gap-6 lg:grid-cols-2">
        <ConservationChart />
        <Card className="lg:col-span-1 xl:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Bot />AI Financial Projections</CardTitle>
            <CardDescription>Projected growth based on current market data.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
                {projections.map((proj) => (
                    <div key={proj.metric} className="flex items-start gap-4">
                        <proj.icon className="h-8 w-8 text-primary mt-1" />
                        <div>
                            <p className="font-bold text-lg">{proj.value}</p>
                            <p className="text-sm text-muted-foreground">{proj.metric} ({proj.timeframe})</p>
                        </div>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

    