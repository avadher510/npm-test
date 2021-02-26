import Vue from "vue";
import App from "./App.vue";
import AVTextComponent from "./components/AVTextInput.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(AVTextComponent),
});
