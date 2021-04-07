import messages from "./locale";

export default {
  install(Vue) {
    Vue.prototype.$translation = function (key) {
      const locale = "pl";
      return key.split(".").reduce((a, v) => a[v], messages[locale]);
    };
  },
};
