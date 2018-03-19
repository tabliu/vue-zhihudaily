import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/index';
import DetailPage from '@/page/detail';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: IndexPage
        },
        {
            path: '/detail/postId=:postId',
            name: 'detail',
            component: DetailPage
        }
    ]
})