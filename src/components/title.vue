<template>
  <header class="mod-header">
      <h1 class="mod-header-logo">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="scss">
  .mod-header {
    height: 100px;
    background-color: #f2f2f2;

    &-logo {
      color: #000;
      font-size: 20px;
      font-weight: 700;
      line-height: 100px;
      text-align: center;
    }
  }
</style>
