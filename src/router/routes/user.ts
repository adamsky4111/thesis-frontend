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
  {
    path: "/account/channels",
    name: "account_channels",
    component: () => import("@/views/Account/ChannelView.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
    children: [
      {
        path: ":id",
        component: () => import("@/views/Account/AccountChannelShowView.vue"),
        props: true,
        meta: {
          auth: true,
          role: [UserRole.ROLE_USER],
          layout: Layout.LOGGED_USER,
        },
      },
    ],
  },
  {
    path: "/account/stream/start",
    name: "account_stream_start",
    component: () => import("@/views/Account/AccountStreamConfigView.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },

  {
    path: "/channels/favorite",
    name: "channels_favorite",
    component: () => import("@/views/Account/SubscribedChannelsView.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
      layout: Layout.LOGGED_USER,
    },
  },
];

export default user;
