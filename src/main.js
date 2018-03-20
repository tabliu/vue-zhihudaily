// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router/index'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

// 配合REM使用，动态获取页面容器宽度并给html标签的fontSize赋值
// 获取屏幕宽度(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 设置适配最大宽度
let setWidth = 1024;
// 获取html的Dom节点
let htmlDom = document.getElementsByTagName('html')[0];
// 设置html节点的fontsize
if (htmlWidth <= setWidth) {
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
} else {
    htmlDom.style.fontSize = setWidth / 10 + 'px';
}
window.addEventListener('resize', () => {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    let setWidth = 1024;
    let htmlDom = document.getElementsByTagName('html')[0];
    if (htmlWidth <= setWidth) {
        htmlDom.style.fontSize = htmlWidth / 10 + 'px';
    } else {
        htmlDom.style.fontSize = setWidth / 10 + 'px';
    }
});

//全局自定义指令
import {
    dir
} from "@/directive/dir";
dir(Vue);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})