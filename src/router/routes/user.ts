import { RouteConfig } from "vue-router";
import { Layout, UserRole } from "@/router/types";

const user: Array<RouteConfig> = [
  {
    path: "/logout",
    name: "Logout",
    component: () => import("@/views/LogoutView.vue"),
    meta: {
      auth: true,
      layout: Layout.DEFAULT,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/Account/DefaultAccountView.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },
  {
    path: "/account/edit",
    name: "account_edit",
    component: () => import("@/views/Account/EditAccountView.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },
  {
    path: "/account/settings",
    name: "account_settings",
    component: () => import("@/views/Account/ChannelSettings.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },
];

export default user;
