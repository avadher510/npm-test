import Vue from "vue";
import AVTextInput from "./AVTextInput.vue";

const components = {
  AVTextInput,
};

Object.keys(components).forEach((item) =>
  Vue.component(item, components[item])
);

export default components;
