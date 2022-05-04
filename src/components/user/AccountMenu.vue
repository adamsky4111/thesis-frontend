<template>
  <v-navigation-drawer
    class="drawer"
    v-model="drawer"
    :mini-variant.sync="isMenuOpen"
    floating
    fixed
    right
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-btn icon @click.stop="toggleMenu">
          <v-icon>{{
            isMenuOpen ? "mdi-chevron-left" : "mdi-chevron-right"
          }}</v-icon>
        </v-btn>
        <v-list-item-avatar>
          <img :src="user.avatar || ''" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            >{{ user.firstName }} {{ user.lastName }}</v-list-item-title
          >
          <v-list-item-subtitle>{{
            $translation("user.logged")
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title
            ><router-link :to="item.to" v-if="item.type === 'route'">{{
              item.title
            }}</router-link>
            <a v-else @click="item.to"> {{ item.title }}</a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Component, Vue } from "vue-property-decorator";
import { GetterTypes, ActionTypes } from "@/store/modules/auth/AuthStoreTypes";
import { ActionTypes as SettingsActionTypes } from "@/store/modules/settings/PublicTypes";
import { GetterTypes as SettingsGettersTypes } from "@/store/modules/settings/PublicTypes";

@Component({
  components: {},
  data: function () {
    return {
      mini: true,
      drawer: true,
      items: [
        {
          title: this.$translation("account.menu.home"),
          icon: "mdi-home-city",
          to: "/",
          type: "route",
        },
        {
          title: this.$translation("account.menu.my_account"),
          icon: "mdi-account",
          to: "/account",
          type: "route",
        },
        {
          title: this.$translation("account.menu.favorite_channels"),
          icon: "mdi-star-settings",
          to: "/channels/favorite",
          type: "route",
        },
        {
          title: this.$translation("account.menu.my_channels"),
          icon: "mdi-movie-open-settings",
          to: "/account/channels",
          type: "route",
        },
        {
          title: this.$translation("account.menu.channel_configs"),
          icon: "mdi-cog-refresh",
          to: "/account/settings",
          type: "route",
        },
        {
          title: this.$translation("account.menu.logout"),
          icon: "mdi-logout",
          to: "/logout",
          type: "route",
        },
        {
          title: this.$translation("account.menu.theme_change"),
          icon: "mdi-arrange-bring-forward",
          to: () => this.switchTheme(),
          type: "func",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters[GetterTypes.GET_USER];
    },
    isMenuOpen() {
      return this.$store.getters[SettingsGettersTypes.IS_MENU_ACTIVE];
    },
  },
  methods: {
    logout(): void {
      this.$store.dispatch(ActionTypes.LOGOUT);
    },
    switchTheme(): void {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem(
        "theme",
        this.$vuetify.theme.dark ? "dark" : "light"
      );
    },
    toggleMenu(): void {
      this.$store.dispatch(SettingsActionTypes.TOGGLE_MENU);
    },
  },
})
export default class AccountMenu extends Vue {}
</script>
<style scoped lang="scss">
.drawer {
  margin-top: 70px;
  border-left: solid 2px #999;
  border-top: solid 2px #999;
}
.theme--dark.v-list-item__title a {
  color: #fff !important;
}
.v-list-item__title.theme--light a {
  color: #000;
}
.v-list-item__title a {
  text-decoration: none;
  font-size: 1.1rem;
}
</style>
