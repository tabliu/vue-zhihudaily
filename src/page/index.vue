<template>
  <div class="mod-page">
    <Header
    headerTitle="首页"
      :headerFixed="false"
      :headerBackShow="false"
      :headerMenuShow="true"
      :headerTodoShow="true"
      :headerOptionShow="true"
    />
    <!-- section start -->
    <section class="mod-content">
      <Slider 
        :sliders="sliders" 
        :inv="sliderSpeed"
      />
      <!-- column start -->
      <template v-for="product in products">
        <div class="mod-column" :class="product.class">
          <div class="mod-column-head">
            <h2 class="mod-column-title">{{ product.title }}</h2>
          </div>
          <div class="mod-column-body">
            <ul class="mod-list">
              <li class="mod-list-item" v-for="item in product.list">
                <a :href="item.url" class="product-info">
                  <h3 class="product-title">{{ item.title }}</h3>
                  <img :src="item.img" :alt="item.title" class="product-image"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </template>
      <!-- column end -->
    </section>
    <!-- section end -->
  </div>
</template>

<script>
//引入组件
import Header from "../components/header";
import Slider from "../components/slider";

export default {
  components: {
    Header,
    Slider
  },
  data: function() {
    return {
      sliders: [
        {
          src: require("../images/pic01.jpg"),
          title: "使用Vue+Webpack搭建大型项目",
          url: "/"
        },
        {
          src: require("../images/pic02.jpg"),
          title: "为什么你越来越不快乐了呢？为什么你越来越不快乐了呢？",
          url: "/"
        }
      ],
      sliderSpeed: 2000,
      products: {
        news: {
          class: "news",
          title: "今日热闻",
          list: [
            {
              img: require("../images/list01.jpg"),
              title: "央行出手！微信扫码支付将限额 每天最多花这个数",
              url: "/"
            },
            {
              img: require("../images/list02.jpg"),
              title: "一年送30亿个快递，顺丰赚了多少钱？这个数字让很多人吃惊",
              url: "/"
            },
            {
              img: require("../images/list03.jpg"),
              title: "世界向他致敬：世间再无霍金 时间永留简史",
              url: "/"
            }
          ]
        }
      }
    };
  },
  mounted() {
    //axios.get("/douban/v2/book/1220562").then(res => {
    //  console.log(res);
    //});
    //axios.get("/api").then(res => {
    //  console.log(res);
    //});
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/base";
@import "../sass/column";

.news {
  .mod-column-head {
    padding-bottom: px2rem(16px);

    &::after {
      @include hide;
    }
  }
  .mod-column-title {
    font-size: px2rem(14px);
    line-height: px2rem(22px);

    &::before {
      @include hide;
    }
  }
  .mod-list-item {
    padding: 0 px2rem($gap-base) px2rem($gap-base);
  }

  .product-info {
    display: flex;
    @include border;
    @include border-radius;
    background-color: $bg-color-main;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .2);
    padding: px2rem($gap-base) px2rem($gap-main);
  }

  .product-title {
    @include flex-item;
    font-size: px2rem($font-size-large);
    font-weight: $font-weight-base;
    line-height: px2rem(24px);
  }

  .product-image {
    width: px2rem(85px);
    max-width: px2rem(85px);
    height: px2rem(75px);
    max-height: px2rem(75px);
    margin-left: px2rem($gap-base);
  }
}

</style>
