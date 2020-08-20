import { createRouter, createWebHistory } from 'vue-router';
import routerConfig from '@/config/routes';
// import { localStorage } from '@/utils/utils';
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    base: process.env.BASE_URL,
    routes: routerConfig,
});

// router.beforeEach((to, from, next) => {
//    console.log(to,from,next)
// });

export default router;

