import { RouteConfig } from "vue-router";
import { UserRole } from "@/router/types";

const user: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
    },
  },
  {
    path: "/account/edit",
    name: "account_edit",
    component: () => import("@/components/user/EditProfileForm.vue"),
    meta: {
      auth: true,
      role: [UserRole.ROLE_USER],
    },
  },
];

export default user;
