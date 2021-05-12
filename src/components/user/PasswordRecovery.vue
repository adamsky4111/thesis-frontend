<template>
  <div>
    <v-dialog v-model="displayDialog" width="800" overlay-color="blue">
      <v-card v-if="!form.sending">
        <v-card-title class="text-center">
          {{ $translation("user.recovery.title") }}</v-card-title
        >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col align="center" justify="center">
                <v-form
                  v-if="!form.saved"
                  ref="recoveryForm"
                  class="mt-12"
                  style="width: 400px"
                  v-model="form.valid"
                  lazy-validation
                >
                  <v-text-field
                    :label="$translation('user.email')"
                    :rules="rules.email"
                    required
                    outlined
                    v-model="form.model.email"
                    lazy-validation
                  >
                  </v-text-field>
                </v-form>
                <div v-else>
                  {{ $translation("user.recovery.send") }}
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
                  @click="recovery"
                  :disabled="form.sending || form.saved"
                >
                  {{ $translation("user.recovery_password") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="form.sending" class="text-center">
      <loading-spin
        :display="form.sending"
        :text="$translation('user.recovery.loading')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import security from "@/api/user/security";
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { RestorePasswordForm } from "@/model/RestorePasswordForm";
import { RestorePasswordModel } from "@/model/RestorePasswordModel";
import { VForm } from "@/type/Form";

@Component({
  components: { LoadingSpin },
})
export default class PasswordRecovery extends Vue {
  model = new RestorePasswordModel();
  form = new RestorePasswordForm(this.model);
  rules = this.model.validator;
  @Prop({ default: false })
  display!: boolean;
  send = false;

  get displayDialog(): boolean {
    return this.display;
  }
  set displayDialog(newValue) {
    this.$emit("input", newValue);
  }

  recovery(): void {
    const valid = (this.$refs.recoveryForm as VForm).validate();

    if (valid) {
      this.form.sending = true;
      security
        .passwordRecovery(this.form.model as RestorePasswordModel)
        .then((response) => {
          if (response.status) {
            this.form.saved = true;
          } else {
            this.form.error = true;
          }

          this.form.sending = false;
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
