import messages from "./locale";

export default {
  install(Vue) {
    Vue.prototype.$translation = function (key) {
      const locale = "pl";
      let message;
      try {
        message = key.split(".").reduce((a, v) => a[v], messages[locale]);
      } catch (e) {
        return key;
      }

      if (message === undefined) {
        return key;
      }

      return message;
    };
  },
};
