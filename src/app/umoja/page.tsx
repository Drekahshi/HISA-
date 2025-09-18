import { AppHeader } from '@/components/app-header';
import { UmojaStats } from '@/components/umoja/umoja-stats';
import { SwapPools } from '@/components/umoja/swap-pools';
import { UcseMarketplace } from '@/components/umoja/ucse-marketplace';

export default function UmojaPage() {
  return (
    <div className="flex flex-col gap-8">
      <AppHeader
        title="Umoja Hisa Dashboard"
        description="Track financial metrics and ecosystem growth in real-time."
      />

      <UmojaStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SwapPools />
        <UcseMarketplace />
      </div>
    </div>
  );
}
