<template>
  <v-menu
    ref="menu"
    v-model="show"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="attrs"
        v-on="on"
        :error="error"
      ></v-text-field>
    </template>
    <v-date-picker v-if="show" v-model="date" @change="sendData" full-width>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class DateDialogPicker extends Vue {
  date = new Date().toISOString().substr(0, 10);
  show = false;
  @Prop({ default: "" })
  label: string | undefined;
  @Prop({ default: false })
  error!: boolean;
  sendData(): void {
    this.$emit("onChange", this.date);
  }
}
</script>
<style scoped></style>
