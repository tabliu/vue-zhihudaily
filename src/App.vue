<template>
  <div id="app">
    <keep-alive>
      <transition name="page">
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

.page-enter-active {
  transition: all .3s ease-in-out;
}

.page-leave-active {
  transition: all .3s ease-in-out;
}

.page-enter {
  transform: translateX(100%);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>