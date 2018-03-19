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
            </div>
            <h1 class="product-title">{{ detail.title }}</h1>
            <div class="product-meta">{{ detail.imageSource }}</div>
          </div>
          <div class="product-content">
            <div v-html="detail.contents"></div>
            <link rel="stylesheet" :href="detail.css">
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
    this.listId = this.$route.params.postId;
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
          this.listId = this.$route.params.postId;
      }
  }
};
</script>

<style lang="scss" scoped>
@import "../sass/base";
@import "../sass/column";

.detail {
  .mod-column-head {
    @include hide;
  }

  .product-info {
    display: block;
    position: relative;
  }

  .product-title {
    position: absolute;
    left: px2rem($gap-main);
    right: px2rem($gap-main);
    bottom: px2rem(32px);
    z-index: $z-index-base;
    max-height: px2rem(56px);
    color: $text-color-main;
    font-size: px2rem(20px);
    font-weight: $font-weight-base;
    line-height: px2rem(28px);
    text-align: left;
    @include text-clamp(2);
  }

  .product-meta {
    position: absolute;
    right: px2rem($gap-main);
    bottom: px2rem($gap-base);
    z-index: $z-index-base;
    color: $text-color-assist;
    font-size: px2rem($font-size-base);
    font-weight: $font-weight-base;
    line-height: px2rem(20px);
    text-align: right;
  }

  .product-image {
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, .68), rgba(0, 0, 0, .01));
    }
  }
}
</style>