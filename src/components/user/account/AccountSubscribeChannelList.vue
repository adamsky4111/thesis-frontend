<template>
  <v-card max-width="900">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="text-right" cols="12">
            <v-simple-table v-if="total > 0">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      {{ $translation("account.channels.favorite.name") }}
                    </th>
                    <th class="text-left">
                      {{
                        $translation("account.channels.favorite.subscribe_from")
                      }}
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.name">
                    <td class="text-left">{{ item.channel.name }}</td>
                    <td class="text-left">
                      {{
                        new Date(item.createdAt)
                          | moment("dddd, MMMM Do YYYY, h:mm:ss")
                      }}
                    </td>
                    <td>
                      <subscribe
                        @click="fetchList"
                        :channel="item.channel"
                      ></subscribe>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-alert v-else dense type="info">
              {{ $translation("account.channels.favorite.no_subs") }}
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col cols="12" align="center" justify="center"> </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  ActionTypes,
  GetterTypes,
} from "@/store/modules/accountChannels/PublicTypes";
import AccountChannelForm from "@/components/user/account/AccountChannelForm.vue";
import Subscribe from "@/components/common/Subscribe.vue";

@Component({
  components: { Subscribe, AccountChannelForm },
  computed: {
    data() {
      return this.$store.getters[GetterTypes.GET_SUBSCRIBED_ITEMS];
    },
    total() {
      return this.$store.getters[GetterTypes.GET_SUBSCRIBED_TOTAL];
    },
    pages() {
      return this.$store.getters[GetterTypes.GET_SUBSCRIBED_PAGES];
    },
    loading() {
      return this.$store.getters[GetterTypes.GET_SUBSCRIBED_IS_LOADING];
    },
  },
  async mounted() {
    await this.$store.dispatch(ActionTypes.FETCH_SUBSCRIBED);
    console.log(this.$store.getters[GetterTypes.GET_SUBSCRIBED_TOTAL]);
  },
  methods: {
    fetchList() {
      this.$store.dispatch(ActionTypes.FETCH_SUBSCRIBED);
    },
  },
})
export default class ChannelList extends Vue {}
</script>
<style scoped lang="scss"></style>
