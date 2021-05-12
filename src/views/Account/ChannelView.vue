<template>
  <div class="account-settings">
    <v-row>
      <v-col align="center">
        <h1>{{ $translation("account.channels.header") }}</h1>
        <account-channel-table />
        <router-view :key="$route.params.id"></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
import AccountChannelTable from "@/components/user/account/AccountChannelTable.vue";

@Component({
  components: { AccountMenu, AccountChannelTable },
})
export default class ChannelSettings extends Vue {}
</script>
