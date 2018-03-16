<template>
  <div id="app">
    <keep-alive>
      <transition>
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./sass/common";
</style>