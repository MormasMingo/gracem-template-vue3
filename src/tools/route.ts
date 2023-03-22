import type { RouteRecordRaw } from 'vue-router';

import DefaultRoute from '@/components/DefaultRoute.vue';

export declare type RouteConfigItem = {
    path: string;
    name: string;
    component?: string;
    title?: string;
    icon?: string;
    hidden?: boolean;
    children?: Array<RouteConfigItem>;
};

const modules = import.meta.glob('../views/**/*.vue');

function makeRoute(
    configs: RouteConfigItem | Array<RouteConfigItem>,
    prePath: string = 'views'
): RouteRecordRaw | Array<RouteRecordRaw> {
    let routes: RouteRecordRaw | Array<RouteRecordRaw> = [];

    const make = (config: RouteConfigItem): RouteRecordRaw => {
        let route: RouteRecordRaw = {
            path: config.path,
            name: config.name,
            component: config.component
                ? modules[`../${prePath}/${config.component}.vue`]
                : DefaultRoute,
        };

        const currentPath: string =
            prePath + (config.path.indexOf('/') === 0 ? '' : '/') + config.path;

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
