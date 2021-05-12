<template>
  <div>
    <v-dialog :key="channel" v-model="show" width="1000" overlay-color="blue">
      <v-card v-if="channel">
        <v-card-title class="text-center">
          {{
            $translation("account.channels.show.header", { name: channel.name })
          }}
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <account-channel-info :channel="channel" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container>
            <v-row>
              <v-col justify="center">
                <v-btn color="warning" dark @click="startTransmission">
                  {{ $translation("account.channels.add_transmission") }}
                </v-btn>
                <v-btn class="float-right" color="blue" dark @click="close">
                  {{ $translation("account.channels.show.close_channel") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { ChannelModel } from "@/model/ChannelModel";
import AccountChannelInfo from "@/components/user/account/AccountChannelInfo.vue";
import api from "@/api/user";

@Component({
  components: { LoadingSpin, AccountChannelInfo },
})
export default class AccountChannelShowView extends Vue {
  channel: ChannelModel | null = null;
  loading = false;
  show = false;

  mounted(): void {
    this.loading = true;
    api.ACCOUNT_CHANNELS.get(+this.$route.params.id).then((response) => {
      this.channel = response.data.channel;
      this.loading = false;
      this.show = true;
    });
  }

  startTransmission(): void {
    this.$router.push("/account/stream/start");
  }

  close(): void {
    this.show = false;
  }
}
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
