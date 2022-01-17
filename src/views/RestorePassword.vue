<template>
  <div class="home">
    <v-row>
      <v-col align="center" class="restore-form-wrapper page-wrapper">
        <password-changer />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PasswordChanger from "@/components/user/PasswordChanger.vue";

@Component({
  components: { PasswordChanger },
  mounted() {
    if (!this.$route.query.token || !this.$route.query.email) {
      this.$router.push("/");
    }
  },
})
export default class RegisterView extends Vue {}
</script>
