<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="options"
  ></vue-dropzone>
</template>

<script lang="ts">
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { vueDropzone: vue2Dropzone },
  props: {
    options: {
      type: Object,
      default: {
        url: process.env.VUE_APP_API_URL + "/api/account/media",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "Content-Type": "application/json" },
      },
    },
  },
})
export default class Dropzone extends Vue {}
</script>
<style scoped></style>
