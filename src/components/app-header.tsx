'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';

type AppHeaderProps = {
  title: string;
  description?: string;
};

export function AppHeader({ title, description }: AppHeaderProps) {
  return (
    <header className="flex items-center gap-4">
      <SidebarTrigger className="md:hidden" />
      <div>
        <h1 className="text-2xl font-bold font-headline tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
