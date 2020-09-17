import Vue from 'vue';
import Router from 'vue-router';
import {staticRouter, asyncRouter} from '@/config/routes';
// import { localStorage } from '@/utils/utils';
const routerMethods: string[] = ['push', 'replace'];
const RouterPrototype: {[key:string]: any} = Router.prototype

routerMethods.forEach((method: string) => {
    const originalCall = RouterPrototype[method];
    RouterPrototype[method] = function (location: any, onResolve: any, onReject: any){
        if (onResolve || onReject) {
            return originalCall.call(this, location, onResolve, onReject);
        }
        return (originalCall.call(this, location)).catch((err: any) => err);
    }
})

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [...staticRouter, ...asyncRouter],
});

// router.beforeEach((to, from, next) => {
//    console.log(to,from,next)
// });

export default router;

