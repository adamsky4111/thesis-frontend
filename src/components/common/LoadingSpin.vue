<template>
  <v-dialog v-model="display" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text align="center" justify="center">
        <v-container fill-height>
          <v-row justify="center" align="center">
            <v-col cols="12" sm="4">
              <v-progress-circular
                :size="70"
                :width="7"
                color="purple"
                indeterminate
              ></v-progress-circular>
            </v-col>
            <v-col cols="12">
              {{ $translation("app.loading") }}
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    display: {
      type: Boolean,
      default: false,
    },
  },
})
export default class LoadingSpin extends Vue {}
</script>
<style scoped></style>
