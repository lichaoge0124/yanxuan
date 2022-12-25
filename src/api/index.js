import http from "./http"
import md5 from 'js-md5'

//注册接口

export function register(name, pwd) {
    return http.post("user/register", {
        loginName: name,
        password:pwd
    })
}
//登陆接口
export function login(name, pwd) {
    return http.post("user/login", {
        loginName: name,
        passwordMd5: md5(pwd)
    })
}
//获取商品页面
export function getIndexInfo() {
    return http.get("index-infos")
}