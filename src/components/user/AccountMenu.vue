<template>
  <v-navigation-drawer absolute permanent right>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ fullName }}</v-list-item-title>
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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GetterTypes } from "@/store/modules/auth/AuthStoreTypes";

@Component({
  components: {},
  data: function () {
    return {
      items: [
        {
          title: this.$translation("account.menu.home"),
          icon: "mdi-home-city",
        },
        {
          title: this.$translation("account.menu.my_account"),
          icon: "mdi-account",
        },
        {
          title: this.$translation("account.menu.logout"),
          icon: "mdi-logout",
        },
      ],
      user: this.$store.getters[GetterTypes.GET_USER],
    };
  },
  computed: {
    fullName() {
      return this.$data.user.firstName + " " + this.$data.user.lastName;
    },
  },
  methods: {
    test() {
      return this.$translation("test");
    },
  },
})
export default class AccountMenu extends Vue {}
</script>
<style scoped></style>
