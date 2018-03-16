<template>
  <div class="mod-page">
    <Header
      headerTitle=""
      :headerFixed="true"
      :headerBackShow="true"
      :headerShareShow="true"
      :headerFavriteShow="true"
      :headerCommentShow="true"
      :headerThumbShow="true"
      :headerComment="comments"
      :headerThumb="popularity"
    />
    <!-- section start -->
    <section class="mod-content">
      <!-- column start -->
      <div class="mod-column" :class="detail.class">
        <div class="mod-column-head">
          <h2 class="mod-column-title">{{ detail.name }}</h2>
        </div>
        <div class="mod-column-body">
          <div class="product-info">
            <div class="product-image">
              <img :src="detail.image" alt="">
              <span>{{ detail.imageSource }}</span>
            </div>
            <h1 class="product-title">{{ detail.title }}</h1>
            <div class="product-content">
              <div v-html="detail.contents"></div>
              <link rel="stylesheet" :href="detail.css">
            </div>
          </div>  
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

export default {
  components: {
    Header
  },
  data () {
    return {
      listId: '',
      comments: 0,
      popularity: 0,
      detail: {
        class: "detail",
        name: "资讯详情",
        contents: {},
        css: '',
        image: '',
        imageSource: '',
        title: ''
      }
    };
  },
  mounted () {
    // 1.组件初步加载时赋值一次
    this.listId = this.$route.params.newsId;
    axios.get('/api/4/news/' + this.listId)
    .then(res => {
        this.detail.contents = res.data.id ? res.data.body : JSON.parse(res.request.response);
        this.detail.css = res.data.id ? res.data.css : JSON.parse(res.request.response);
        this.detail.image = res.data.id ? res.data.image : JSON.parse(res.request.response);
        this.detail.imageSource = res.data.id ? res.data.image_source : JSON.parse(res.request.response);
        this.detail.title = res.data.id ? res.data.title : JSON.parse(res.request.response);
      })
    .catch(error => {
      console.log(error);
    });
    axios.get('/api/4/story-extra/' + this.listId)
    .then(res => {
        this.comments = res.data.comments;
        this.popularity = res.data.popularity;
      })
    .catch(error => {
      console.log(error);
    })

  },
  watch: {
      '$route' () {
          //2. $route发生变化时再次赋值listId
          this.listId = this.$route.params.newsId;
      }
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
