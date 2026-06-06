import { sidebarGroups } from '../../../app/config/SidebarItems';

export const getFirstAccessibleRoute = (authorities: string[]): string => {
  const visibleItems = sidebarGroups

    .flatMap((group) => group.items)

    .find((item) => authorities?.includes(item.permission));

  return visibleItems?.path ?? '/unauthorized';
};
