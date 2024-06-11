<template>
    <!-- 顶部左侧静态 -->
    <el-icon style="margin-right:10px" @click="changeIcon">
        <component :is="icon"></component>
    </el-icon>
    <!-- <el-icon>
        <Expand />
    </el-icon> -->
    <!-- 左侧面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <!-- 面包动态展示路由名字与标题 -->
        <el-breadcrumb-item v-for="item in route.matched" :key="item.path" :to="item.path" class="breadcrumbItem">
            <!-- 图标 -->
            <div style="margin-top: 1px;margin-right: 2px;"> <el-icon>
                    <component :is="item.meta.icon"></component>
                </el-icon>
            </div>
            <!-- 面包屑展示匹配路由的标题 -->
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { layoutSettingStore } from '@/store/piniaModules/layoutSetting.ts'
const useLayoutSettingStore = layoutSettingStore()
let icon = ref('Expand')
// import useLayOutSettingStore from '@/store/modules/setting';
// //获取layout配置相关的仓库
// let LayOutSettingStore = useLayOutSettingStore();
// //获取路由对象
let route = useRoute();
let router = useRouter()
// //点击图标的方法
// const changeIcon = () => {
//     //图标进行切换
//     LayOutSettingStore.fold = !LayOutSettingStore.fold
// }
const changeIcon = () => {
    useLayoutSettingStore.layoutFlag = !useLayoutSettingStore.layoutFlag
    if (!useLayoutSettingStore.layoutFlag) {
        icon.value = 'Expand'
    } else {
        icon.value = 'Fold'
    }
}
</script>
<script lang="ts">
export default {
    name: "Breadcrumb"
}
</script>

<style scoped>
::v-deep .el-breadcrumb__inner {
    display: flex;
    align-items: center;
}
</style>