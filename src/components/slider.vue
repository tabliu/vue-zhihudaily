<template>
    <!-- slider start -->
    <div class="mod-slider" @mouseover="clearInv" @mouseout="runInv">
        <div class="mod-slider-image">
            <a :href="sliders[nowIndex].url"><img :src="sliders[nowIndex].src" :alt="sliders[nowIndex].title"></a>
        </div>
        <h2 class="mod-slider-title">{{ sliders[nowIndex].title }}</h2>
        <ul class="mod-slider-index">
            <li class="mod-slider-index-item" :class="{ active : index === nowIndex }" v-for="(item, index) in sliders" @click="goto(index)">{{ index + 1 }}</li>
        </ul>
        <div class="mod-slider-opt" v-if="touch">
            <i class="mod-slider-prev" @click="goto(prevIndex)"></i>
            <i class="mod-slider-next" @click="goto(nextIndex)"></i>
        </div>
    </div>
    <!-- slider end -->
</template>

<script>
    
export default {
    props: {
        sliders: {
            type: Array,
            default: function () {
                return []
            }
        },
        inv: {
            type: Number,
            default: 1000
        },
        touch: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            nowIndex: 0
        }
    },
    computed: {
        prevIndex () {
            if ( this.nowIndex === 0 ) {
                return this.sliders.length -1;
            }
            else {
                return this.nowIndex - 1;
            }
        },
        nextIndex () {
            if ( this.nowIndex === this.sliders.length -1 ) {
                return 0;
            }
            else {
                return this.nowIndex + 1;
            }
        }
    },
    methods: {
        goto (index) {
            this.nowIndex = index
        },
        runInv () {
            this.invId = setInterval(() => {
                this.goto(this.nextIndex)
            }, this.inv)
        },
        clearInv () {
            clearInterval(this.invId)
        }
    },
    mounted () {
        this.runInv()
    }
}
</script>

<style lang="scss">
@import "../sass/base";
/* silder
---------------------------------- */
.mod-slider {
    position: relative;
    width: 100%;
    text-align: center;
    overflow: hidden;

    &-title {
        position: absolute;
        right: px2rem(20px);
        left: px2rem(20px);
        bottom: px2rem(28px);
        color: $text-color-main;
        font-size: px2rem(20px);
        font-weight: $font-weight-base;
        line-height: px2rem(28px);
        text-align: left;
        text-shadow: 1px 0 rgba(0, 0, 0, .44), 0 1px rgba(0, 0, 0, .44), -1px 0 rgba(0, 0, 0, .44), 0 -1px rgba(0, 0, 0, .44);
        -webkit-text-stroke-width: .1px;
        @include text-clamp(2);
    }

    &-index {
        position: absolute;
        right: 0;
        left: 0;
        bottom: px2rem(10px);
        @extend %text-hide;

        &-item {
            display: inline-block;
            width: px2rem(8px);
            height: px2rem(8px);
            border-radius: px2rem(8px);
            background-color: rgba(0, 0, 0, .3);
            margin: 0 2px;

            &.active {
                background-color: rgba(0, 0, 0, .8);
            }
        }
    }

    &-num {
        position: absolute;
        right: $gap-base + $gap-main;
        bottom: $gap-base / 2;
        background-color: rgba($black, .5);
        background-clip: padding-box;
        border-radius: 20px;
        color: $text-color-main;
        font-size: $font-size-small;
        line-height: 20px;
        padding: 0 $gap-base;
    }

    &-prev,
    &-next {
        position: absolute;
        top: 50%;
        left: 20px;
        width: 40px;
        height: 40px;
        background-color: #000;
        border-radius: 40px;
        margin-top: -20px;
    }

    &-next {
        right: 20px;
        left: auto;
    }

    img {
        display: block;
        width: 100%;
        max-width: 100%;
    }
}

</style>
