<template>
    <div class="login">
        <!-- 顶部导航 -->
        <header>
            <van-nav-bar :title="istitle ? '登录' : '注册'" left-text="返回" @click="onback" left-arrow>
                <template #right>
                  <van-icon name="ellipsis" size="18" />
                </template>
            </van-nav-bar>
        </header>
        <!-- logo -->
        <img src="../../assets/logo.png" width="100" margin="0 auto" class="logo" alt="">
        <!-- 登录 -->
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                    v-model="loginName"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                 />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                />
            </van-cell-group>
             <!-- 验证码 -->
            <div class="Verification">
                    <span class="text">验证码:</span>
                <input type="text" name="" id="" class="Verification-code">
                <div class="login_code" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode" />
                </div>
            </div>
            <span></span>
            <div style="margin: 16px;">
                <p class="register"> {{istitle?'立即注册':'已有账号，立即登录'}}</p>
                <van-button round block type="primary" native-type="submit">
                    {{istitle?'登录':'注册'}}
                </van-button>
            </div>
        </van-form>
   
    </div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted } from "vue"
import SIdentify from "../../components/SIdentify.vue";

let useInfo = reactive({
    loginName: "13014650540",//用户名
    password: "13014650540",//密码
    istitle: false
})
let { loginName, password, istitle } = toRefs(useInfo);

let onSubmit = () => { };
let onback = () => { };

//验证码
let identifyCodes = "1234567890"
let identifyCode = ref('3212')

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
const makeCode = (o, l) => {
    for (let i = 0; i < l; i++) {
        identifyCode.value += o[
            randomNum(0, o.length)
        ];
    }
}
const refreshCode = () => {
    identifyCode.value = "";
    makeCode(identifyCodes, 4);
}
onMounted(() => {
    identifyCode.value = "";
    makeCode(identifyCodes, 4);
})

</script>
<style >
.register{
    float: left;
    font-size: .37333rem;
    margin-bottom: 0.53333rem;
    color: #1989fa;
    display: inline-block;
}
.text {
    font-size: 14px;
    line-height: 30px;
}

.login_code {
    display: inline-block;
}

.Verification-code {
    width: 2.8125rem;
    display: inline-block;
    border: 1px solid #CCC;
    margin: 0 10px;
    border-radius: 5px;
}
.Verification{
    height: 40px;
    padding: 5px 30px;
    box-sizing: border-box;
    display: flex;
}
</style>