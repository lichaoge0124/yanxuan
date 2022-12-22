<template>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" >
        <span>首页</span>
        <template #icon="props">
        <span class="iconfont icon-shouye"></span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <span>分类</span>
        <template #icon="props">
        <span class="iconfont icon-grouping"></span>
        </template>
      </van-tabbar-item>  
      <van-tabbar-item replace to="/cart">
        <span>购物车</span>
        <template #icon="props">
         <span class="iconfont icon-gouwuche"></span>
        </template>
      </van-tabbar-item>  
      <van-tabbar-item replace to="/user">
        <span>我的</span>
        <template #icon="props">
         <span class="iconfont icon-31wode"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
</template>