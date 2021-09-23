import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import translations from "@/plugins/translation/translations";
import "./style/main.scss";
import moment from "@/plugins/moment/moment";
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import { WebCam } from "vue-web-cam";
Vue.use(wysiwyg, {});
Vue.use(WebCam);

Vue.config.productionTip = false;

Vue.use(translations);
Vue.use(moment);
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
