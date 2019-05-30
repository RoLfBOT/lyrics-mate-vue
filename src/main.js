import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueContentPlaceholders from "vue-content-placeholders";

import "./assets/style.scss";

Vue.config.productionTip = false;
Vue.use(VueContentPlaceholders);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
