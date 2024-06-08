import request from "../utils/requests";

export const getUserInfoApi=()=>{
    return request({
        method:'GET',
        url:'/user/info',
    })
}
export const getLoginApi=(data:any)=>{
    return request({
        method:'POST',
        url:'/user/login',
        data
    })
}