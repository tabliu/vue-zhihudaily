<template>
  <div class="mod-page">
    <Header
    headerTitle="首页"
      :headerFixed="true"
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
      <div class="mod-column" :class="post.class">
        <div class="mod-column-head">
          <h2 class="mod-column-title">{{ post.title }}</h2>
        </div>
        <div class="mod-column-body">
          <ul class="mod-list">
            <li class="mod-list-item" v-for="item in post.list">
              <router-link :to="{ name: 'detail', params: { postId: item.id }}" class="product-info">
                <h3 class="product-title">{{ item.title }}</h3>
                <img :src="item.images" :alt="item.title" class="product-image" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
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
  data () {
    return {
      sliders: [], 
      title: '', 
      image: '', 
      sliderSpeed: 2000, 
      post: {
        class: "hotpost",
        title: "今日热闻",
        list: []
      }
    };
  },
  mounted () {
    axios.get("/api/4/news/latest")
    .then(res => {
      this.sliders = res.data.top_stories[0] ? res.data.top_stories : null;
      this.post.list = res.data.stories[0] ? res.data.stories : null;
    })
    .catch(error => {
      console.log(error);
    })
  },
  methods: {
    doIt () {
      console.log('do Id dd')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/base";
@import "../sass/column";

.hotpost {
  .mod-column-head {
    padding-bottom: px2rem(16px);
    &::after {
      @include hide;
    }
  }
  .mod-column-title {
    color: $text-color-assist;
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
    max-height: px2rem(48px);
    font-size: px2rem($font-size-large);
    font-weight: $font-weight-base;
    line-height: px2rem(24px);
    @include text-clamp(2);
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