<template>
    <!-- header start -->
    <header class="mod-header" :class="{'mod-header-fixed': headerFixed}" v-if="headerShow">
        <h1 class="mod-header-title" v-if="headerTitleShow">{{ headerTitle }}</h1>
        <i class="mod-header-back" v-if="headerBackShow" @click="toBack">{{ headerBack }}</i>
        <i class="mod-header-menu" v-if="headerMenuShow" @click="toMenu">{{ headerMenu }}</i>
        <i class="mod-header-todo" v-if="headerTodoShow" @click="toTodo">{{ headerTodo }}</i>
        <i class="mod-header-option" v-if="headerOptionShow" @click="toOption">{{ headerOption }}</i>
        <i class="mod-header-share" v-if="headerShareShow" @click="toShare">{{ headerShare }}</i>
        <i class="mod-header-favrite" v-if="headerFavriteShow" @click="toFavrite">{{ headerFavrite }}</i>
        <i class="mod-header-comment" v-if="headerCommentShow" @click="toComment">{{ headerComment }}</i>
        <i class="mod-header-thumb" v-if="headerThumbShow" @click="toThumb">{{ headerThumb }}</i>
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
        headerTitleShow:{
            type: Boolean,
            default: true
        },
        headerBack: {
            type: String,
            default: '返回'
        },
        headerBackShow:{
            type: Boolean,
            default: false
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
        headerShare: {
            type: String,
            default: '分享'
        },
        headerShareShow: {
            type: Boolean,
            default: false
        },
        headerFavrite: {
            type: String,
            default: '收藏'
        },
        headerFavriteShow: {
            type: Boolean,
            default: false
        },
        headerComment: {
            type: Number,
            default: 0
        },
        headerCommentShow: {
            type: Boolean,
            default: false
        },
        headerThumb: {
            type: Number,
            default: 0
        },
        headerThumbShow: {
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
        },
        favriteClick:{
            type: Boolean,
            default:true
        },
        shareClick:{
            type: Boolean,
            default:true
        },
        commentClick:{
            type: Boolean,
            default:true
        },
        thumbClick:{
            type: Boolean,
            default:true
        }
    },
    mounted(){
    },
    methods:{
        toBack(){
            if(this.backClick){
                window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
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
        },
        toShare(){
            if(this.shareClick){
                return ;
            }else{
                return ;
            }
        },
        toFavrite(){
            if(this.favriteClick){
                return ;
            }else{
                return ;
            }
        },
        toComment(){
            if(this.commentClick){
                return ;
            }else{
                return ;
            }
        },
        toThumb(){
            if(this.thumbClick){
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
.mod-header {
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
        @include flex-order(-1);
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(24px);
        height: px2rem(24px);
        @extend %text-hide;
        margin: 0 px2rem(20px);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(24px);
            height: px2rem(24px);
            background: url(../images/icon_back.png) no-repeat;
            background-size: px2rem(24px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-menu {
        @include flex-order(-1);
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(24px);
        height: px2rem(24px);
        @extend %text-hide;
        margin: 0 px2rem(20px);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(24px);
            height: px2rem(24px);
            background: url(../images/icon_menu.png) no-repeat;
            background-size: px2rem(24px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-todo {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(24px);
        height: px2rem(24px);
        @extend %text-hide;
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(24px);
            height: px2rem(24px);
            background: url(../images/icon_todo.png) no-repeat;
            background-size: px2rem(24px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-option {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(24px);
        height: px2rem(24px);
        @extend %text-hide;
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(24px);
            height: px2rem(24px);
            background: url(../images/icon_option.png) no-repeat;
            background-size: px2rem(24px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-share {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(32px);
        height: px2rem(32px);
        @extend %text-hide;
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(32px);
            height: px2rem(32px);
            background: url(../images/icon_share.png) no-repeat;
            background-size: px2rem(32px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-favrite {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(32px);
        height: px2rem(32px);
        @extend %text-hide;
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: px2rem(32px);
            height: px2rem(32px);
            background: url(../images/icon_favrite.png) no-repeat;
            background-size: px2rem(32px) auto;
            @include css3(transform, (translate3d(-50%, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-comment {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(32px);
        height: px2rem(32px);
        color: $text-color-main;
        font-size: px2rem($font-size-large);
        line-height: px2rem(32px);
        padding-left: px2rem(40px);
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: px2rem(32px);
            height: px2rem(32px);
            background: url(../images/icon_comment.png) no-repeat;
            background-size: px2rem(32px) auto;
            @include css3(transform, (translate3d(0, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    &-thumb {
        display: block;
        position: relative;
        box-sizing: border-box;
        min-width: px2rem(32px);
        height: px2rem(32px);
        color: $text-color-main;
        font-size: px2rem($font-size-large);
        line-height: px2rem(32px);
        padding-left: px2rem(40px);
        margin: 0 px2rem($gap-base);

        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: px2rem(32px);
            height: px2rem(32px);
            background: url(../images/icon_thumb.png) no-repeat;
            background-size: px2rem(32px) auto;
            @include css3(transform, (translate3d(0, -50%, 0)));
        }

        &.touch {
            opacity: .5;
        }
    }

    i:last-child {
        margin-right: px2rem(20px);
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