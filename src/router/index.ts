import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes/index";
import store from "@/store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log();
  console.log(to.matched.some((record) => console.log(record)));
  if (to.matched.some((record) => record.meta.auth)) {
    if (to.matched.some((record) => record.meta.role)) {
      // if required role is specified
      const userRoles = store.getters["auth/roles"];

      const userHasRole = to.matched.some((record) => {
        let access = false;
        record.meta.role.forEach((role) => {
          if (role && userRoles.includes(role)) {
            access = true;
          }
        });
        return access;
      });

      if (userHasRole) {
        // if user has required role;
        next();
      } else {
        next({ path: "/login" });
      }
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
