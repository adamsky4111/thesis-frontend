<template>
  <v-row justify="center">
    <v-dialog v-model="display" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Zmiana Avatara</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col align="center">
                <v-avatar class="account-avatar" color="grey" size="300" tile>
                  <v-img :src="actualAvatar"></v-img>
                </v-avatar>
                <v-form ref="avatarForm">
                  <v-file-input
                    @change="onFileChange"
                    :rules="rules"
                    v-model="files"
                    accept="image/png, image/jpeg, image/bmp"
                    placeholder="Pick an avatar"
                    prepend-icon="mdi-camera"
                    label="Avatar"
                  ></v-file-input>
                </v-form>
                <v-btn
                  :loading="loading"
                  :disabled="loading"
                  color="blue-grey"
                  class="ma-2 white--text"
                  fab
                  @click="accept"
                >
                  <v-icon dark> mdi-cloud-upload </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Zamknij </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VForm } from "@/type/Form";

@Component({
  components: {},
  props: {
    display: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
})
export default class AvatarChanger extends Vue {
  @Prop({ default: "" })
  avatar!: string;
  rules = [(value) => !value || value.size < 2000000];
  files = [];
  actualAvatar = this.avatar;

  onFileChange(): void {
    this.actualAvatar = URL.createObjectURL(this.files);
  }
  close(): void {
    this.$emit("close");
  }
  accept(): void {
    const valid = (this.$refs.avatarForm as VForm).validate();
    if (valid) {
      this.$emit("accept", this.files);
    }
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
