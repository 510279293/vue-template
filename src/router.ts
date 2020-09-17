import { createRouter, createWebHistory } from 'vue-router';
import {staticRouter, asyncRouter} from '@/config/routes';
// import { localStorage } from '@/utils/utils';
const routerHistory = createWebHistory('/')
const router = createRouter({
    history: routerHistory,
    routes: [...staticRouter, ...asyncRouter],
});

// router.beforeEach((to, from, next) => {
//    console.log(to,from,next)
// });
export default router;
