<template>
        <div class="home_box">
        <!-- 头部搜素框 -->
       <header class="header_box">
            <div class="left_box">
                <i  class="van-icon van-icon-wap-nav">
                </i>
            </div>
         <div class="middle_box">
               <div class="header_search">
                <span class="app-name">码路严选</span>
                <i class="shuxian"></i>
                <span class="search-title">全心全意为学生服务</span>
            </div>
         </div>
         <div class="right_box">
            <van-icon name="contact" size="20"/>
         </div>
          
       </header>
       <!-- 轮播图 -->
       <div class="my-swipe">
          <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item  :key="image" v-for="image in carousels">
             <img :src="image.carouselUrl" class="swipe-img"/>
            </van-swipe-item>
        </van-swipe>
       </div>
       <!-- 宫格 -->
       <div class="van-grid">
            <van-grid :column-num="5">
                <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-gouwucheman"></div>
                    <span class="text">码路超市</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-fushi"></div>
                    <span class="text">码路服饰</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-quanqiugou"></div>
                    <span class="text">全球购</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-shengxianshuiguo"></div>
                    <span class="text">码路生鲜</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-zhisongdaojia"></div>
                    <span class="text">码路到家</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-jiaofei"></div>
                    <span class="text">充值缴费</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-pintuangou"></div>
                    <span class="text">9.9元拼</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-youhuijuan-xianxing"></div>
                    <span class="text">领劵</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-shengqian"></div>
                    <span class="text">省钱</span>
                </van-grid-item>
                 <van-grid-item class="grid_item">
                   <div class="icon iconfont icon-quanbu"></div>
                    <span class="text">全部</span>
                </van-grid-item>
            </van-grid> 
       </div>
       <!-- 新品上线 -->
       <div class="good">
          <div class="good_header">
            <h3>新品上线</h3>
          </div>
          <card :Goodses="newGoodses"></card>
       </div>
       <!-- 热销商品 -->
        <div class="good">
          <div class="good_header">
            <h3>热销商品</h3>
          </div>
          <card :Goodses="hotGoodses"></card>
       </div>
       <!-- 热销商品 -->
        <div class="good">
          <div class="good_header">
            <h3>热销商品</h3>
          </div>
          <card :Goodses="recommendGoodses"></card>
          </div>
        </div>
</template>
<script setup>
import { getIndexInfo } from "../../api/index"
import { ref, reactive, toRefs, onMounted } from "vue"
import card from "../../components/card.vue"

let IndexInfo = reactive({
    carousels: [],
    hotGoodses: [],
    newGoodses: [],
    recommendGoodses: [],
})
let { carousels, hotGoodses, newGoodses, recommendGoodses } = toRefs(IndexInfo)

onMounted(() => {
    getIndexInfo().then(data => {
        let info = data.data
        console.log(info);
        carousels.value = info.carousels;
        hotGoodses.value = info.hotGoodses
        newGoodses.value = info.newGoodses
        recommendGoodses.value = info.recommendGoodses
    })
})




</script>
<style>
.home_box {
    padding-bottom: 2.66667rem;
}

.header_box {
    position: fixed;
    width: 100%;
    height: 1.33333rem;
    display: flex;
    z-index: 200;
    top: 0;
    left: 0;

}

.left_box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.33333rem;
    flex: none;

}

.middle_box {
    display: flex;
    align-items: center;
    flex: auto;
}

.header_search {
    width: 100%;
    display: flex;
    height: 0.53333rem;
    line-height: .53333rem;
    padding: 0.13333rem 0;
    margin: 0 0.4rem 0 0.21333rem;
    color: #232326;
    background: hsla(0, 0%, 100%, .7);
    border-radius: 0.53333rem;
}

.app-name {
    padding: 0 0.26667rem;
    color: #1baeae;
    font-size: .53333rem;
    font-weight: 700;
    border-right: 0.02667rem solid #666;
}

.shuxian {
    padding: 0 0.26667rem;
    font-size: .45333rem;
}

.search-title {
    font-size: .32rem;
    color: #666;
    line-height: .56rem;

}

.right_box {
    display: flex;
    margin-right: 0.4rem;
    align-items: center;
    flex: none;
}

/* 轮播图===========================================> */
.swipe-img {
    width: 100%;
    height: auto;
}

/* 宫格====================================> */
.van-grid {
    display: flex;
    flex-wrap: wrap;
}

.home_box .van-grid-item {
    height: 2.05333rem;
}

.home_box .van-grid-item .text {
    font-size: .32rem;
    text-align: center;
}

.home_box .van-grid-item .icon {
    color: #1baeae;
    font-size: 1.06667rem;
    text-align: center;
    margin-bottom: 0.18667rem;
}

/* good====================================> */
.good_header {
    background: #f9f9f9;
    height: 1.33333rem;
    line-height: 1.33333rem;
    text-align: center;
    color: #1baeae;
    font-size: .42667rem;
    font-weight: 500;
}
</style>