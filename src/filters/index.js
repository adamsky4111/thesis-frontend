import Vue from "vue";
import moment from "moment";

Vue.filter("dateTime", function (value) {
  moment();
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
