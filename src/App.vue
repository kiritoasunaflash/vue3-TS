<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { getUserInfoApi, getLoginApi } from '@/api/user.ts'
// import iconSvg from '@/components/iconSvg.vue'

onMounted(() => {


}),


  console.log(import.meta.env);
</script>

<style scoped lang="scss"></style>
