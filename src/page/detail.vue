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
    />
    <!-- section start -->
    <section class="mod-content">
      <!-- column start -->
      <div class="mod-column" :class="detail.class">
        <div class="mod-column-head">
          <h2 class="mod-column-title">{{ detail.title }}</h2>
        </div>
        <div class="mod-column-body">
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
  data: function() {
    return {
      sliders: [],
      sliderSpeed: 2000,
      detail: {
        class: "detail",
        title: "资讯详情",
        contents: []
      }
    };
  },
  mounted() {
    axios.get("/api/mock/23/api/4/news/:id").then(res => {
      //this.detail.contents = res.data.stories;
    });
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
