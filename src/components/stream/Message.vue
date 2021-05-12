<template>
  <div
    :class="owner ? 'stream-message stream-message-owner' : 'stream-message'"
    style="border-radius: 15px; padding: 5px; padding-left: 10px"
  >
    <v-avatar size="22">
      <img :src="message.avatar || ''" alt="" />
    </v-avatar>

    <span style="border-radius: 15px; font-weight: bold">
      {{ message.nick }}</span
    >

    <span style="font-size: 80%"> {{ "@" + message.username }} </span
    ><span style="font-weight: bold">:: </span>
    <span> {{ " " + message.text }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { MessageModel } from "@/model/MessageModel";

@Component({})
export default class Message extends Vue {
  @Prop({
    default: () => {
      new MessageModel();
    },
  })
  message!: MessageModel;
  @Prop({
    default: false,
  })
  owner!: boolean;
}
</script>
<style scoped lang="scss">
.stream-card {
  margin: 50px auto auto;
}

.stream-message {
  text-align: left;
  &-owner {
    color: red;
  }
}
</style>
