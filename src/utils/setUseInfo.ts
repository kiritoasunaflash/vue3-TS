// 引入
import Cookies from "js-cookie";
// 设置token
export function setToken(value) {
  return Cookies.set("token", value);
}
// 读取token
export function getToken() {
  return Cookies.get("token");
}
// 删除token
export function removeToken() {
  return Cookies.remove("token");
}
// 设置用户信息
export function setUserInfo(value) {
  return Cookies.set("userInfo", value);
}
// 读取token
export function getUserInfo() {
  return Cookies.get("userInfo");
}
// 删除token
export function removeUserInfo() {
  return Cookies.remove("userInfo");
}
