<template>
  <v-menu
    ref="menu"
    v-model="show"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="time"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
        :error="error"
      ></v-text-field>
    </template>
    <v-time-picker
      format="24hr"
      v-if="show"
      v-model="time"
      @change="sendData"
      full-width
      @click:minute="$refs.menu.save(time)"
    ></v-time-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TimeDialogPicker extends Vue {
  time = null;
  show = false;
  @Prop({ default: "" })
  label: string;
  @Prop({ default: false })
  error!: boolean;

  sendData(): void {
    const split = this.time.split(":");

    this.$emit("onChange", {
      hours: +split[0],
      minutes: +split[1],
      seconds: 0,
    });
  }
}
</script>
<style scoped></style>
