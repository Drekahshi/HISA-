import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { AppHeader } from '@/components/app-header';
import { Users, BadgeDollarSign, LineChart, TrendingUp, CheckCircle, Target, Bot, ShieldCheck, PlusCircle, ShoppingCart, Wallet } from 'lucide-react';
import { ConservationChart } from '@/components/conservation-chart';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const projections = [
    {
        metric: 'Carbon Offset',
        value: '1,500 tons',
        timeframe: 'next 12 months',
        icon: TrendingUp
    },
    {
        metric: 'Tree Survival Rate',
        value: '95%',
        timeframe: 'based on current data',
        icon: CheckCircle,
    },
    {
        metric: 'New Validators',
        value: '50+',
        timeframe: 'by end of year',
        icon: Users,
    },
     {
        metric: 'JANI Minted',
        value: '25,000',
        timeframe: 'next 6 months',
        icon: Target,
    },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Impact Dashboard"
        description="Track conservation efforts and JANI token distribution in real-time."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Validators Active
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">24</div>
            <p className="text-xs text-muted-foreground">+2 since last month</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              JANI Tokens Minted
            </CardTitle>
            <BadgeDollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">10,482 JANI</div>
            <p className="text-xs text-muted-foreground">1 JANI per verified tree</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growth Rate</CardTitle>
            <LineChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">+214</div>
            <p className="text-xs text-muted-foreground">Trees verified this month</p>
          </CardContent>
        </Card>
         <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
            <Wallet className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">5OO JANI</div>
            <p className="text-xs text-muted-foreground">Connected Wallet</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ConservationChart />
        <Card className="lg:col-span-1 xl:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Bot />AI Conservation Projections</CardTitle>
            <CardDescription>Projected impact based on current growth and data.</CardDescription>
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

      <div>
        <h2 className="text-xl font-bold font-headline tracking-tight text-foreground mb-4">
            Ecosystem Actions
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
            <Link href="/validate">
              <Card className="group flex flex-col items-center justify-center p-6 text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <ShieldCheck className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <CardTitle className="font-headline text-lg">Become a Validator</CardTitle>
                  <CardDescription className="text-sm">Verify conservation efforts and earn JANI tokens.</CardDescription>
              </Card>
            </Link>
             <Link href="/chat">
              <Card className="group flex flex-col items-center justify-center p-6 text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <PlusCircle className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <CardTitle className="font-headline text-lg">Mint an NFT</CardTitle>
                  <CardDescription className="text-sm">Create and register a unique cultural heritage asset.</CardDescription>
              </Card>
            </Link>
            <Link href="/chat">
              <Card className="group flex flex-col items-center justify-center p-6 text-center h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                  <ShoppingCart className="w-12 h-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                  <CardTitle className="font-headline text-lg">Explore Marketplace</CardTitle>
                  <CardDescription className="text-sm">Trade and collect verified cultural and conservation assets.</CardDescription>
              </Card>
            </Link>
        </div>
      </div>
    </div>
  );
}
