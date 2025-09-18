import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { AppHeader } from '@/components/app-header';
import { BadgeDollarSign, LineChart, Users, TrendingUp, Bot, CheckCircle, Target, ShieldCheck, Palette, Music, Mic } from 'lucide-react';
import { ConservationChart } from '@/components/conservation-chart';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projections = [
    {
        metric: 'New Cultural Assets',
        value: '1,000+',
        timeframe: 'next 3 months',
        icon: TrendingUp
    },
    {
        metric: 'Contributor Growth',
        value: '500 new members',
        timeframe: 'by end of quarter',
        icon: CheckCircle,
    },
    {
        metric: 'Languages Preserved',
        value: '10 new dialects',
        timeframe: 'by end of year',
        icon: Users,
    },
     {
        metric: 'CHAT Tokens Earned',
        value: '1.5M',
        timeframe: 'next 6 months',
        icon: Target,
    },
];

const heritageAssets = [
  {
    id: 1,
    title: 'Luo Oral Traditions',
    category: 'Oral History',
    imageUrl: 'https://picsum.photos/seed/luo-story/600/400',
    imageHint: 'elder storytelling',
    icon: Mic,
  },
  {
    id: 2,
    title: 'Akan Drumming Rhythms',
    category: 'Music',
    imageUrl: 'https://picsum.photos/seed/akan-drums/600/400',
    imageHint: 'african drums',
    icon: Music,
  },
  {
    id: 3,
    title: 'Maasai Beadwork Patterns',
    category: 'Crafts & Arts',
    imageUrl: 'https://picsum.photos/seed/maasai-beads/600/400',
    imageHint: 'beadwork art',
    icon: Palette,
  },
];

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Culture Hisa Dashboard"
        description="Track cultural preservation efforts and community engagement."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Contributors
            </CardTitle>
            <Users className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">3.2K</div>
            <p className="text-xs text-muted-foreground">+89 joined recently</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Cultural Assets
            </CardTitle>
            <BadgeDollarSign className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">12.5K</div>
            <p className="text-xs text-muted-foreground">+156 new this week</p>
          </CardContent>
        </Card>
        <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <LineChart className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">+18%</div>
            <p className="text-xs text-muted-foreground">this month</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Cultural Heritage Marketplace</CardTitle>
          <CardDescription>Mint, trade, and collect verified cultural assets as NFTs.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {heritageAssets.map((asset) => (
            <Card key={asset.id} className="flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={asset.imageUrl}
                  alt={asset.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={asset.imageHint}
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold p-2 rounded-full flex items-center gap-2">
                    <asset.icon className="h-4 w-4" />
                    <span>{asset.category}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-headline">{asset.title}</CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">View Details</Button>
                <Button className="w-full">Make Offer</Button>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
        <CardFooter className="border-t pt-6">
            <Button>Mint New Cultural Asset</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <ConservationChart />
        <Card className="lg:col-span-1 xl:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2"><Bot />AI Cultural Projections</CardTitle>
            <CardDescription>Projected impact based on current community growth.</CardDescription>
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
