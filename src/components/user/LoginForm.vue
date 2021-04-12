<template>
  <v-card max-width="500">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <h1>{{ $translation("login") }}</h1>

            <v-form
              ref="loginForm"
              class="mt-12"
              style="width: 400px"
              v-model="form.valid"
              lazy-validation
            >
              <v-text-field
                :label="$translation('user.username')"
                :rules="rules.username"
                required
                outlined
                v-model="user.username"
                lazy-validation
              >
              </v-text-field>
              <v-text-field
                :label="$translation('user.password')"
                :rules="rules.password"
                required
                outlined
                v-model="user.password"
              >
              </v-text-field>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue darken-1" text @click="submit"> ZAPISZ </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserLoginForm } from "@/model/UserLoginForm";
import { VForm } from "@/type/Form";
import { ActionTypes } from "@/store/modules/auth/AuthStoreTypes";

@Component({
  components: {},
  data: () => ({
    form: new UserLoginForm(),
  }),
  computed: {
    user() {
      const form = this.$data.form;
      return form.model;
    },
    rules() {
      const form = this.$data.form;
      return form.model.validator;
    },
  },
})
export default class LoginForm extends Vue {
  async submit(): Promise<any> {
    const valid = (this.$refs.loginForm as VForm).validate();
    if (valid) {
      const success = await this.$store.dispatch(
        ActionTypes.LOGIN,
        this.$data.form.model
      );
      if (success) {
        await this.$router.push("/account");
      }
    }
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
