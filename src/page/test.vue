<template>
  <div>
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
  }
};
</script>