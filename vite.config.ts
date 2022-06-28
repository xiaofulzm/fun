import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // 设置路径别名
    alias:{
        '~':path.resolve(__dirname,'src/pages'),  // 页面路由
        "@":path.resolve(__dirname,"src"),  // 全局
    }
},
  server:{
    port:8080, // 启动端口号
    open:true,
    hmr:{
        host:'127.0.0.1',
        port:8080
    },
    // 设置 https 代理
    //   proxy:{
    //       '/api':{
    //             target:' 地址 ',
    //             changeOrigin:true,
    //             rewrite:(path:string)=> path.replace(/^\/api/,'')
    //       }
    //   }
}
})
