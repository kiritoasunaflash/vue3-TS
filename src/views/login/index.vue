<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <!-- 登录的表单 -->
                <el-form class="login_form" :model="loginForm" :rules="loginRules" ref="loginForms">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password
                            placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" class="login_btn" type="primary" size="default"
                            @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ElNotification } from 'element-plus'
import { getHours } from '@/utils/setHour';
// import { useRouter } from 'vue-router';
// vuex
import { useStore } from 'vuex';
const store = useStore()
// pinia
import { loginStore } from '@/store/piniaModules/login';
import { rejects } from 'assert';
const useLoginStore = loginStore()
const router = useRouter()
// console.log(increment);
const loginForm = ref({ username: '', password: '' })
const loginForms = ref()

const loading = ref(false)
//密码校验
function isvalidPass(str) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[._~!@#$^&*])[A-Za-z0-9._~!@#$^&*]{8,16}$/g;
    return reg.test(str);
}
const validatePass = (rule, value, callback) => {
    if (value === "") {
        callback(new Error("请输入密码"));
    } else if (!isvalidPass(value)) {
        callback(
            new Error("请输入包含英文字母大小写、数字和特殊符号的 8-16 位组合")
        );
    }
    return callback()
};
const loginRules = ref({
    username: [{ required: true, min: 6, max: 10, message: '请输入6-10位账号', trigger: 'change' }],
    password: [{ required: true, min: 6, max: 18, validator: validatePass, trigger: "change", message: '请输入包含英文字母大小写、数字和特殊符号的 8-16 位组合' }]
})


const sysElNotification = (type, message) => {

    ElNotification({
        title: type === 'success' ? 'Hi! ' + getHours() : '',
        message,
        type
    })
}
const login = async () => {
    // console.log(loginForms.value.validate());

    await loginForms.value.validate()
    // vuex
    // store.commit('userInfoStore/increment', 10)
    // console.log(store.state)
    //pinia
    // await loginForms.value.validate()
    loading.value = true
    try {
        await useLoginStore.userLogin(loginForm.value)
        router.push('/')
        sysElNotification('success', '登录成功')
        loading.value = false
    } catch (err) {
        console.log(err);
        sysElNotification('error', err.message)
        loading.value = false
    }
    console.log(document.cookie);
}
onMounted(() => {
    // getHours()
})
</script>

<style scoped>
.login_container {
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url("@/assets/images/login_form.png") no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            font-size: 20px;
            color: white;
            margin: 20px 0px;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>