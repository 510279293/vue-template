// vue 路由配置
import MenusRouteConfig from './menu';
import { _import } from '@/utils/utils';

const routerConfig = [
  ...MenusRouteConfig,
  {
    path: '/test',
    name: 'admin',
    menuName: 'ts-test',
    component: _import('components/HelloWorld'),
    meta: {
      title: '后台'
    },
  }
]

export default routerConfig;