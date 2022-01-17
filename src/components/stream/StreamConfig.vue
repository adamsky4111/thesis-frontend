<template>
  <v-card max-width="900">
    <v-card-title>
      <div>Najbliższa transmisja</div>
    </v-card-title>
    <v-card-text>
      <v-container>
        <div class="text-center countdown" v-if="latestStream">
          {{
            `${
              isStreamStarted
                ? "Transmisja rozpoczęła się"
                : "Transmisja odbywa się za: "
            } ${formatted} ${isStreamStarted ? "temu" : ""}`
          }}
        </div>
        <span v-else>Brak planów</span>
        <div v-if="streamLength" class="stream-length">
          {{ "Zaplanowany czas trwania: " + streamLength }}
        </div>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <div class="web-camera-container">
              <div class="camera-button">
                <v-btn @click="toggleCamera">
                  {{
                    isCameraOpen ? "Wyłącz transmisję" : "Uruchom transmisję"
                  }}</v-btn
                >
              </div>
              <div v-show="isCameraOpen && isLoading" class="camera-loading">
                <ul class="loader-circle">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box">
                <div class="camera-shutter"></div>
                <video
                  id="camera"
                  ref="camera"
                  :width="450"
                  :height="337.5"
                  autoplay
                ></video>

                <canvas
                  id="canvas"
                  ref="canvas"
                  :width="450"
                  :height="337.5"
                ></canvas>
              </div>
              <video id="video2"></video>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GetterTypes } from "@/store/modules/accountStreams/PublicTypes";
import { GetterTypes as AuthGetterTypes } from "@/store/modules/auth/AuthStoreTypes";
import moment from "moment/moment";

@Component({
  computed: {
    schedule() {
      return this.$store.getters[GetterTypes.GET_SCHEDULED];
    },
    latestStream() {
      if (Array.isArray(this.schedule) && this.schedule.length > 0) {
        console.log(this.schedule[0]);
        return this.schedule[0];
      }

      return null;
    },
    diffTime() {
      if (this.latestStream) {
        return new Date(this.latestStream.stream.startingAt) - new Date();
      }

      return "";
    },
    streamLength() {
      if (!this.latestStream) {
        return "";
      }
      const duration = moment.duration(
        new Date(this.latestStream.stream.endingAt) -
          new Date(this.latestStream.stream.startingAt),
        "milliseconds"
      );

      return this.formatDate(duration);
    },
    isStreamStarted() {
      return new Date(this.latestStream.stream.startingAt) - new Date() <= 0;
    },
  },
  data() {
    return {
      duration: moment.duration(this.diffTime * 1000, "miliseconds"),
      interval: 1000,
      intervalObj: null,
      formatted: null,
    };
  },
  mounted() {
    const fn = () => {
      if (!this.latestStream) {
        return;
      }
      this.duration = moment.duration(
        new Date(this.latestStream.stream.startingAt) - new Date(),
        "milliseconds"
      );
      this.formatted = this.formatDate(this.duration);
    };
    fn();
    setInterval(fn, this.interval);
  },
  methods: {
    formatDate(date) {
      return (
        ("" + Math.abs(date.days())).slice(-2) +
        (date.days() > 1 ? " dni " : " dzień ") +
        ("0" + Math.abs(date.hours())).slice(-2) +
        ":" +
        ("0" + Math.abs(date.minutes())).slice(-2) +
        ":" +
        ("0" + Math.abs(date.seconds())).slice(-2)
      );
    },
  },
})
export default class StreamConfig extends Vue {
  @Prop({
    default: -1,
  })
  streamId!: number;
  mini = true;
  drawer = true;
  isCameraOpen = false;
  isLoading = false;
  socket: WebSocket | null = null;
  link = "#";

  toggleCamera(): void {
    if (this.isCameraOpen) {
      this.isCameraOpen = false;
      this.stopCameraStream();
    } else {
      this.isCameraOpen = true;
      this.socket = new WebSocket("ws://localhost:9090");
      const socket = this.socket;
      const token = this.$store.getters[AuthGetterTypes.GET_TOKEN];
      this.socket.addEventListener("open", () => {
        socket.send(
          JSON.stringify({
            streamId: this.latestStream.stream.id,
            jwt: token,
          })
        );
        socket.send(
          JSON.stringify({
            streamId: this.latestStream.stream.id,
            jwt: token,
            event: "start_stream",
          })
        );
      });
      this.createCameraElement();
    }
  }

  createCameraElement(): void {
    this.isLoading = true;

    const constraints = (window.constraints = {
      audio: false,
      video: true,
    });
    const socket = this.socket;
    const token = this.$store.getters[AuthGetterTypes.GET_TOKEN];
    const id = this.latestStream.stream.id;
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        this.isLoading = false;
        this.$refs.camera.srcObject = stream;
        var mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.onstart = function (e) {
          this.chunks = [];
        };
        mediaRecorder.ondataavailable = function (e) {
          this.chunks.push(e.data);
        };
        mediaRecorder.onstop = async function (e) {
          const blob = new Blob(this.chunks, {
            type: "video/mp4;",
          });
          const video2 = document.getElementById("video2");
          video2.src = window.URL.createObjectURL(blob);
          video2.load();
          video2.onloadeddata = function () {
            video2.play();
          };
          const form = new FormData();
          form.append("file", blob);
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            var base64data = reader.result;
            socket.send(
              JSON.stringify({
                streamId: id,
                jwt: token,
                event: "chunk",
                file: base64data,
              })
            );
          };
        };
        mediaRecorder.start();
        setInterval(function () {
          mediaRecorder.stop();
          mediaRecorder.start();
        }, 2000);
      })
      .catch(() => {
        this.isLoading = false;
        alert("Error");
      });
  }

  stopCameraStream(): void {
    let tracks = this.$refs.camera.srcObject.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  }

  videoStream(): void {
    let canvas = this.$refs.canvas;
    let camera = this.$refs.camera;
  }

  downloadImage(): void {
    const download = document.getElementById("downloadPhoto");
    const canvas = document
      .getElementById("photoTaken")
      .toDataURL("image/jpeg")
      .replace("image/jpeg", "image/octet-stream");
    download.setAttribute("href", canvas);
  }
}
</script>
<style scoped lang="scss">
body {
  display: flex;
  justify-content: center;
}

.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;

  .camera-button {
    margin-bottom: 2rem;
  }

  .camera-box {
    .camera-shutter {
      opacity: 0;
      width: 450px;
      height: 337.5px;
      background-color: #fff;
      position: absolute;

      &.flash {
        opacity: 1;
      }
    }
  }

  .camera-shoot {
    margin: 1rem 0;

    button {
      height: 60px;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;

      img {
        height: 35px;
        object-fit: cover;
      }
    }
  }

  .camera-loading {
    overflow: hidden;
    height: 100%;
    position: absolute;
    width: 100%;
    min-height: 150px;
    margin: 3rem 0 0 -1.2rem;

    ul {
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: 999999;
      margin: 0;
    }

    .loader-circle {
      display: block;
      height: 14px;
      margin: 0 auto;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      transform: translateX(-50%);
      position: absolute;
      width: 100%;
      padding: 0;

      li {
        display: block;
        float: left;
        width: 10px;
        height: 10px;
        line-height: 10px;
        padding: 0;
        position: relative;
        margin: 0 0 0 4px;
        background: #999;
        animation: preload 1s infinite;
        top: -50%;
        border-radius: 100%;

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }
      }
    }
  }

  @keyframes preload {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
}
.countdown {
  font-size: 2.2rem;
  line-height: 2.2rem;
}
.stream-length {
  font-size: 1.4rem;
}
</style>
