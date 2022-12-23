import http from "./http"
import md5 from 'js-md5'

//注册接口

export function register(name, pwd) {
    return http.post("user/register", {
        loginName: name,
        password:pwd
    })
}
export function login(name, pwd) {
    return http.post("user/login", {
        loginName: name,
        passwordMd5: md5(pwd)
    })
}