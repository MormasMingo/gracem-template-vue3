<template>
    <el-container>
        <el-header>index top</el-header>

        <el-main>
            <RouterView></RouterView>
        </el-main>

        <el-footer>index footer</el-footer>
    </el-container>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<style lang=""></style>
