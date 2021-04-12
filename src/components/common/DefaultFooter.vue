<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>{{ $translation("nav.title") }}</strong>
      </v-col>
    </v-row>
  </v-footer>
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
  data: () => ({
    links: ["Home", "About Us", "Team", "Blog", "Contact Us"],
  }),
})
export default class DefaultFooter extends Vue {}
</script>
<style scoped></style>
