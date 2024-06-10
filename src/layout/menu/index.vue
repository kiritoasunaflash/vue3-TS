<template>
    <template v-for="(item, index) in menuList" :key="item.path">
        <el-menu-item :index="item.path" v-if="!item.children && item.meta.flag" @click="goRoute">
            <el-icon>
                <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
        </el-menu-item>
        <el-menu-item :index="item.path" v-if="item.children && item.children.length === 1 && item.meta.flag">
            <el-icon>
                <component :is="item.children[0].meta.icon"></component>
            </el-icon>
            {{ item.children[0].meta.title }}
        </el-menu-item>
        <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1 && item.meta.flag">
            <template #title>
                <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
                {{ item.meta.title }}
            </template>
            <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
    </template>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps(['menuList'])
const goRoute = (path) => {
    console.log(path);
    router.replace(path.index)
    console.log(router);

}
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