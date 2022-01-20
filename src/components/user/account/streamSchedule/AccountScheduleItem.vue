<template>
  <div>
    {{ model.id }}
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { StreamScheduleModel } from "@/model/StreamScheduleModel";

@Component({})
export default class AccountScheduleItem extends Vue {
  @Prop({
    default: () => {
      new StreamScheduleModel();
    },
  })
  model!: StreamScheduleModel;
}
</script>
<style scoped></style>
