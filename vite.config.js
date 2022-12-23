import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    //配置vant按需加载
    Components({
      resolvers: [VantResolver()]
    })
  
  ],
  //配置服务器代理
  server: {
    proxy: {
      "/api": {
        target: "http://backend-api-01.newbee.ltd",
        changeOrigin: true,
      }
    }
  },
  //配置@快捷
  resolve: {
    alisa: {
      '@':path.resolve(__dirname,'./src')
    }
  }
})
