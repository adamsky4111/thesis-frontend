<template>
  <div class="stream-panel" v-if="model">
    <v-card style="background-color: lightblue">
      <v-card-title class="text-center stream-title">
        {{ model.name }}
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col cols="12" class="reset-bot-space">
                <stream-live :stream-id="model.id" />
              </v-col>
              <v-col cols="8" class="reset-top-space">
                <stream-description style="margin-top: 10px" :model="model" />
              </v-col>
              <v-col cols="4" class="reset-top-space reset-left-space">
                <stream-channel-description
                  style="margin-top: 10px"
                  :model="model.channel"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <stream-chat :stream-id="model.id" />
          </v-col>
        </v-row>
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
import { StreamModel } from "@/model/StreamModel";
import StreamChat from "@/components/stream/StreamChat.vue";
import StreamLive from "@/components/stream/StreamLive.vue";
import StreamChannelDescription from "@/components/stream/StreamChannelDescription.vue";
import StreamDescription from "@/components/stream/StreamDescription.vue";

@Component({
  components: {
    StreamChannelDescription,
    StreamLive,
    StreamChat,
    StreamDescription,
  },
})
export default class StreamPanel extends Vue {
  @Prop({
    default: () => {
      new StreamModel();
    },
  })
  model!: StreamModel;
}
</script>
<style scoped lang="scss">
.stream {
  &-card {
    margin: 50px auto auto;
  }
  &-title {
    font-size: 38px;
    font-weight: bold;
    padding: 25px;
  }
}
</style>
