import type { RouteConfigItem } from '@/tools';

export declare type MenuItem = {
    title: string;
    icon?: string;
    route: {
        name: string;
    };
    children?: Array<MenuItem>;
};

function filterHidden(routeConfig: RouteConfigItem) {
    if (routeConfig.hidden) {
        return false;
    }

    return true;
}

function makeMenu(
    routeConfig: RouteConfigItem | Array<RouteConfigItem>
): MenuItem | Array<MenuItem> {
    let menus: MenuItem | Array<MenuItem> = [];

    const make = (config: RouteConfigItem): MenuItem => {
        const menu: MenuItem = {
            title: config.title || '',
            icon: config.icon || undefined,
            route: {
                name: config.name,
            },
        };

        if (config.children) {
            menu.children = config.children.filter(filterHidden).map(make);
        }

        return menu;
    };

    if (Array.isArray(routeConfig)) {
        menus = routeConfig.filter(filterHidden).map(make);
    } else {
        menus = make(routeConfig);
    }

    return menus;
}

export { makeMenu };
