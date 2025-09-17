import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { AppHeader } from '@/components/app-header';
import { Trees, BadgeDollarSign, LineChart, Users } from 'lucide-react';
import { ConservationChart } from '@/components/conservation-chart';

const recentVerifications = [
  {
    treeId: 'T1234',
    species: 'Acacia',
    validator: 'Austin',
    status: 'Growing',
    timestamp: '2024-05-22 10:00 AM',
  },
  {
    treeId: 'T1235',
    species: 'Oak',
    validator: 'Chloe',
    status: 'Growing',
    timestamp: '2024-05-22 09:45 AM',
  },
  {
    treeId: 'T1236',
    species: 'Bamboo',
    validator: 'Marcus',
    status: 'Needs Attention',
    timestamp: '2024-05-21 03:30 PM',
  },
  {
    treeId: 'T1237',
    species: 'Maple',
    validator: 'Sofia',
    status: 'Growing',
    timestamp: '2024-05-21 11:15 AM',
  },
  {
    treeId: 'T1238',
    species: 'Pine',
    validator: 'Austin',
    status: 'Diseased',
    timestamp: '2024-05-20 05:00 PM',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Impact Dashboard"
        description="Track conservation efforts and JANI token distribution in real-time."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ConservationChart />
        <Card className="lg:col-span-1 xl:col-span-1">
          <CardHeader>
            <CardTitle className="font-headline">Recent Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tree ID</TableHead>
                  <TableHead>Species</TableHead>
                  <TableHead>Validator</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentVerifications.map((item) => (
                  <TableRow key={item.treeId}>
                    <TableCell className="font-medium">{item.treeId}</TableCell>
                    <TableCell>{item.species}</TableCell>
                    <TableCell>{item.validator}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === 'Growing'
                            ? 'default'
                            : item.status === 'Needs Attention'
                            ? 'secondary'
                            : 'destructive'
                        }
                        className={
                          item.status === 'Growing'
                            ? 'bg-primary/20 text-primary-dark hover:bg-primary/30 border border-primary/50'
                            : item.status === 'Needs Attention'
                            ? 'bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 border border-yellow-500/50'
                            : 'bg-destructive/20 text-destructive-dark hover:bg-destructive/30 border border-destructive/50'
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
