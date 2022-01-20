<template>
  <v-card>
    <v-card>
      <div class="item">
        <div class="player">
          <video-player
            class="vjs-custom-skin"
            :options="playerOptions"
            @ready="playerReadied"
          >
          </video-player>
        </div>
      </div>
    </v-card>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import videojs from "video.js";
window.videojs = videojs;
require("videojs-contrib-hls/dist/videojs-contrib-hls.js");

@Component({
  components: { videoPlayer },
  data() {
    return {
      playerOptions: {
        height: "360",
        sources: [
          {
            withCredentials: false,
            type: "application/x-mpegURL",
            src: "http://localhost:5000/8.m3u8",
          },
        ],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg",
      },
    };
  },
  methods: {
    playerReadied(player) {
      var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls;
      player.tech_.hls.xhr.beforeRequest = function (options) {
        return options;
      };
    },
  },
})
export default class StreamPlayer extends Vue {}
</script>
<style scoped>
.vjs-custom-skin {
  background: black;
}
</style>
