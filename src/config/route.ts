export default {
    path: '/admin',
    name: 'admin',
    component: 'AdminView',
    title: 'admin索引',

    children: [
        {
            path: '',
            name: 'adminIndex',
            component: 'IndexView',
            title: 'admin首页',
            icon: 'ep-home-filled',
        },
        {
            path: 'content',
            name: 'adminContent',
            component: 'ContentView',
            title: 'admin内容页',
        },
        {
            path: 'list',
            name: 'adminList',
            component: 'ListView',
            title: 'admin列表页',
            hidden: true,
        },
        {
            path: 'user',
            name: 'userIndex',
            // component: '../components/DefaultRoute.vue',
            title: '用户管理',
            icon: 'ep-location',
            children: [
                {
                    path: '',
                    name: 'user',
                    component: 'IndexView',
                    title: '用户首页',
                    icon: 'ep-user',
                },
            ],
        },
    ],
};
