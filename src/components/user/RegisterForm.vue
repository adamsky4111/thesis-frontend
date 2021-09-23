<template>
  <v-card max-width="500">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center">
            <h1>{{ $translation("register.header") }}</h1>

            <v-form
              ref="registerForm"
              class="mt-12"
              style="width: 400px"
              v-model="form.valid"
              lazy-validation
              v-if="!send"
            >
              <div class="register-form-required">
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
                  type="password"
                  required
                  outlined
                  v-model="user.password"
                >
                </v-text-field>
                <v-text-field
                  :label="$translation('user.repeatPassword')"
                  :rules="rules.repeatPassword"
                  type="password"
                  required
                  outlined
                  v-model="user.repeatPassword"
                >
                </v-text-field>
                <v-divider class="mb-6"></v-divider>
                <v-checkbox
                  v-model="showPersonal"
                  :label="$translation('user.personal')"
                />
              </div>
              <div v-if="showPersonal" class="register-form-extra">
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
              </div>
            </v-form>
            <div v-else style="margin-bottom: 400px">
              Udało się zarejestrować, email aktywacyjny został wysłany
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <v-btn color="warning" dark @click="submit" v-if="!send">
              {{ $translation("user.register") }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
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
    showPersonal: false,
    send: false,
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

      if (valid) {
        api.SECURITY.register(this.$data.form.model.createArrayParams()).then(
          (response) => {
            if (response.status) {
              console.log("success");
              this.send = true;
            } else {
              console.log("fail");
            }
          }
        );
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
