import { RouteConfig } from "vue-router";
import { Layout } from "@/router/types";

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
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      auth: false,
      layout: Layout.DEFAULT,
    },
  },
  {
    path: "/stream/:id",
    name: "Stream",
    component: () => import("@/views/Stream/StreamView.vue"),
    meta: {
      auth: false,
      layout: Layout.DEFAULT,
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
  {
    path: "/forgot-password",
    name: "RecoveryPassword",
    component: () => import("@/views/RestorePassword.vue"),
    meta: {
      auth: false,
      role: [],
    },
  },
];

export default anonymous;
