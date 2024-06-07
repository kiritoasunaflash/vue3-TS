<template>
    <svg>
        <use :xlink:href="'#icon-' + iconType" :fill="iconColor" :width="iconWidth" :height="iconHeight">
        </use>
    </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
    iconType: { type: String, },
    iconColor: { type: String },
    iconWidth: { type: String, default: '16px' },
    iconHeight: { type: String, default: '16px' }
})
</script>

<style scoped></style>