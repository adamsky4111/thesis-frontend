<template>
  <v-dialog v-model="display" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        Please stand by
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
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
export default class LoadingBar extends Vue {}
</script>
<style scoped></style>
