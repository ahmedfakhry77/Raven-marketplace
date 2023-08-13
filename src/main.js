import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAnimXYZ from "@animxyz/vue";
import "@animxyz/core";
import './assets/tailwind.css'

Vue.config.productionTip = false;
Vue.use(VueAnimXYZ);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
