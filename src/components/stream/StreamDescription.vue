<template>
  <div class="stream-chat" v-if="model">
    <v-card>
      <v-card-title class="text-center">
        {{ $translation("stream.description") }}
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align="center" justify="center">
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
import { StreamModel } from "@/model/StreamModel";

@Component({})
export default class StreamDescription extends Vue {
  @Prop({
    default: () => {
      new StreamModel();
    },
  })
  model!: StreamModel;
}
</script>
<style scoped></style>
