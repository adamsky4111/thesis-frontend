<template>
  <div>
    <v-dialog v-model="displayDialog" width="800" overlay-color="blue">
      <v-card v-if="!form.sending">
        <v-card-title class="text-center">
          {{
            editMode
              ? $translation("account.channels.title_edit", {
                  name: model.name,
                })
              : $translation("account.channels.title_create")
          }}</v-card-title
        >
        <v-card-text>
          <v-container v-if="!loading">
            <v-row>
              <v-col align="center" justify="center">
                <v-form
                  class="mt-5"
                  ref="settingsForm"
                  v-model="form.valid"
                  lazy-validation
                >
                  <v-text-field
                    class="input"
                    :label="$translation('account.channels.name')"
                    required
                    outlined
                    v-model="model.name"
                    :rules="model.validator.name"
                    lazy-validation
                  >
                  </v-text-field>
                  <wysiwyg
                    :label="$translation('account.channels.description')"
                    required
                    outlined
                    v-model="model.description"
                    :rules="model.validator.description"
                    lazy-validation
                  >
                  </wysiwyg>
                  <v-select
                    class="input"
                    :label="$translation('account.channels.choose_settings')"
                    v-model="model.settings"
                    :items="settings"
                    item-value="id"
                    item-text="name"
                    return-object
                  >
                  </v-select>
                  <v-text-field
                    class="input"
                    :label="$translation('account.settings.age_allowed')"
                    required
                    outlined
                    disabled
                    v-model="model.settings.ageAllowed"
                    :rules="model.validator.description"
                    lazy-validation
                  >
                  </v-text-field>
                  <v-text-field
                    class="input"
                    :label="$translation('account.settings.name')"
                    required
                    outlined
                    disabled
                    v-model="model.settings.name"
                    :rules="model.validator.description"
                    lazy-validation
                  >
                  </v-text-field>
                  <v-checkbox
                    color="red"
                    :label="$translation('account.channels.set_default')"
                    required
                    outlined
                    v-model="model.default"
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
                  {{ $translation("account.channels.submit") }}
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
import { ChannelModel } from "@/model/ChannelModel";
import { ActionTypes } from "@/store/modules/accountChannels/PublicTypes";
import { ChannelForm } from "@/model/ChannelForm";
import { SettingsFilter } from "@/model/Filter/Settings/SettingsFilter";
import api from "@/api/user";
import { SettingsModel } from "@/model/SettingsModel";

@Component({
  components: { LoadingSpin },
})
export default class AccountChannelForm extends Vue {
  @Prop({ default: false })
  editMode!: boolean;
  @Prop({
    default: () => {
      new ChannelModel();
    },
  })
  model!: ChannelModel;
  @Prop({ default: false })
  display!: boolean;
  form = new ChannelForm(this.model);
  send = false;
  settings: Record<number, string> = {};
  loading = true;

  mounted(): void {
    this.loading = true;
    if (this.model === undefined) {
      this.model = new ChannelModel();
    }
    this.loadInput();
    this.loading = false;
  }

  get displayDialog(): boolean {
    return this.display;
  }
  set displayDialog(newValue) {
    this.$emit("input", newValue);
  }

  test() {
    console.log(this.model);
  }

  async loadInput(): Promise<void> {
    const filter = new SettingsFilter();
    filter.paginated = false;

    api.ACCOUNT_SETTINGS.list(filter).then((response) => {
      if (response.status) {
        this.settings = response.data.items.map((item) => {
          return new SettingsModel(item);
        });
      }
    });
  }

  async submit(): Promise<void> {
    const valid = (this.$refs.settingsForm as VForm).validate();

    if (valid) {
      this.form.sending = true;
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
.input {
  width: 100%;
}
</style>
