<template>
  <v-app>
    <v-app-bar app><span class="banner">Start stream now!</span></v-app-bar>
    <v-main class="body darker-skin">
      <component :is="layout">
        <router-view></router-view>
      </component>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import LoggedLayout from "@/components/layout/LoggedLayout.vue";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import { GetterTypes } from "@/store/modules/auth/types";
import { Layout } from "@/router/types";

export default Vue.extend({
  components: { LoggedLayout, DefaultLayout },
  name: "App",
  computed: {
    layout() {
      return (
        (this.$route.meta.layout === Layout.LOGGED_USER ||
        this.$store.getters[GetterTypes.IS_LOGGED]
          ? "logged"
          : "default") + "-layout"
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.banner {
  font-size: 1.4rem;
}
</style>
