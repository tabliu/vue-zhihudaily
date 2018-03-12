export const dir = function (Vue) {
  Vue.directive('demo', {
    bind: function (el, binding) {
      console.log("run directive demo")
    }
  })
}
