import type { RouteRecordRaw } from 'vue-router';

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
            hidden: true,
        },
    ],
};

export declare type RouteConfigItem = {
    path: string;
    name: string;
    component: string;
    title?: string;
    hidden?: boolean;
    children?: Array<RouteConfigItem>;
};

export declare type RouteItem = RouteRecordRaw & {
    title: string;
    hidden: boolean;
};

const modules = import.meta.glob('../views/**/*.vue');

function makeRoute(
    configs: RouteConfigItem | Array<RouteConfigItem>,
    prePath: string = 'views'
): RouteItem | Array<RouteItem> {
    let routes: RouteItem | Array<RouteItem> = [];

    const make = (config: RouteConfigItem): RouteItem => {
        let route: RouteItem = {
            path: config.path,
            name: config.name,
            component: modules[`../${prePath}/${config.component}.vue`],
            title: config.title || '',
            hidden: !!config.hidden,
        };

        const currentPath: string = prePath + config.path;

        if (config.children) {
            route = Object.assign(route, {
                children: makeRoute(config.children, currentPath),
            });
        }

        return route;
    };

    if (Array.isArray(configs)) {
        routes = configs.map(make);
    } else {
        routes = make(configs);
    }

    return routes;
}

export { makeRoute };
