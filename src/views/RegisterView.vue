<template>
  <div class="home">
    <v-row>
      <v-col align="center" class="register-form-wrapper page-wrapper">
        <register-form />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterForm from "@/components/user/RegisterForm.vue";

@Component({
  components: { RegisterForm },
})
export default class RegisterView extends Vue {}
</script>
