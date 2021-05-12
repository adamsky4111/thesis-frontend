<template>
  <div class="stream-chat" v-if="model">
    <v-card style="background-color: #5eb5e0">
      <v-card-title class="text-center">
        {{ $translation("stream.channel.description") }}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" align="center" justify="center">
              <div class="text-left font-weight-bold">
                {{ $translation("stream.channel.name") }} {{ model.name }}
              </div>
            </v-col>
            <v-col cols="12"> <v-divider /> </v-col>
            <v-col cols="12">
              <div v-html="model.description" />
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
import { ChannelModel } from "@/model/ChannelModel";

@Component({})
export default class StreamChannelDescription extends Vue {
  @Prop({
    default: () => {
      new ChannelModel();
    },
  })
  model!: ChannelModel;
}
</script>
<style scoped></style>
