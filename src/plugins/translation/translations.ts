import messages from "./locale.js";

export default {
  install(Vue) {
    Vue.prototype.$translation = function (
      key,
      params: Record<any, string> | null = null
    ) {
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

      if (params !== null) {
        for (const paramsKey in params) {
          message = message.replace(`{{ ${paramsKey} }}`, params[paramsKey]);
        }
      }

      return message;
    };
  },
};
