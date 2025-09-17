'use client';

import { AppHeader } from '@/components/app-header';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
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

const databaseEntries = [
  {
    treeId: 'T1234',
    species: 'Acacia',
    walletId: '0.0.567890',
    validator: 'Austin',
    status: 'Growing',
    timestamp: '2024-05-22 10:00 AM',
  },
  {
    treeId: 'T1235',
    species: 'Oak',
    walletId: '0.0.123456',
    validator: 'Chloe',
    status: 'Growing',
    timestamp: '2024-05-22 09:45 AM',
  },
  {
    treeId: 'T1236',
    species: 'Bamboo',
    walletId: '0.0.789012',
    validator: 'Marcus',
    status: 'Needs Attention',
    timestamp: '2024-05-21 03:30 PM',
  },
  {
    treeId: 'T1237',
    species: 'Maple',
    walletId: '0.0.345678',
    validator: 'Sofia',
    status: 'Growing',
    timestamp: '2024-05-21 11:15 AM',
  },
  {
    treeId: 'T1238',
    species: 'Pine',
    walletId: '0.0.567890',
    validator: 'Austin',
    status: 'Diseased',
    timestamp: '2024-05-20 05:00 PM',
  },
];

export default function DatabasePage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="JANI Database"
        description="Browse all conservation data submitted by validators."
      />
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Verified Conservation Data</CardTitle>
          <CardDescription>
            This table contains the immutable records of all verified conservation efforts.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tree ID</TableHead>
                <TableHead>Species</TableHead>
                <TableHead>Planted By (Wallet)</TableHead>
                <TableHead>Validator</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {databaseEntries.map((entry) => (
                <TableRow key={entry.treeId}>
                  <TableCell className="font-medium">{entry.treeId}</TableCell>
                  <TableCell>{entry.species}</TableCell>
                  <TableCell className="font-mono text-sm">{entry.walletId}</TableCell>
                  <TableCell>{entry.validator}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        entry.status === 'Growing'
                          ? 'default'
                          : entry.status === 'Needs Attention'
                          ? 'secondary'
                          : 'destructive'
                      }
                       className={
                          entry.status === 'Growing'
                            ? 'bg-primary/20 text-primary-dark hover:bg-primary/30 border border-primary/50'
                            : entry.status === 'Needs Attention'
                            ? 'bg-yellow-500/20 text-yellow-700 hover:bg-yellow-500/30 border border-yellow-500/50'
                            : 'bg-destructive/20 text-destructive-dark hover:bg-destructive/30 border border-destructive/50'
                        }
                    >
                      {entry.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{entry.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
