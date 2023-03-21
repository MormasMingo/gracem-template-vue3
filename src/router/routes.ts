import IndexView from '@/views/IndexView.vue';
import LoginView from '@/views/LoginView.vue';
import LogoutView from '@/views/LoginView.vue';
import NotFoundView from '@/views/404View.vue';
import HomeView from '@/views/index/HomeView.vue';
import AboutView from '@/views/index/AboutView.vue';
import AdminView from '@/views/AdminView.vue';
import AdminIndex from '@/views/admin/IndexView.vue';
import AdminContentView from '@/views/admin/ContentView.vue';

import { routeConfig, makeRoute } from '@/config';
import type { RouteRecordRaw } from 'vue-router';
import type { RouteItem } from '@/config/route';

const systemRoutes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/logout',
        name: 'logout',
        component: LogoutView,
    },
    {
        path: '/404',
        name: '404',
        component: NotFoundView,
    },
];

const indexRoute = {
    path: '/',
    name: 'index',
    component: IndexView,
    children: [
        {
            path: '',
            name: 'home',
            component: HomeView,
        },

        /* {
            path: '/list',
            name: 'list',
        },
        {
            path: '/content',
            name: 'content',
        }, */
        {
            path: 'about',
            name: 'about',
            component: AboutView,
        },
    ],
};

const adminRoute: RouteItem | Array<RouteItem> = makeRoute(routeConfig);

export default [
    ...systemRoutes,
    indexRoute,
    adminRoute,
] as Array<RouteRecordRaw>;

export { adminRoute };
