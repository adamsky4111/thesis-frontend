<template>
  <v-navigation-drawer
    class="drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    floating
    fixed
    right
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>{{ mini ? "mdi-chevron-left" : "mdi-chevron-right" }}</v-icon>
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
            ><router-link :to="item.to">{{
              item.title
            }}</router-link></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GetterTypes, ActionTypes } from "@/store/modules/auth/AuthStoreTypes";

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
        },
        {
          title: this.$translation("account.menu.my_account"),
          icon: "mdi-account",
          to: "/account",
        },
        {
          title: this.$translation("account.menu.favorite_channels"),
          icon: "mdi-star-settings",
          to: "/channels/favorite",
        },
        {
          title: this.$translation("account.menu.my_channels"),
          icon: "mdi-movie-open-settings",
          to: "/account/channels",
        },
        {
          title: this.$translation("account.menu.channel_configs"),
          icon: "mdi-cog-refresh",
          to: "/account/settings",
        },
        {
          title: this.$translation("account.menu.logout"),
          icon: "mdi-logout",
          to: "/logout",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters[GetterTypes.GET_USER];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch(ActionTypes.LOGOUT);
    },
  },
})
export default class AccountMenu extends Vue {}
</script>
<style scoped>
.drawer {
  margin-top: 70px;
  background-color: #eeeeff !important;
}
</style>
