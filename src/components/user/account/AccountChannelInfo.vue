<template>
  <div>
    <div class="channel-section">
      <h3>{{ $translation("account.channels.show.base_info") }}</h3>
      <v-divider> </v-divider>
      <div class="channel-row">
        <span>{{ $translation("account.channels.name") }} : </span>
        <span>{{ this.channel.name }}</span>
      </div>
      <v-divider> </v-divider>
      <div class="channel-row">
        <span> {{ $translation("account.channels.is_default") }} : </span>
        <span>
          <v-chip
            class="ma-2"
            :color="channel.default ? 'green' : 'yellow'"
            small
            :dark="channel.default"
          >
            {{
              channel.default ? $translation("app.yes") : $translation("app.no")
            }}
          </v-chip>
        </span>
      </div>
      <v-divider> </v-divider>
      <div class="channel-row">
        <span>{{ $translation("account.channels.show.like_users") }} : </span>
        <span>0</span>
      </div>
      <v-divider> </v-divider>
      <div class="channel-row">
        <span
          >{{ $translation("account.channels.show.next_broadcast") }} :
        </span>
        <span>{{
          $translation("account.channels.show.no_next_broadcast")
        }}</span>
      </div>
    </div>
    <div>
      <h3>{{ $translation("account.channels.show.setting_info") }}</h3>
      <v-divider> </v-divider>
      <div class="channel-row">
        <span>{{ $translation("account.settings.age_allowed") }} : </span>
        <span>{{ channel.settings.ageAllowed }}</span>
      </div>
      <v-divider> </v-divider>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ChannelModel } from "@/model/ChannelModel";

@Component({
  components: { LoadingSpin },
})
export default class AccountChannelInfo extends Vue {
  @Prop({ default: null })
  channel: ChannelModel | null;
}
</script>
<style scoped lang="scss">
.channel {
  &-section {
    margin-top: 15px;
    margin-bottom: 20px;
  }

  &-row {
    height: 50px;
    display: flex;
    align-items: center;
  }
}
</style>
