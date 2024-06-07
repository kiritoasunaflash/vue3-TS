<template>
  <div class="dev">
    111
    <iconSvg :iconType="'phone'" :iconColor="'red'"></iconSvg>
  </div>
  <RouterView />
</template>
<style scoped></style>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import iconSvg from '@/components/iconSvg.vue'
console.log(import.meta.env);
</script>

<style scoped lang="scss">
.dev {
  color: $colors;
}
</style>
