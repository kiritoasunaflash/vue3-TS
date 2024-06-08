import axios from 'axios'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
const router=useRouter()
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000,
  });

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    let message=''
    let status=error.response.status
    switch(status){
        case 401:
            message='TOKEN过期'
            break;
        case 403:
            message="无权访问"
            break;
        case 404:
            message="请求地址错误"
            router.replace('/404')
            break;
        case 500:
            message="服务器出现错误"
            break;
        default:
            message="网络出现错误"
            break;
        ElMessage({
            type:error,
            message
        })
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default request