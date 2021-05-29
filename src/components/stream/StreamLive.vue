<template>
  <div class="stream-chat">
    <v-card style="background-color: #5eb5e0">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align="center" justify="center">
              <stream-player :stream-id="streamId" />
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
import { Component, Prop, Vue } from "vue-property-decorator";
import StreamPlayer from "@/components/stream/StreamPlayer.vue";

@Component({
  components: { StreamPlayer },
})
export default class StreamLive extends Vue {
  @Prop({
    default: -1,
  })
  streamId!: number;
}
</script>
<style scoped></style>
