import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import translations from "@/plugins/translation/translations";
import "./style/main.scss";
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import { WebCam } from "vue-web-cam";
import VueMoment from "vue-moment";
import moment from "moment";

require("moment/locale/pl");
Vue.use(wysiwyg, {});
Vue.use(WebCam);
Vue.config.productionTip = false;
Vue.use(translations);
Vue.use(VueMoment, { moment });
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
