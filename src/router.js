import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPages from '@/pages/FilesPages';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPages,
    },
    {
        path: '/Admin',

        component: () => import('./pages/AdminPages'),
    },
    {
        path: '/Files',

        component: () => import('./pages/FilesPages'),
    },
    {
        path: '*',
        component: () => import('./pages/NotFoundPages.vue'),
        meta: { title: 'PageNotFound' },
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
