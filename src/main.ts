// @ts-nocheck
import './assets/main.css'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/element/index.scss'
import App from './App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'virtual:svg-icons-register'
import  globalComponents  from '@/components/index'
const app = createApp(App)

app.use(router)
app.use(globalComponents)
app.use(ElementPlus, {
    locale: zhCn,
  })
app.mount('#app')
