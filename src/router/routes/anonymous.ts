import { RouteConfig } from "vue-router";

const anonymous: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/user/LoginForm.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/user/RegisterForm.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
];

export default anonymous;
