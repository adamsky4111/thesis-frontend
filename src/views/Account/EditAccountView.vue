<template>
  <div class="account-edit">
    <v-row>
      <v-col align="center">
        <edit-profile-form @onEdit="goToAccount" />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EditProfileForm from "@/components/user/EditProfileForm.vue";

@Component({
  components: { EditProfileForm },
  methods: {
    goToAccount() {
      this.$router.push("/account");
    },
  },
})
export default class EditAccountView extends Vue {}
</script>
