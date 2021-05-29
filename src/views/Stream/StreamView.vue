<template>
  <div style="margin: 40px; margin-right: 90px">
    <stream-panel :model="stream"></stream-panel>
  </div>
</template>

<script lang="ts">
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { StreamModel } from "@/model/StreamModel";
import StreamPanel from "@/components/stream/StreamPanel.vue";
import api from "@/api/user";

@Component({
  components: { StreamPanel, LoadingSpin },
})
export default class StreamView extends Vue {
  stream: StreamModel | null = null;
  loading = false;

  mounted(): void {
    this.loading = true;
    api.STREAM.get(+this.$route.params.id).then((response) => {
      this.stream = response.data.stream;
      this.loading = false;
    });
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
