<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { watch, nextTick, ref } from 'vue'
import { layoutSettingStore } from '@/store/piniaModules/layoutSetting';
const useLayoutSetting = layoutSettingStore()
let flag = ref(true)
watch(() => useLayoutSetting.isRefresh, () => {
    flag.value = false
    nextTick(() => {
        flag.value = true
    })
})
</script>

<style scoped>
.fade-enter-from {
    transform: scale(0);
    opacity: 0;
}

.fade-enter-active {
    transition: all .3s;
}

.fade-enter-to {
    transform: scale(1);
    opacity: 1;
}
</style>