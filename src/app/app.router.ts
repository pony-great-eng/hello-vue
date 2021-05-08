import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from './components/index.vue';
import About from './components/about.vue';
import postRoutes from '@/post/post.routes';


/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [ 
{
    path:'/',
    component:Index
},
{
    path:'/about',
    name:'about',
    component:About,
    meta:{
        requiresAuth:true,
    }
},
...postRoutes,
];

/**
 * 创建路由器
 */
const router =createRouter({
    history:createWebHistory(),
    routes,
});

/**
 * 导航守卫
 */
router.beforeEach((to,from,next) =>{
    const requiresAuth =to.matched.some(record =>record.meta.requiresAuth);
    
    if (requiresAuth){
        console.log('guard');
    }

    next();
    // console.log('guard');
    // console.log('to:',to);
    // console.log('from:',from);

    // if(to.name === 'postIndex') {
    //     next('/');
    // } else {
    //     next();
    // }
});
export default router;