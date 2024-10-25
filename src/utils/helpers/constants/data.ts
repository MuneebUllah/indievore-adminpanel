import dashboardIcon from 'assets/images/dashboardIcon.svg'
 import categoriesIcon from 'assets/images/categories-sidebar-icon.svg'
 import IngredientIcon from 'assets/images/ingredient-sidebar-icon.svg'
 import userIcon from 'assets/images/User.svg'
 import homeChefIcon from 'assets/images/HomeChef.svg'
 import retailersIcon from 'assets/images/RetailerIcon.svg'
 import managerIcon from 'assets/images/ManageBanners.svg'
 import settingIcon from 'assets/images/setting.svg'

interface SidebarItem {
  text: string;
  path: string;
  icon: any;
}

export const sidebarData: SidebarItem[] = [
  {
    text: "Dashboard",
    path: "/",
    icon: dashboardIcon,
  },
  { text: "Manage Categories", path: "/categories", icon: categoriesIcon },
  { text: "Manage Ingredients", path: "/ingredient", icon: IngredientIcon },
  { text: "Manage User List", path: "/user", icon: userIcon },
  { text: "Manage Home Cook", path: "/home-chef", icon: homeChefIcon },
  { text: "Manage  Retailers", path: "/retailer", icon: retailersIcon },
  { text: "Activity Management", path: "/manage-state", icon: settingIcon },
  { text: "Manage Banners", path: "/banners", icon: managerIcon },
];

