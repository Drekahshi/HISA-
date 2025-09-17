'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const chartData = [
  { month: 'January', trees: 186 },
  { month: 'February', trees: 305 },
  { month: 'March', trees: 237 },
  { month: 'April', trees: 273 },
  { month: 'May', trees: 209 },
  { month: 'June', trees: 214 },
];

const chartConfig = {
  trees: {
    label: 'Trees Planted',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function ConservationChart() {
  return (
    <Card className="lg:col-span-1 xl:col-span-1">
      <CardHeader>
        <CardTitle className="font-headline">Conservation Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="trees" fill="var(--color-trees)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
