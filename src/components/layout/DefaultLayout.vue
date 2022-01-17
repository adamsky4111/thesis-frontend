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

          <v-toolbar-title v-on:click="goToHome">
            {{ $translation("nav.title") }}</v-toolbar-title
          >

          <template v-slot:extension>
            <v-spacer></v-spacer>
            <div v-if="!isLogged">
              <v-btn
                class="mb-4 mr-5"
                outlined
                color="white"
                @click="goToLogin"
              >
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
            </div>
          </template>
        </v-toolbar>
      </div>
      <account-menu v-if="isLogged" />
      <!--      <stream-config v-if="isLogged" />-->
      <slot />
      <default-footer />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
import DefaultFooter from "@/components/common/DefaultFooter.vue";
import { GetterTypes } from "@/store/modules/auth/AuthStoreTypes";
import StreamConfig from "@/components/stream/StreamConfig.vue";

@Component({
  components: { StreamConfig, DefaultFooter, AccountMenu },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToRegister() {
      this.$router.push("/register");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
  computed: {
    isLogged(): boolean {
      return this.$store.getters[GetterTypes.IS_LOGGED];
    },
  },
})
export default class DefaultLayout extends Vue {}
</script>
<style scoped>
@font-face {
  font-family: "Sucrose Bold Two";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sucrose.woff2")
    format("woff2");
}
@font-face {
  font-family: "IM Fell French Canon Pro";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/im-fell-french-canon-pro.woff2")
    format("woff2");
}
.v-toolbar__title {
  font-size: 4rem !important;
  font-family: "Sucrose Bold Two";
  cursor: pointer;
}
</style>
