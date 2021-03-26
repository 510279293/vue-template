import { _import } from '@/utils/utils';

const Test = _import('views/test/index');
const BasicLayout = _import('layouts/BasicLayout/index');
const Error404 = _import('components/404')
const HelloWorld = _import('components/HelloWorld')
const Login = _import('views/login/index')
export {
    Test,
    BasicLayout,
    Error404,
    HelloWorld,
    Login
}