import TestTheText from "./TestTheText.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("test-the-text", TestTheText);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

TestTheText.install = install;

export default TestTheText;
