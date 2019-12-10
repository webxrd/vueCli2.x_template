import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// layout
import layout from '@/views/layout/layout.vue'
import home from '@/views/layout/home/home.vue'
// 登录页面
import login from '@/views/login'
Vue.use(Router)
const router = new Router({
    mode: 'hash',// 改成history，打包时会出现页面“什么都不现显示”
    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'layout',
            component: layout,
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: home
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
    ]
})

router.beforeEach(function (to, from, next) {
    next()
})

router.afterEach(function (to) {
})

export default router
