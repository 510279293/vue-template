import Vue from 'vue';
import Router from 'vue-router';
import {staticRouter, asyncRouter} from '@/config/routes';
// import { localStorage } from '@/utils/utils';

const routerMethods = ['push', 'replace'];

routerMethods.forEach(method => {
    const originalCall = (Router.prototype)[method];
    (Router.prototype)[method] = function (location, onResolve, onReject){
        if (onResolve || onReject) {
            return originalCall.call(this, location, onResolve, onReject);
        }
        return (originalCall.call(this, location)).catch(err => err);
    }
})

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    base: '/',
    routes: [...staticRouter, ...asyncRouter],
});

// router.beforeEach((to, from, next) => {
//    console.log(to,from,next)
// });

export default router;

