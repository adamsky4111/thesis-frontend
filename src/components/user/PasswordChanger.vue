<template>
  <div>
    <v-card width="600px">
      <v-card-title class="text-center">
        {{ $translation("user.recovery.change_password") }}</v-card-title
      >
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align="center" justify="center">
              <v-form
                ref="changePasswordForm"
                class="mt-12"
                style="width: 400px"
                v-if="!isSendForm"
                v-model="form.valid"
                lazy-validation
              >
                <v-text-field
                  :label="$translation('user.password')"
                  :rules="rules.password"
                  required
                  outlined
                  v-model="form.model.password"
                  lazy-validation
                >
                </v-text-field>
                <v-text-field
                  :label="$translation('user.repeatPassword')"
                  :rules="rules.repeatPassword"
                  required
                  outlined
                  v-model="form.model.repeatPassword"
                  lazy-validation
                >
                </v-text-field>
              </v-form>
              <div v-else>
                <div v-if="form.saved">
                  {{ $translation("user.recovery.success") }}
                </div>
                <div v-if="form.error">
                  {{ $translation("user.recovery.fail") }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-col align="center" justify="center">
              <v-btn
                color="warning"
                dark
                text
                @click="changePassword"
                :disabled="form.error || form.saved || form.sending"
              >
                {{ $translation("user.recovery.accept") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import security from "@/api/user/security";
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { VForm } from "@/type/Form";
import { UserPasswordModel } from "@/model/UserPasswordModel";
import { UserPasswordForm } from "@/model/UserPasswordForm";

@Component({
  components: { LoadingSpin },
})
export default class PasswordChanger extends Vue {
  model = new UserPasswordModel();
  form = new UserPasswordForm(this.model);
  rules = this.model.validator;
  token = this.$route.query.token;
  email = this.$route.query.email;
  isSendForm = false;

  changePassword(): void {
    const valid = (this.$refs.changePasswordForm as VForm).validate();

    if (valid) {
      this.form.sending = true;
      this.model.token = String(this.token);
      this.model.email = String(this.email);
      security
        .changePassword(
          (this.form.model as UserPasswordModel).createArrayParams()
        )
        .then((response) => {
          if (response.status) {
            this.form.saved = true;
          }

          this.form.sending = false;
          this.isSendForm = true;
        })
        .catch((error) => {
          this.form.sending = false;
          this.form.error = true;
          this.isSendForm = true;
        });
    }
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
