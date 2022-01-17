<template>
  <v-card max-width="900">
    <v-card-title>Zakolejkowane transmisje</v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" align="center" justify="center">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Nazwa</th>
                    <th class="text-left">Data rozpoczęcia</th>
                    <th class="text-left">Data zakończenia</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data" :key="item.id">
                    <td>{{ item.stream.name }}</td>
                    <td>
                      {{
                        new Date(item.stream.startingAt)
                          | moment("dddd, MMMM Do YYYY, h:mm:ss")
                      }}
                    </td>
                    <td>
                      {{
                        new Date(item.stream.endingAt)
                          | moment("dddd, MMMM Do YYYY, h:mm:ss")
                      }}
                    </td>
                    <td>
                      <v-icon dark right> mdi-delete </v-icon>
                      <v-icon dark right> mdi-wrench </v-icon>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
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
} from "@/store/modules/accountStreams/PublicTypes";
import AccountScheduleItem from "@/components/user/account/streamSchedule/AccountScheduleItem.vue";

@Component({
  components: { AccountScheduleItem },
  computed: {
    data() {
      return this.$store.getters[GetterTypes.GET_SCHEDULED];
    },
  },
})
export default class AccountScheduleTable extends Vue {
  mounted(): void {
    this.load();
  }

  async load(): Promise<void> {
    await this.$store.dispatch(ActionTypes.SCHEDULED);
  }
}
</script>
<style scoped lang="scss"></style>
