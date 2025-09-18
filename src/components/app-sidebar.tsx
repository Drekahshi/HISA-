// src/components/app-sidebar.tsx
'use client';

import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import {
  LayoutDashboard,
  Upload,
  CircleDollarSign,
  Info,
  Database,
  Droplets,
  Coins,
  Landmark,
  Leaf,
  Tractor,
} from 'lucide-react';
import Link from 'next/link';
import { useEcosystem } from '@/context/ecosystem-provider';
import { cn } from '@/lib/utils';

const janiMenuItems = [
  {
    href: '/',
    label: 'dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/validate',
    label: 'upload',
    icon: Upload,
  },
  {
    href: '/balance',
    label: 'jani balance',
    icon: CircleDollarSign,
  },
  {
    href: '/database',
    label: 'jani database',
    icon: Database,
  },
  {
    href: '/pools',
    label: 'conservation pools',
    icon: Droplets,
  },
];

const umojaMenuItems = [
  {
    href: '/umoja',
    label: 'dashboard',
    icon: LayoutDashboard,
  },
];

const cultureMenuItems = [
  {
    href: '/chat',
    label: 'dashboard',
    icon: LayoutDashboard,
  },
];

const aboutLinks = {
    jani: { href: '/about', label: 'about jani' },
    umoja: { href: '/umoja', label: 'about umoja' },
    culture: { href: '/chat', label: 'about culture' },
}

export function AppSidebar() {
  const pathname = usePathname();
  const { ecosystem, setEcosystem } = useEcosystem();

  const menuItems =
    ecosystem === 'umoja'
      ? umojaMenuItems
      : ecosystem === 'culture'
      ? cultureMenuItems
      : janiMenuItems;
      
  const aboutLink = aboutLinks[ecosystem];

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <div className="p-2 flex flex-col gap-2">
            <h3 className="px-2 text-xs font-medium text-sidebar-foreground/70 uppercase">Ecosystems</h3>
            <SidebarMenu>
                <SidebarMenuItem>
                    <button onClick={() => setEcosystem('jani')} className={cn('flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2', ecosystem === 'jani' && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium')}>
                        <Leaf />
                        <span className="capitalize">jani</span>
                    </button>
                </SidebarMenuItem>
                <SidebarMenuItem>
                     <button onClick={() => setEcosystem('umoja')} className={cn('flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2', ecosystem === 'umoja' && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium')}>
                        <Coins />
                        <span className="capitalize">umoja hisa</span>
                    </button>
                </SidebarMenuItem>
                <SidebarMenuItem>
                     <button onClick={() => setEcosystem('culture')} className={cn('flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2', ecosystem === 'culture' && 'bg-sidebar-accent text-sidebar-accent-foreground font-medium')}>
                        <Landmark />
                        <span className="capitalize">culture hisa</span>
                    </button>
                </SidebarMenuItem>
            </SidebarMenu>
        </div>
        <SidebarSeparator />
        <SidebarMenu className='p-2'>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: 'right' }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span className="capitalize">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
         <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === aboutLink.href}
                tooltip={{ children: aboutLink.label, side: 'right' }}
              >
                <Link href={aboutLink.href}>
                  <Info />
                  <span className="capitalize">{aboutLink.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
