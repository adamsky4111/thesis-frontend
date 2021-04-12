<template>
  <v-card max-width="600">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <h1>{{ $translation("account.edit.header") }}</h1>

            <div class="account-edit-form">
              <v-form
                ref="profileForm"
                class="mt-12"
                style="width: 400px"
                v-model="form.valid"
                lazy-validation
                :disabled="!editable"
              >
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
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue darken-1" text @click="submit">
        {{ $translation("action.save") }}
      </v-btn>
    </v-card-actions>
    <loading-bar :display="this.form.sending" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoadingBar from "@/components/common/LoadingBar.vue";
import { VForm } from "@/type/Form";
import { UserRegisterForm } from "@/model/UserRegisterForm";
import { ActionTypes, GetterTypes } from "@/store/modules/auth/AuthStoreTypes";
import { UserRegisterModel } from "@/model/UserRegisterModel";

@Component({
  components: { LoadingBar },
  props: {
    editable: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      form: new UserRegisterForm(
        new UserRegisterModel(this.$store.getters[GetterTypes.GET_USER])
      ),
      userData: this.$store.getters[GetterTypes.GET_USER],
    };
  },
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
    async submit() {
      const valid = (this.$refs.profileForm as VForm).validate();
      if (valid) {
        this.form.sending = true;
        await this.$store.dispatch(ActionTypes.EDIT_ACCOUNT, this.form.model);
        this.form.sending = false;
        this.$emit("onEdit");
      }
    },
  },
})
export default class EditProfileForm extends Vue {}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
