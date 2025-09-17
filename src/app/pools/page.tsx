'use client';

import { AppHeader } from '@/components/app-header';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Droplets } from 'lucide-react';
import Image from 'next/image';

const pools = [
  {
    id: 1,
    name: 'OOLOLUA FOREST POOL',
    description: 'Help restore vital parts of the Amazon rainforest by funding the plantation of native tree species.',
    imageUrl: 'https://picsum.photos/seed/amazon/600/400',
    imageHint: 'rainforest',
    goal: 50000,
    raised: 35200,
    contributors: 478,
  },
  {
    id: 2,
    name: 'KENYA AIRWAYS GREEN POOL',
    description: 'Support the recovery of the Great Barrier Reef through coral planting and ecosystem monitoring.',
    imageUrl: 'https://picsum.photos/seed/reef/600/400',
    imageHint: 'coral reef',
    goal: 75000,
    raised: 21500,
    contributors: 231,
  },
  {
    id: 3,
    name: 'KARURA POOL',
    description: 'Contribute to the preservation of KARURA Forest',
    imageUrl: 'https://picsum.photos/seed/redwood/600/400',
    imageHint: 'redwood forest',
    goal: 100000,
    raised: 89000,
    contributors: 1042,
  },
];

export default function PoolsPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Conservation Pools"
        description="Contribute to global conservation projects and earn rewards."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pools.map((pool) => (
          <Card key={pool.id} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader className="p-0">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={pool.imageUrl}
                  alt={pool.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  data-ai-hint={pool.imageHint}
                />
              </div>
               <div className="p-6">
                 <CardTitle className="font-headline text-xl">{pool.name}</CardTitle>
                <CardDescription className="mt-2">{pool.description}</CardDescription>
               </div>
            </CardHeader>
            <CardContent className="flex-grow p-6 pt-0">
                <div className='space-y-4'>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-primary">
                                {pool.raised.toLocaleString()} JANI
                            </span>
                            <span className="text-sm text-muted-foreground">
                                {pool.goal.toLocaleString()} JANI
                            </span>
                        </div>
                        <Progress value={(pool.raised / pool.goal) * 100} />
                    </div>
                    <p className="text-sm text-muted-foreground">{pool.contributors.toLocaleString()} contributors</p>
                </div>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button className="w-full">
                <Droplets className="mr-2 h-4 w-4" />
                Join Pool
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
