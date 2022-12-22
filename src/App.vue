<template>
  <div id="app">
    <router-view></router-view> 
    <TabBar v-if="isshow"></TabBar>
  </div>
  
</template>
<script setup>
import TabBar from './components/TabBar.vue';
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

let router = useRoute();
let isshow = ref(false)
watch(router, newVal => {
  isshow.value = newVal.meta.isshow
}, {
  immediate: true
})
</script>



<style scoped>

</style>
