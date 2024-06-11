<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider">
            <Logo></Logo>
            <el-scrollbar class="scrollbar">
                <el-menu background-color="$base-menu-background" :collapse="useLayoutSettingStore.layoutFlag"
                    :default-active="route.path">
                    <Menu :menuList="useMenuStore.menuList"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: useLayoutSettingStore.layoutFlag ? true : false }">
            <!-- layout组件的顶部导航tabbar -->
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区域 -->
        <div class="layout_main" :class="{ fold: useLayoutSettingStore.layoutFlag ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
import { menuStore } from '@/store/piniaModules/menu';
// //引入菜单组件
import Menu from './menu/index.vue'
// //右侧内容展示区域
import Main from '@/components//main.vue';
// //引入顶部tabbar组件
import Tabbar from './tabbar/index.vue';
import { layoutSettingStore } from '@/store/piniaModules/layoutSetting';
const useLayoutSettingStore = layoutSettingStore()
// //获取用户相关的小仓库
// import useUserStore from '@/store/modules/user';
// import useLayOutSettingStore from '@/store/modules/setting';
// let userStore = useUserStore();
let useMenuStore = menuStore()
// //获取layout配置仓库

// let LayOutSettingStore = useLayOutSettingStore();

// //获取路由对象
let route = useRoute();
</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>
<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
            overflow: auto;

            .el-menu {
                border-right: none;
            }
        }

        // &.fold {
        //     width: $base-menu-width !important;
        // }
    }

    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;
        z-index: 10;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .2);

        &.fold {
            width: calc(100vw - $base-menu-min-width );
            left: $base-menu-min-width;
        }


    }

    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width - 40px);
        height: calc(100vh - $base-tabbar-height - 40px);
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;

        &.fold {
            // width: calc(100vw - $base-menu-min-width );
            width: calc(100% - 90px);
            left: $base-menu-min-width;
        }

    }
}

::v-deep .el-menu-item:hover {
    background-color: rgba(111, 10, 72, .4) !important
}
</style>