import { RouteConfig } from "vue-router";

const anonymous: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginView.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterView.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
  {
    path: "/verify",
    name: "Verify",
    component: () => import("@/views/VerifyView.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
];

export default anonymous;
