// material icon
import PeopleIcon from '@mui/icons-material/People';
import DashboardSharpIcon from '@mui/icons-material/DashboardSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

// configs
import { PATH_NAME, DRAWER_MENU_LABEL } from 'configs';

export const navBarCommon = [
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Report',
        href: PATH_NAME.DASHBOARD,
        icon: DashboardSharpIcon,
        label: DRAWER_MENU_LABEL.DASHBOARD,
      },
      {
        title: 'Configurations',
        href: PATH_NAME.CONFIGURATIONS,
        icon: SettingsSharpIcon,
        label: DRAWER_MENU_LABEL.CONFIGURATIONS,
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
        label: DRAWER_MENU_LABEL.USERS,
      },
    ],
  },
];
