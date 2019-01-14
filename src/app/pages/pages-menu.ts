import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '控制台',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '系统菜单',
    group: true,
  },
  {
    title: '商品管理',
    icon: 'nb-grid-a',
    children: [
      {
        title: '查找商品',
        link: '/pages/catalog/add',
      },
      {
        title: '分类管理',
        link: '/pages/catalog/list',
      }
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
