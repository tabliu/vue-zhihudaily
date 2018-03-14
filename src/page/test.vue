<template>
  <div class="mod-page">
    <Title :title="title"></Title>
  </div>
</template>

<script>
//引入组件
import Title from "../components/title";

export default {
  components: {
    Title
  },
  data: function() {
    return {
      title: 'Hello Vue!!'
    }
  },
  mounted() {
    //axios.get("/douban/v2/book/1220562").then(res => {
    //  console.log(res);
    //});
    axios.get("/api").then(res => {
      console.log(res);
    });
  }
};
</script>