<template>
  <div>
    <v-card v-if="!form.sending">
      <v-card-title class="text-center">
        {{
          editMode
            ? $translation("account.stream.title_edit", {
                name: model.name,
              })
            : $translation("account.stream.title_create")
        }}</v-card-title
      >
      <v-card-text>
        <v-container v-if="!loading">
          <v-row>
            <v-col align="center" justify="center">
              <v-form
                ref="streamForm"
                class="mt-12"
                v-model="form.valid"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      :label="$translation('account.stream.name')"
                      required
                      outlined
                      v-model="model.name"
                      :rules="model.validator.name"
                      lazy-validation
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <dropzone />
                  </v-col>
                  <v-col cols="12">
                    <wysiwyg
                      :label="$translation('account.stream.description')"
                      required
                      outlined
                      v-model="model.description"
                      :rules="model.validator.description"
                      lazy-validation
                    >
                    </wysiwyg>
                  </v-col>
                  <v-col cols="12">
                    <v-checkbox
                      color="red"
                      :label="$translation('account.stream.start_now')"
                      required
                      outlined
                      v-model="model.startNow"
                      lazy-validation
                    >
                    </v-checkbox>
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col cols="6">
                    <time-dialog-picker
                      :label="$translation('account.stream.start_hour')"
                      @onChange="onChangeStartingTime"
                      :error="!validDate"
                    />
                  </v-col>
                  <v-col cols="6">
                    <date-dialog-picker
                      :label="$translation('account.stream.start_date')"
                      @onChange="onChangeStartingDate"
                      :error="!validDate"
                    />
                  </v-col>
                </v-row>
                <v-row align="center" justify="center">
                  <v-col cols="6">
                    <time-dialog-picker
                      :label="$translation('account.stream.ending_hour')"
                      @onChange="onChangeEndingTime"
                      :error="!validDate"
                    />
                  </v-col>
                  <v-col cols="6">
                    <date-dialog-picker
                      :label="$translation('account.stream.ending_date')"
                      @onChange="onChangeEndingDate"
                      :error="!validDate"
                    />
                  </v-col>
                </v-row>
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
                {{ $translation("account.stream.submit") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
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
import { StreamModel } from "@/model/StreamModel";
import { StreamForm } from "@/model/StreamForm";
import TimeDialogPicker from "@/components/common/TimeDialogPicker.vue";
import DateDialogPicker from "@/components/common/DateDialogPicker.vue";
import { ActionTypes } from "@/store/modules/accountStreams/PublicTypes";
import Dropzone from "@/components/common/Dropzone.vue";

@Component({
  components: { Dropzone, LoadingSpin, DateDialogPicker, TimeDialogPicker },
})
export default class AccountStreamForm extends Vue {
  @Prop({ default: false })
  editMode!: boolean;
  model: StreamModel = new StreamModel();
  form = new StreamForm(this.model);
  send = false;
  loading = true;
  validDate = true;
  mounted(): void {
    this.loading = true;
    this.loading = false;
  }

  onChangeStartingDate(date): void {
    const old = this.model.startingAt;
    const next = new Date(date);
    this.model.startingAt = new Date(
      next.getFullYear(),
      next.getMonth(),
      next.getDate(),
      old?.getHours(),
      old?.getMinutes(),
      old?.getSeconds()
    );
  }

  onChangeStartingTime(time): void {
    const old = this.model.startingAt;
    if (!(old instanceof Date)) {
      return;
    }
    this.model.startingAt = new Date(
      old.getFullYear(),
      old.getMonth(),
      old.getDate(),
      time.hours,
      time.minutes,
      time.seconds
    );
  }

  onChangeEndingDate(date): void {
    const old = this.model.endingAt;
    const next = new Date(date);
    this.model.endingAt = new Date(
      next?.getFullYear(),
      next?.getMonth(),
      next?.getDate(),
      old?.getHours(),
      old?.getMinutes(),
      old?.getSeconds()
    );
  }

  onChangeEndingTime(time): void {
    const old = this.model.endingAt;
    if (!(old instanceof Date)) {
      return;
    }
    this.model.endingAt = new Date(
      old?.getFullYear(),
      old?.getMonth(),
      old?.getDate(),
      time.hours,
      time.minutes,
      time.seconds
    );
  }

  async submit(): Promise<void> {
    let valid;
    if (this.$moment(this.model.endingAt).isAfter(this.model.startingAt)) {
      this.validDate = true;
      valid = (this.$refs.streamForm as VForm).validate();
    } else {
      valid = false;
      this.validDate = false;
    }

    if (valid) {
      await this.$store.dispatch(ActionTypes.CREATE, this.model);
      this.form.saved = true;
      this.form.sending = false;
    }
  }
}
</script>
<style scoped>
.v-text-field {
  /*width: 400px;*/
}
</style>
