import React from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '../app/sharedcomponents/sidebar/Sidebar';
import { ThemeProvider } from '../components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const DashboardLayout = () => {
  return (
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main>
              <SidebarTrigger />
              <Outlet />
              <ModeToggle />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;
