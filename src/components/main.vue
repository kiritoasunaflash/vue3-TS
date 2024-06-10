<template>
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">

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