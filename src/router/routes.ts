import IndexView from '@/views/IndexView.vue';
import LoginView from '@/views/LoginView.vue';
import LogoutView from '@/views/LoginView.vue';
import NotFoundView from '@/views/404View.vue';
import HomeView from '@/views/index/HomeView.vue';
import AboutView from '@/views/index/AboutView.vue';
import AdminView from '@/views/AdminView.vue';
import AdminIndex from '@/views/admin/IndexView.vue';

export default [
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
    {
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
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminView,
        children: [
            {
                path: '',
                name: 'adminIndex',
                component: AdminIndex,
            },
            /* {
                path: '/list',
                name: 'adminList',
            },
            {
                path: '/content',
                name: 'adminContent',
            }, */
        ],
    },
];
