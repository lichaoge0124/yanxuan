import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./router/index.js"

import "./assets/fonts/iconfont.css"
import "./assets/reset.css"
import "./assets/flexible.js"

import vant from "vant"
import "vant/lib/index.css"


import { Toast } from 'vant';




let app = createApp(App)
app.use(Toast);
app.use(router)
app.use(vant)
app.mount('#app')
