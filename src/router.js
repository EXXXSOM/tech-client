import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPages from '@/pages/MainPages';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: MainPages,
    },
    {
        path: '/Product',

        component: () => import('./pages/ProductPages'),
    },
    {
        path: '/Feedback',

        component: () => import('./pages/FeedbackPages'),
    },

    {
        path: '/Basket',

        component: () => import('./pages/BasketPages'),
    },
    {
        path: '/Product/:id',

        component: () => import('./pages/AboutProductPages'),
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
        path: '/Login',

        component: () => import('./pages/LoginPages'),
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
