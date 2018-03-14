// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 获取屏幕宽度(viewport)
var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

// 获取html的Dom节点
var htmlDom = document.getElementsByTagName('html')[0];

// 设置html节点的fontsize
htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', function() {
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
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