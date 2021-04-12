<template>
  <v-app>
    <v-app-bar app color="primary" dark></v-app-bar>
    <v-main>
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

export default Vue.extend({
  components: { LoggedLayout, DefaultLayout },
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
});
</script>

<style lang="scss" scoped></style>
