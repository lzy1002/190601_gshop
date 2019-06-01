/*
* 入口文件
* */
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";


var vm = new Vue({
  el: "#app",
  render:function (h) {
    return h(App);
  },
  router:router
});
