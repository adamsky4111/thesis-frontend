<template>
  <div class="account-edit">
    <v-row>
      <v-col align="center">
        <h1>{{ $translation("account.channels.favorite.header") }}</h1>
        <account-subscribe-channel-list />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditProfileForm from "@/components/user/EditProfileForm.vue";
import AccountSubscribeChannelList from "@/components/user/account/AccountSubscribeChannelList.vue";

@Component({
  components: { AccountSubscribeChannelList, EditProfileForm },
  methods: {
    goToAccount() {
      this.$router.push("/account");
    },
  },
  mounted() {},
})
export default class EditAccountView extends Vue {}
</script>
