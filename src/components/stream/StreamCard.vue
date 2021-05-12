<template>
  <div class="stream-card" @click="$router.push('/stream/' + model.id)">
    <v-card width="300px" height="300px">
      <v-card-title class="text-center"> {{ model.name }} </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align="center" justify="center"> </v-col>
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
export default class StreamCard extends Vue {
  @Prop({
    default: () => {
      new StreamModel();
    },
  })
  model!: StreamModel;
}
</script>
<style scoped>
.stream-card {
  margin: 50px auto auto;
}
</style>
