<template>

    <template v-for="(item, index) in menuList" :key="item.path">
        <el-menu-item :index="item.path + index" v-if="!item.children && item.meta.flag">{{ item.meta.title
            }}</el-menu-item>
        <el-menu-item :index="item.path + index" v-if="item.children && item.children.length === 1 && item.meta.flag">
            {{ item.children[0].meta.title }}</el-menu-item>
        <el-sub-menu :index="item.path + index" v-if="item.children && item.children.length > 1 && item.meta.flag">
            <template #title>{{ item.meta.title }}</template>
            <!-- <el-menu-item :index="childItem.path" v-for="childItem in item.children" :key="childItem.path">
                    {{ childItem.meta.title }}
                
                </el-menu-item> -->
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
    </template>



</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps(['menuList'])
</script>
<script lang="ts">
export default {
    name: 'Menu'
}
</script>
<style lang="scss" scoped>
::v-deep .el-menu-item:hover {
    background-color: rgba(111, 10, 72, .4) !important
}

::v-deep .el-sub-menu__title:hover {
    background-color: rgba(111, 10, 72, .4) !important
}
</style>