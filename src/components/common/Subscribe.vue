<template>
  <v-btn v-if="isLogged && channel" @click="handleClick" :disabled="disabled">{{
    channel.subscribed
      ? $translation("channel.unsubscribe")
      : $translation("channel.subscribe")
  }}</v-btn>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Component, Prop, Vue } from "vue-property-decorator";
import { ChannelModel } from "@/model/ChannelModel";
import { ActionTypes } from "@/store/modules/account/AccountStoreTypes";
import { GetterTypes as AuthGetterTypes } from "@/store/modules/auth/AuthStoreTypes";

@Component({
  methods: {
    async handleClick() {
      this.disabled = true;
      this.channel.subscribed
        ? await this.$store.dispatch(
            ActionTypes.UNSUBSCRIBE_CHANNEL,
            this.channel
          )
        : await this.$store.dispatch(
            ActionTypes.SUBSCRIBE_CHANNEL,
            this.channel
          );
      this.$emit("click");
      this.disabled = false;
    },
  },
  computed: {
    isLogged() {
      return this.$store.getters[AuthGetterTypes.IS_LOGGED];
    },
  },
})
export default class Subscribe extends Vue {
  @Prop({
    default: () => {
      new ChannelModel();
    },
  })
  channel!: ChannelModel;
  disabled = false;
}
</script>
<style scoped></style>
