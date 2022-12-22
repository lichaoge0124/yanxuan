import{_ as W,w as z,b as S,o as w,c as k,a as s,r as P,t as B,d as T,e as _,f as d,g,u as c,i as M,h as N,j as L}from"./index.fbb68ee2.js";const R=""+new URL("logo.1e8c34ec.png",import.meta.url).href;const U={class:"s-canvas"},q=["width","height"],D={__name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:20},fontSizeMax:{type:Number,default:35},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:80},contentHeight:{type:Number,default:32}},setup(v){const t=v,n=(e,o)=>Math.floor(Math.random()*(o-e)+e),r=(e,o)=>{let l=n(e,o),u=n(e,o),a=n(e,o);return"rgb("+l+","+u+","+a+")"},f=e=>{for(let o=0;o<3;o++)e.strokeStyle=r(t.lineColorMin,t.lineColorMax),e.beginPath(),e.moveTo(n(0,t.contentWidth),n(0,t.contentHeight)),e.lineTo(n(0,t.contentWidth),n(0,t.contentHeight)),e.stroke()},y=(e,o,l)=>{e.fillStyle=r(t.colorMin,t.colorMax),e.font=n(t.fontSizeMin,t.fontSizeMax)+"px SimHei";let u=(l+1)*(t.contentWidth/(t.identifyCode.length+1)),a=n(t.fontSizeMax,t.contentHeight-5);var i=n(-45,45);e.translate(u,a),e.rotate(i*Math.PI/180),e.fillText(o,0,0),e.rotate(-i*Math.PI/180),e.translate(-u,-a)},b=e=>{for(let o=0;o<30;o++)e.fillStyle=r(0,255),e.beginPath(),e.arc(n(0,t.contentWidth),n(0,t.contentHeight),1,0,2*Math.PI),e.fill()},p=()=>{let o=document.getElementById("s-canvas").getContext("2d");o.textBaseline="bottom",o.fillStyle=r(t.backgroundColorMin,t.backgroundColorMax),o.fillRect(0,0,t.contentWidth,t.contentHeight);for(let l=0;l<t.identifyCode.length;l++)y(o,t.identifyCode[l],l);f(o),b(o)};return z(()=>t.identifyCode,(e,o)=>{p()}),S(()=>{p()}),(e,o)=>(w(),k("div",U,[s("canvas",{id:"s-canvas",width:t.contentWidth,height:t.contentHeight},null,8,q)]))}},E=W(D,[["__scopeId","data-v-02f4b8b0"]]);const j={class:"login"},$=s("img",{src:R,width:"100",class:"logo",alt:""},null,-1),A={class:"Verification"},F=s("span",{class:"text"},"\u9A8C\u8BC1\u7801:",-1),G=s("input",{type:"text",name:"",id:"",class:"Verification-code"},null,-1),J=s("span",null,null,-1),K={style:{margin:"16px"}},O={class:"register"},X={__name:"Login",setup(v){let t=P({loginName:"13014650540",password:"13014650540",istitle:!1}),{loginName:n,password:r,istitle:f}=B(t),y=()=>{},b=()=>{},p="1234567890",e=T("3212");const o=(a,i)=>Math.floor(Math.random()*(i-a)+a),l=(a,i)=>{for(let h=0;h<i;h++)e.value+=a[o(0,a.length)]},u=()=>{e.value="",l(p,4)};return S(()=>{e.value="",l(p,4)}),(a,i)=>{const h=_("van-icon"),x=_("van-nav-bar"),C=_("van-field"),V=_("van-cell-group"),I=_("van-button"),H=_("van-form");return w(),k("div",j,[s("header",null,[d(x,{title:c(f)?"\u767B\u5F55":"\u6CE8\u518C","left-text":"\u8FD4\u56DE",onClick:c(b),"left-arrow":""},{right:g(()=>[d(h,{name:"ellipsis",size:"18"})]),_:1},8,["title","onClick"])]),$,d(H,{onSubmit:c(y)},{default:g(()=>[d(V,{inset:""},{default:g(()=>[d(C,{modelValue:c(n),"onUpdate:modelValue":i[0]||(i[0]=m=>M(n)?n.value=m:n=m),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),d(C,{modelValue:c(r),"onUpdate:modelValue":i[1]||(i[1]=m=>M(r)?r.value=m:r=m),type:"password",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"])]),_:1}),s("div",A,[F,G,s("div",{class:"login_code",onClick:u},[d(E,{identifyCode:c(e)},null,8,["identifyCode"])])]),J,s("div",K,[s("p",O,N(c(f)?"\u7ACB\u5373\u6CE8\u518C":"\u5DF2\u6709\u8D26\u53F7\uFF0C\u7ACB\u5373\u767B\u5F55"),1),d(I,{round:"",block:"",type:"primary","native-type":"submit"},{default:g(()=>[L(N(c(f)?"\u767B\u5F55":"\u6CE8\u518C"),1)]),_:1})])]),_:1},8,["onSubmit"])])}}};export{X as default};
