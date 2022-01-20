<template>
  <v-card max-width="600" class="account-information-card">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center">
            <h1 class="text-center">
              {{ $translation("account.information") }}
            </h1>
            <div class="account-information">
              <v-avatar class="account-avatar" color="grey" size="300" tile>
                <v-img :src="user.avatar"></v-img>
              </v-avatar>
              <v-btn
                class="d-block"
                fab
                dark
                color="indigo"
                @click="changeAvatar"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
              <table>
                <tr>
                  <th>{{ $translation("user.username") }}</th>
                  <th>{{ $translation("user.email") }}</th>
                  <th>{{ $translation("user.firstName") }}</th>
                  <th>{{ $translation("user.lastName") }}</th>
                  <th>{{ $translation("user.nick") }}</th>
                  <th>{{ $translation("user.about") }}</th>
                </tr>
                <tr>
                  <td>{{ user.username }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.firstName }}</td>
                  <td>{{ user.lastName }}</td>
                  <td>{{ user.nick }}</td>
                  <td>{{ user.about }}</td>
                </tr>
              </table>
              <div class="text-right">
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  large
                  color="cyan"
                  @click="openEditor"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions> </v-card-actions>
    <avatar-changer
      :display="avatarDialog"
      :avatar="user.avatar"
      :loading="loading"
      @close="closeAvatarChanger"
      @accept="uploadAvatar"
    />
    <loading-bar :display="loading" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModel } from "@/model/UserModel";
import AvatarChanger from "@/components/user/AvatarChanger.vue";
import { ActionTypes } from "@/store/modules/auth/AuthStoreTypes";
import LoadingBar from "@/components/common/LoadingBar.vue";

@Component({
  props: {
    user: UserModel,
  },
  components: { AvatarChanger, LoadingBar },
  methods: {},
})
export default class AccountInformation extends Vue {
  loading = false;
  avatarDialog = false;

  openEditor(): void {
    this.$emit("displayEdit", true);
  }
  changeAvatar(): void {
    this.avatarDialog = true;
  }
  closeAvatarChanger(): void {
    this.avatarDialog = false;
  }
  async uploadAvatar(file): Promise<void> {
    this.loading = true;
    let form = new FormData();
    form.append("file", file);
    await this.$store.dispatch(ActionTypes.CHANGE_AVATAR, form);
    this.loading = false;
    this.closeAvatarChanger();
  }
}
</script>
<style scoped></style>
