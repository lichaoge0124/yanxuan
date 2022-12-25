<template>
    <ul class="good-box">
        <li class="good-item" v-for="item in Goodses" :key="item.goodsid">
            <div class="img_box">
                <img :src="item.goodsCoverImg" alt="">
            </div>
            <div class="good_desc">
                <div class="title">{{ item.goodsName }}</div>
                <div class="price">{{ item.sellingPrice }}</div>
            </div>
        </li>
    </ul>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    Goodses: {
        type: Array,
        defaule: []
    }
})

</script>
<style>
.good-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}

.good-box .good-item {
    box-sizing: border-box;
    width: 50%;
    border-bottom: 0.02667rem solid #e9e9e9;
    padding: 0.26667rem 0.26667rem;
}
.good-box .good-item:nth-child(odd) {
    border-right: 0.02667rem solid #e9e9e9;
}
.good-box .good-item .img_box {
    display: block;
    width: 3.2rem;
    margin: 0 auto;
}

.good-box .good-item img {
    width: 100%;
    height: auto;
}

.good-box .good-item .good_desc {
    text-align: center;
    font-size: .37333rem;
    padding: 0.26667rem 0;
}

.good-box .good-item .good_desc .title {
    color: #222333;
}

.good-box .good-item .good_desc .price {
    color: #1baeae;
}
</style>