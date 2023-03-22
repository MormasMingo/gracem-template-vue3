<template>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="menuStore.isCollapse"
        router
        @open="handleOpen"
        @close="handleClose"
    >
        <template v-for="menuItem in menuList">
            <el-sub-menu
                v-if="menuItem.children"
                :index="menuItem.route.name"
                :route="menuItem.route"
            >
                <template #title>
                    <el-icon>
                        <Icon icon="ep-user" />
                    </el-icon>
                    <span>{{ menuItem.title }}</span>
                </template>

                <template v-for="item in menuItem.children">
                    <el-sub-menu
                        v-if="item.children"
                        :index="item.route.name"
                        :route="item.route"
                    >
                        <template #title>
                            <el-icon>
                                <Icon v-if="item.icon" :icon="item.icon" />
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <el-menu-item
                            v-for="child in item.children"
                            :index="child.route.name"
                            :route="child.route"
                        >
                            <el-icon>
                                <Icon v-if="child.icon" :icon="child.icon" />
                            </el-icon>
                            {{ child.title }}
                        </el-menu-item>
                    </el-sub-menu>

                    <el-menu-item
                        v-else
                        :index="item.route.name"
                        :route="item.route"
                    >
                        <el-icon>
                            <Icon v-if="item.icon" :icon="item.icon" />
                        </el-icon>
                        {{ item.title }}
                    </el-menu-item>
                </template>
            </el-sub-menu>

            <el-menu-item
                v-else
                :index="menuItem.route.name"
                :route="menuItem.route"
            >
                <el-icon>
                    <Icon v-if="menuItem.icon" :icon="menuItem.icon" />
                </el-icon>
                <template #title>{{ menuItem.title }}</template>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script lang="ts" setup>
import { useMenuStore } from '@/stores';

import { routeConfig } from '@/config';
import type { MenuItem } from '@/tools';
import { makeMenu } from '@/tools';

import { Icon } from '@iconify/vue';

const routeMenu = makeMenu(routeConfig) as MenuItem;
const menuList = routeMenu.children;
console.log(menuList);

const menuStore = useMenuStore();

const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
