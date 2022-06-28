import { createRouter, createWebHistory, RouteRecordRaw} from  'vue-router';
import { close, start } from '../utils/nporgress';

const routes:Array<RouteRecordRaw>=[
    {
        path:'/login',
        name:'Login',
        component:()=>  import('~/login.vue'),
        meta:{
            title:'登录',
            keepAlive:true,
            requireAuth:false
        }
    },
    {
        path:'/',
        name:'Index',
        component:()=>  import('~/index.vue'),
        meta:{
            title:'首页',
            keepAlive:true,
            requireAuth:false
        }
    }
]

const router =  createRouter({
    history:createWebHistory(),
    routes
})
  
  router.beforeEach((pre, next) => {
    start();
  })
  
  router.afterEach(() => {
    close();
  })

export default router;