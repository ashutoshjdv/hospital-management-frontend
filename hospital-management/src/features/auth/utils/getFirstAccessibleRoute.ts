import { sidebarItems } from '../../../app/config/SidebarItems';

export const getFirstAccessibleRoute = (authorities: string[]): string => {
  const visibleItems = sidebarItems.filter((item) => authorities.includes(item.permission));

  return visibleItems[0]?.path ?? '/unauthorized';
};
