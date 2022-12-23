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
        <img src="../../assets/logo.png" width="120" class="logo" alt="">
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
            <div class="Verification" >
                    <span class="text">验证码:</span>
                <input type="text" name="" id="" class="Verification-code" v-model="txt">
                <div class="login_code" @click="refreshCode">
                    <SIdentify :identifyCode="identifyCode" @identifyTxt="identifyTxt"/>
                </div>
            </div>
            <span></span>
            <div style="margin: 16px;">
                <p class="register" @click="eidtIstitle()"> {{istitle?'立即注册':'已有账号，立即登录'}}</p>
                <van-button round block type="primary" native-type="submit">
                    {{istitle?'登录':'注册'}}
                </van-button>
            </div>
        </van-form>
   
    </div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted } from "vue";
import SIdentify from "../../components/SIdentify.vue";
import { register, login } from "../../api/index.js"
import { useRoute, useRouter } from 'vue-router'
import { showNotify } from 'vant';
import { showToast } from 'vant';

let route = useRoute()
let router = useRouter()

let useInfo = reactive({
    loginName: "13014650540",//用户名
    password: "13014650540",//密码
    istitle: false,
    txt:""
})
let { loginName, password, istitle,txt } = toRefs(useInfo);

let onSubmit = () => { 
    if (istitle.value) {
        login(useInfo.loginName, useInfo.password).then(data => {
            if (data.resultCode==200) {
                localStorage.setItem('yxtoken', data.data);
                router.replace("/home");
                refreshCode();
                showNotify({
                    type: 'success',
                    message: '登陆成功'
                });
           }
            
        })
    } else {
        console.log(useInfo.txt);
        console.log(identifyCode.value);
        if (useInfo.txt == identifyCode.value){
        register(useInfo.loginName, useInfo.password).then(data => {
            console.log(data);
            if (data.resultCode == 200) {
                useInfo.istitle = true,
                    showNotify({
                        type: 'success',
                        message: '注册成功'
                    });
            }
        })
        } else {
            showToast('验证码错误');
        }
    }
};
let onback = () => { };
//修改istitle状态
let eidtIstitle = () => {
    istitle.value = !istitle.value
    refreshCode()
}

//验证码
let identifyCodes = "1234567890"
let identifyCode = ref('')

const randomNum = (min, max) => {
    let num1 = Math.floor(Math.random() * (max - min) + min) 
    return num1
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
// 从子中获取验证码
let identifyTxt = (txt) => {
    identifyCode.value = txt
}

</script>
<style >
.logo{
    margin: 35px 35% 5px;
}
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