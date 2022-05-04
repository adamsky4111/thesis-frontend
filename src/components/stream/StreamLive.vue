<template>
  <div class="stream-chat">
    <v-card>
      <v-card-text>
        <v-container>
          <v-row class="player-wrapper">
            <v-col align="center" justify="center">
              <video class="player" height="400px" id="video2"></video>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-col align="center" justify="center"> </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Component, Prop, Vue } from "vue-property-decorator";
import StreamPlayer from "@/components/stream/StreamPlayer.vue";
import { ActionTypes } from "@/store/modules/socket/PublicTypes";

@Component({
  components: { StreamPlayer },
  mounted(): void {
    const handler = async (data) => {
      const base64Response = await fetch(data.chunk);
      const blob = await base64Response.blob();
      const video2 = document.getElementById("video2");
      if (!video2) {
        return;
      }
      video2.src = window.URL.createObjectURL(blob);
      video2.load();
      video2.onloadeddata = function () {
        video2.play();
      };
    };
    this.$store.dispatch(ActionTypes.HANDLE_EVENT, {
      event: "chunk",
      callback: handler,
    });
  },
})
export default class StreamLive extends Vue {
  @Prop({
    default: -1,
  })
  streamId!: number;
}
</script>
<style scoped>
.player-wrapper {
  background-color: black;
}
</style>
