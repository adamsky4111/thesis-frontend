<template>
  <div>
    <v-dialog v-model="displayDialog" width="800" overlay-color="blue">
      <v-card v-if="!form.sending">
        <v-card-title class="text-center">
          {{
            editMode
              ? $translation("account.settings.title_edit", {
                  name: model.name,
                })
              : $translation("account.settings.title_create")
          }}</v-card-title
        >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col align="center" justify="center">
                <v-form
                  ref="settingsForm"
                  class="mt-12"
                  style="width: 400px"
                  v-model="form.valid"
                  lazy-validation
                >
                  <v-text-field
                    :label="$translation('account.settings.name')"
                    required
                    outlined
                    v-model="model.name"
                    lazy-validation
                  >
                  </v-text-field>
                  <v-text-field
                    :label="$translation('account.settings.age_allowed')"
                    required
                    outlined
                    v-model="model.ageAllowed"
                    lazy-validation
                  >
                  </v-text-field>
                  <v-checkbox
                    color="red"
                    :label="$translation('account.settings.set_default')"
                    required
                    outlined
                    v-model="model.isDefault"
                    lazy-validation
                  >
                  </v-checkbox>
                </v-form>
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
                  @click="submit"
                  :disabled="form.sending"
                >
                  {{ $translation("account.settings.submit") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-if="form.sending" class="text-center">
      <loading-spin :display="form.sending" />
    </div>
  </div>
</template>

<script lang="ts">
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { VForm } from "@/type/Form";
import { SettingsModel } from "@/model/SettingsModel";
import { SettingsForm } from "@/model/SettingsForm";
import { ActionTypes } from "@/store/modules/account/AccountStoreTypes";

@Component({
  components: { LoadingSpin },
})
export default class AccountSettingsForm extends Vue {
  @Prop({ default: false })
  editMode!: boolean;
  @Prop({
    default: () => {
      new SettingsModel();
    },
  })
  model!: SettingsModel;
  @Prop({ default: false })
  display!: boolean;
  form = new SettingsForm(this.model);
  send = false;

  mounted(): void {
    if (this.model === undefined) {
      this.model = new SettingsModel();
    }
    console.log(this.model, "mounted");
  }

  get displayDialog(): boolean {
    return this.display;
  }
  set displayDialog(newValue) {
    this.$emit("input", newValue);
  }

  async submit(): Promise<void> {
    const valid = (this.$refs.settingsForm as VForm).validate();

    if (valid) {
      this.form.sending = true;
      console.log(this.model);
      if (this.editMode) {
        await this.$store.dispatch(ActionTypes.UPDATE, this.model);
      } else {
        await this.$store.dispatch(ActionTypes.CREATE, this.model);
      }
      this.form.saved = true;
      this.form.sending = false;
      this.$emit("refresh");
    }
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
