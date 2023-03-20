import { defineStore } from 'pinia';
import { menuConfig } from '@/config';

export const useMenuStore = defineStore('menu', () => {
    const isCollapse = ref(menuConfig.isCollapse);

    function collapse() {
        isCollapse.value = true;
    }
    function expand() {
        isCollapse.value = false;
    }

    return { isCollapse, collapse, expand };
});
