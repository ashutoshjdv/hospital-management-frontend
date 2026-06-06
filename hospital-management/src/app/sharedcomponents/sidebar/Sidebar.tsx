import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { sidebarGroups } from '../../config/SidebarItems';
// import { Link } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, ChevronRight, User2 } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

const AppSidebar = () => {
  const authorities = useAppSelector((state) => state.auth.authorities);

  // const visibleItems = sidebarItems.filter(
  //   (item) => authorities?.includes(item.permission) ?? false,
  // );

  const visibleGroups = sidebarGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => authorities?.includes(item.permission)),
    }))
    .filter((group) => group.items.length > 0);

  console.log(visibleGroups);

  return (
    <>
      <Sidebar variant="inset">
        {/* header */}
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    Select Workspace
                    <ChevronDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        {/* main content */}
        {/* <nav>
          {visibleGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              {group.items.map((item) => (
                <div key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </div>
              ))}
            </div>
          ))}
        </nav> */}

        <SidebarContent className="gap-0">
          {/* We create a collapsible SidebarGroup for each parent. */}
          {visibleGroups.map((item) => (
            <Collapsible
              key={item.label}
              title={item.label}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <CollapsibleTrigger>
                    {item.label}{' '}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton asChild>
                            {/* <a href={item.path}>{item.label}</a> */}
                            <Link to={item.path}>{item.label}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ))}
        </SidebarContent>

        {/* footer */}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <User2 /> Username
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </>
  );
};

export default AppSidebar;
