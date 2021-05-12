<template>
  <div class="stream-chat">
    <v-card style="background-color: #5eb5e0">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col align="center" justify="center">
              <div
                style="background-color: black; width: 100%; height: 800px"
              ></div>
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
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class StreamLive extends Vue {}
</script>
<style scoped></style>
