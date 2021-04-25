<template>
  <div class="account-settings">
    <v-row>
      <v-col align="center">
        <h1>{{ $translation("account.settings.header") }}</h1>
        <settings-table />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
import SettingsTable from "@/components/user/SettingsTable.vue";

@Component({
  components: { AccountMenu, SettingsTable },
})
export default class ChannelSettings extends Vue {}
</script>
