<template>
  <v-card>
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center">
            <h2 class="text-center">
              {{ $translation("account.information") }}
            </h2>
            <div class="account-information">
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
                <v-btn class="mx-2" fab dark large color="cyan">
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModel } from "@/model/UserModel";

@Component({
  props: {
    user: UserModel,
  },
  components: {},
  methods: {
    openEditor() {
      this.$emit("displayEdit", true);
    },
  },
})
export default class AccountInformation extends Vue {}
</script>
<style scoped></style>
