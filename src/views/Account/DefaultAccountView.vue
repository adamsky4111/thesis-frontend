<template>
  <div class="account-show">
    <v-row>
      <v-col align="center">
        <account-schedule-table />
        <stream-config />
      </v-col>
      <v-col align="center">
        <account-information :user="user" @displayEdit="goToAccountEdit" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountInformation from "@/components/user/AccountInformation.vue";
import { GetterTypes } from "@/store/modules/auth/AuthStoreTypes";
import StreamConfig from "@/components/stream/StreamConfig.vue";
import AccountScheduleTable from "@/components/user/account/streamSchedule/AccountScheduleTable.vue";

@Component({
  components: {
    AccountInformation,
    StreamConfig,
    AccountScheduleTable,
  },
  computed: {
    user() {
      return this.$store.getters[GetterTypes.GET_USER];
    },
  },
  methods: {
    goToAccountEdit(value: boolean) {
      this.$router.push("/account/edit");
    },
  },
})
export default class DefaultAccountView extends Vue {}
</script>
