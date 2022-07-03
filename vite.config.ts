

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        vue(),
       // 省略其它插件
        viteEslint()
  ],
  resolve:{
    // 设置路径别名
        alias:{
            '~':path.resolve(__dirname,'src/pages'),  // 页面路由
            "@":path.resolve(__dirname,"src"),  // 全局
        }
  },
  server:{
   
    open:true,
    // hmr:{
    //     host:'127.0.0.1',
    //     port:8080
    // },
    // 设置 https 代理
    //   proxy:{
    //       '/api':{
    //             target:' 地址 ',
    //             changeOrigin:true,
    //             rewrite:(path:string)=> path.replace(/^\/api/,'')
    //       }
    //   }
  },
  css: {
    // 进行 PostCSS 配置
    postcss: {
      plugins: [
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
        })
      ]
    }
  }
})
