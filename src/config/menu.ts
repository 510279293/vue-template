// eslint-disable-next-line no-unused-vars
import { _import } from '@/utils/utils';

const BasicLayout = _import('layouts/BasicLayout/index');

const MenusRouteConfig = [
 {
    path: '/a',
    name: 'admin',
    menuName: '菜单一',
    hidden: false,
    component: BasicLayout,
    meta: {
      title: '后台'
    },
    children: [
      {
        path: '/aa',
        name: 'admin',
        menuName: '菜单1.1',
        component: _import('views/test/index'),
        meta: {
          title: '后台'
        },
      }
    ],
 },
 {
    path: '/b',
    name: 'admin',
    menuName: '菜单二',
    redirect: '/bb',
    hidden: true,
    component: BasicLayout,
    meta: {
      title: '后台'
    },
    children: [
      {
        path: '/bb',
        name: 'admin',
        menuName: '菜单2.1',
        component: _import('views/test/index'),
        meta: {
          title: '后台'
        },
      }
    ],
 },
 {
    path: '/c',
    name: 'admin',
    menuName: '菜单三',
    component: BasicLayout,
    meta: {
      title: '后台'
    },
    children: [
      {
        path: '/cc',
        name: 'admin',
        menuName: '菜单3.1',
        component: _import('views/test/index'),
        meta: {
          title: '后台'
        },
      }
    ],
 },
 {
    path: '/d',
    name: 'admin',
    menuName: '菜单四',
    component: BasicLayout,
    meta: {
      title: '后台'
    },
    children: [
      {
        path: '/dd',
        name: 'admin',
        menuName: '菜单4.1',
        component: _import('views/test/index'),
        meta: {
          title: '后台'
        },
      }
    ],
 }
]

export default MenusRouteConfig;