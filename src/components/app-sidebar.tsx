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
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import {
  LayoutDashboard,
  Upload,
  CircleDollarSign,
  Info,
  Database,
  Droplets,
} from 'lucide-react';
import Link from 'next/link';

const menuItems = [
  {
    href: '/',
    label: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    href: '/validate',
    label: 'Upload',
    icon: Upload,
  },
  {
    href: '/balance',
    label: 'JANI Balance',
    icon: CircleDollarSign,
  },
  {
    href: '/database',
    label: 'JANI Database',
    icon: Database,
  },
  {
    href: '/pools',
    label: 'Conservation Pools',
    icon: Droplets,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.label, side: 'right' }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
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
                tooltip={{ children: "About JANI", side: 'right' }}
              >
                <Link href="#">
                  <Info />
                  <span>About JANI</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
