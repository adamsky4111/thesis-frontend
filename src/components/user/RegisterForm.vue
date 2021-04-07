<template>
  <v-card>
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <h1>{{ $translation("register.header") }}</h1>

            <v-form
              ref="registerForm"
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
                :label="$translation('user.email')"
                :rules="rules.email"
                required
                outlined
                v-model="user.email"
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
              <v-text-field
                :label="$translation('user.repeatPassword')"
                :rules="rules.repeatPassword"
                required
                outlined
                v-model="user.repeatPassword"
              >
              </v-text-field>
              <v-divider class="mb-6"></v-divider>
              <v-text-field
                :label="$translation('user.firstName')"
                :rules="rules.firstName"
                outlined
                v-model="user.firstName"
              >
              </v-text-field>
              <v-text-field
                :label="$translation('user.lastName')"
                :rules="rules.lastName"
                outlined
                v-model="user.lastName"
              >
              </v-text-field>
              <v-text-field
                :label="$translation('user.nick')"
                :rules="rules.nick"
                outlined
                v-model="user.nick"
              >
              </v-text-field>
              <v-text-field
                :label="$translation('user.country')"
                :rules="rules.country"
                outlined
                v-model="user.country"
              >
              </v-text-field>
              <v-textarea
                :label="$translation('user.about')"
                :rules="rules.about"
                outlined
                v-model="user.about"
              >
              </v-textarea>
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
import { UserRegisterForm } from "@/model/UserRegisterForm";
import { VForm } from "@/type/Form";
import api from "@/api/user";

@Component({
  name: "RegisterForm",
  components: {},
  data: () => ({
    form: new UserRegisterForm(),
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
  methods: {
    submit() {
      const valid = (this.$refs.registerForm as VForm).validate();

      console.log(valid);
      if (valid) {
        api
          .register(this.$data.form.model.createArrayParams())
          .then((response) => {
            if (response.status) {
              console.log("success");
            } else {
              console.log("fail");
            }
          });
      }
    },
  },
})
export default class RegisterForm extends Vue {}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
