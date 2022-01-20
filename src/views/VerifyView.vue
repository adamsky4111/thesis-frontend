<template>
  <div class="home">
    <v-row>
      <v-col
        align="center"
        class="register-form-wrapper page-wrapper"
        style="margin-bottom: 500px"
      >
        <verify-handler />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VerifyHandler from "@/components/user/VerifyHandler.vue";

@Component({
  components: { VerifyHandler },
})
export default class RegisterView extends Vue {}
</script>
