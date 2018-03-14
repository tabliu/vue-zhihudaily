<template>
    <!-- header start -->
    <header class="dm-header" :class="{'dm-header-fixed': headerFixed}" v-if="headerShow">
        <h1 class="dm-header-title">{{ headerTitle }}</h1>
        <i class="dm-header-back" v-if="headerBackShow" @click="toBack">{{ headerBack }}</i>
        <i class="dm-header-menu" v-if="headerMenuShow" @click="toMenu">{{ headerMenu }}</i>
        <i class="dm-header-todo" v-if="headerTodoShow" @click="toTodo">{{ headerTodo }}</i>
        <i class="dm-header-option" v-if="headerOptionShow" @click="toOption">{{ headerOption }}</i>
    </header>
    <!-- header end -->
</template>

<script>
    
export default {
    props: {
        headerShow:{
            type: Boolean,
            default: true
        },
        headerFixed:{
            type: Boolean,
            default: true
        },
        headerTitle: {
            type: String,
            default: '页面标题'
        },
        headerBack: {
            type: String,
            default: '返回'
        },
        headerBackShow:{
            type: Boolean,
            default: true
        },
        headerMenu: {
            type: String,
            default: '菜单'
        },
        headerMenuShow: {
            type: Boolean,
            default: false
        },
        headerTodo: {
            type: String,
            default: '待办事项'
        },
        headerTodoShow: {
            type: Boolean,
            default: false
        },
        headerOption: {
            type: String,
            default: '设置'
        },
        headerOptionShow: {
            type: Boolean,
            default: false
        },
        backClick:{
            type: Boolean,
            default:true
        },
        menuClick:{
            type: Boolean,
            default:true
        },
        todoClick:{
            type: Boolean,
            default:true
        },
        optionClick:{
            type: Boolean,
            default:true
        }
    },
    mounted(){
        
    },
    methods:{
        toBack(){
            if(this.backClick){
                history.back();
                alert('11');
            }else{
                return ;
            }
        },
        toMenu(){
            if(this.menuClick){
                return ;
            }else{
                return ;
            }
        },
        toTodo(){
            if(this.todoClick){
                return ;
            }else{
                return ;
            }
        },
        toOption(){
            if(this.optionClick){
                return ;
            }else{
                return ;
            }
        }
    }
}
</script>

<style lang="scss">
@import "../sass/base";
/* header
---------------------------------- */
.dm-header {
    @include flex;
    @include flex-align(center);
    position: relative;
    height: px2rem(60px);
    background-color: #09f;
    overflow: hidden;

    &-title {
        @include flex-item;
        color: $text-color-main;
        font-size: px2rem(18px);
        font-weight: $font-weight-base;
        line-height: px2rem(60px);
        @extend %text-overflow;
        margin-left: px2rem(20px);
    }

    &-back {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding-right: $gap-base;
        padding-left: 32px;
        @extend %text-hide;

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 16px;
            width: 9px;
            height: 16px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAMAAAAootjDAAAAV1BMVEUAAAD///9EREZEQ0VHQkdFQ0VEQ0RERERFQ0VGRkZDQkREQkVFQkVHR0dFRUVFQ0VEQkVDQkP///9DQ0NFQkVDQ0RDQ0VEREtEQkRGQ0ZEREdDQ0VDQkQy+pIIAAAAHHRSTlMAAIDxNn7wOG8h/q26JFlc8/MBtrW7gSJ/WF6uzoouTgAAAFFJREFUeF7Vz7cVgDAQBNEVVsJ7e/3XiQj3bQMw4c8GTgLX135iyc2sE7FNJG1Fys9II7KIhCrK8ArTmNH+bLGCbVVD8gvb1Q6IneCu2wNOegA79A6Xq/qOMwAAAABJRU5ErkJggg==) no-repeat 0 0;
            background-size: 9px auto;
            margin-top: -8px;
        }

        &.touch {
            opacity: .5;
        }
    }

    &-menu {
        @include flex-order(-1);
        display: block;
        width: px2rem(24px);
        height: px2rem(24px);
        background: url(../images/icon_menu.png) no-repeat;
        background-size: px2rem(24px) auto;
        @extend %text-hide;
        margin: 0 px2rem(20px);

        &.touch {
            opacity: .5;
        }
    }

    &-todo {
        display: block;
        width: px2rem(24px);
        height: px2rem(24px);
        background: url(../images/icon_clock.png) no-repeat;
        background-size: px2rem(24px) auto;
        @extend %text-hide;
        margin: 0 px2rem(16px);

        &.touch {
            opacity: .5;
        }
    }

    &-option {
        display: block;
        width: px2rem(24px);
        height: px2rem(24px);
        background: url(../images/icon_option.png) no-repeat;
        background-size: px2rem(24px) auto;
        @extend %text-hide;
        margin: 0 px2rem(16px);

        &.touch {
            opacity: .5;
        }
    }

    @at-root {
        &-fixed {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            z-index: $z-index-high;
        }
    }
}
</style>
