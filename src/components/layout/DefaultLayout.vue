<template>
  <div>
    <div class="wrapper">
      <div>
        <v-toolbar
          dark
          prominent
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>{{ $translation("nav.title") }}</v-toolbar-title>

          <template v-slot:extension>
            <v-spacer></v-spacer>
            <v-btn class="mb-4 mr-5" outlined color="white" @click="goToLogin">
              {{ $translation("user.login") }}
            </v-btn>
            <v-btn
              class="mb-4 mr-12"
              outlined
              color="white"
              @click="goToRegister"
            >
              {{ $translation("user.register") }}
            </v-btn>
          </template>
        </v-toolbar>
      </div>
      <slot />
      <default-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
import DefaultFooter from "@/components/common/DefaultFooter.vue";

@Component({
  components: { DefaultFooter, AccountMenu },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
})
export default class DefaultLayout extends Vue {}
</script>
<style scoped></style>
