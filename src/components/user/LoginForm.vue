<template>
  <v-card>
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
import { Action } from "vuex-class";
import { ModulesNamespaces } from "@/store/types";
import { ActionTypes } from "@/store/modules/auth/types";

const namespace: string = ModulesNamespaces.AUTH;

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
  @Action(ActionTypes.LOGIN, { namespace }) login: any;

  async submit(): Promise<any> {
    const valid = (this.$refs.loginForm as VForm).validate();
    if (valid) {
      const test = await this.login(this.$data.form.model);
      console.log(test);
    }
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
