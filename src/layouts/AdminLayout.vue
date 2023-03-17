<template>
    <el-container>
        <el-header>top</el-header>

        <el-container>
            <Menu></Menu>

            <el-container>
                <el-main>
                    <RouterView></RouterView>
                </el-main>

                <el-footer>footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Menu from '@/components/Menu.vue';
</script>

<style lang=""></style>
