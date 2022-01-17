<template>
  <div class="home">
    <v-row>
      <v-col align="center" class="login-form-wrapper page-wrapper">
        <login-form />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "@/components/user/LoginForm.vue";

@Component({
  components: { LoginForm },
})
export default class LoginView extends Vue {}
</script>
