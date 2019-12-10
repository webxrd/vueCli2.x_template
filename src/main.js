// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'// 自定义接口api挂载到Vue的原型上
import store from './store'
import components from '@/components'
import tools from '@/tools'

import FastClick from 'fastclick'
FastClick.attach(document.body);// 解决‘移动端点击事件延迟300ms的问题'

let myAlert = tools.Alert();// 弹窗组件

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$tools = tools
Vue.prototype.$myAlert = myAlert

// 注册全局组件
for (let i in components) {
    Vue.component(i, components[i]);
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
