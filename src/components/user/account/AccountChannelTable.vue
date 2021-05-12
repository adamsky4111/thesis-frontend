<template>
  <v-card max-width="900">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="text-right" cols="12">
            <v-btn color="green" dark @click="create">
              {{ $translation("account.channels.create") }}
            </v-btn>
            <v-text-field
              class="search search-name"
              :label="$translation('account.channels.search.name')"
              required
              outlined
              dense
              v-model="filter.findBy.name"
              lazy-validation
              @input="applySearch"
            >
            </v-text-field>

            <v-checkbox
              class="search search-default"
              dense
              v-model="filter.findBy.default"
              :label="$translation('account.channels.search.is_default')"
              @change="applySearch"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" align="center" justify="center">
            <template>
              <div>
                <v-data-table
                  :headers="headers"
                  :items="data"
                  :server-items-length="total"
                  :page="filter.page"
                  :items-per-page="filter.perPage"
                  :options.sync="options"
                  item-key="id"
                  multi-sort
                  class="elevation-1"
                  :footer-props="{
                    itemsPerPageText: $translation('app.rows_per_page'),
                  }"
                  @pagination="applyDatatableChange"
                  @update:sort-desc="applyDatatableChange"
                  @update:sort-by="applyDatatableChange"
                >
                  <template v-slot:item.default="{ item }">
                    <v-chip
                      class="ma-2"
                      :color="item.default ? 'green' : 'yellow'"
                      small
                      :dark="item.default"
                    >
                      {{
                        item.default
                          ? $translation("app.yes")
                          : $translation("app.no")
                      }}
                    </v-chip>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <v-btn
                      class="mr-4"
                      color="green"
                      dark
                      @click="openShow(item)"
                    >
                      {{ $translation("app.show") }}
                    </v-btn>
                    <v-btn class="mr-4" color="blue" dark @click="update(item)">
                      {{ $translation("app.edit") }}
                    </v-btn>
                    <v-btn color="red" dark @click="remove(item)">
                      {{ $translation("app.delete") }}
                    </v-btn>
                  </template>
                </v-data-table>
              </div>
            </template>
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
    <account-channel-form
      v-model="openEdit"
      :display="openEdit"
      :edit-mode="editMode"
      :model="editableModel"
      @refresh="closeModal"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  ActionTypes,
  GetterTypes,
} from "@/store/modules/accountChannels/PublicTypes";
import AccountChannelForm from "@/components/user/account/AccountChannelForm.vue";
import api from "@/api/user";
import { SortTypes } from "@/model/Filter/types";
import { AccountChannelsFilter } from "@/model/Filter/AccountChannels/AccountChannelsFilter";
import { ChannelModel } from "@/model/ChannelModel";

@Component({
  components: { AccountChannelForm },
  computed: {
    data() {
      return this.$store.getters[GetterTypes.GET_ITEMS];
    },
    total() {
      return this.$store.getters[GetterTypes.GET_TOTAL];
    },
    pages() {
      return this.$store.getters[GetterTypes.GET_PAGES];
    },
  },
})
export default class AccountChannelTable extends Vue {
  filter = new AccountChannelsFilter();
  fetchTimeout: number | undefined;
  editableModel?: ChannelModel = new ChannelModel();
  editMode = false;
  options = {} as any;
  headers = [
    {
      text: this.$translation("account.channels.name"),
      value: "name",
    },

    {
      text: this.$translation("account.channels.is_default"),
      value: "default",
    },

    {
      text: this.$translation("account.channels.description"),
      value: "description",
    },

    {
      text: this.$translation("app.action"),
      value: "action",
    },
  ];
  openEdit = false;
  show = false;
  showId = -1;

  mounted(): void {
    this.load();
  }

  openModal(): void {
    this.openEdit = true;
  }
  closeModal(): void {
    this.openEdit = false;
    this.load();
  }

  openShow(item: ChannelModel) {
    this.$router.push(`/account/channels/${item.id}`);
  }

  applyDatatableChange(): void {
    const { sortBy, sortDesc, page, itemsPerPage } = this.options;
    this.filter.page = page;
    this.filter.perPage = itemsPerPage;
    this.filter.initSorters();
    sortBy.forEach((field, index) => {
      const direction =
        sortDesc[index] === true ? SortTypes.ASC : SortTypes.DESC;
      this.filter.addSorter(field, direction);
    });
    this.load();
  }

  create(): void {
    this.editableModel = new ChannelModel();
    this.editMode = false;
    this.openModal();
  }

  async update(item: ChannelModel): Promise<void> {
    await api.ACCOUNT_CHANNELS.get(item.id as number).then((response) => {
      this.editableModel = new ChannelModel(response.data.channel);
    });
    this.editMode = true;
    this.openModal();
  }

  async remove(item: any): void {
    await this.$store.dispatch(ActionTypes.REMOVE, item);
    await this.load();
  }

  applySearch(): void {
    clearTimeout(this.fetchTimeout);
    this.fetchTimeout = setTimeout(async () => {
      await this.load();
    }, 500);
  }
  async load(): Promise<void> {
    await this.$store.dispatch(ActionTypes.SEARCH, this.filter);
  }
}
</script>
<style scoped lang="scss">
.search {
  display: inline-block;
  margin-right: 15px;
  float: left;
  &-name {
    width: 200px;
  }
  &-default {
    width: 200px;
    margin-top: 5px;
  }
}
</style>
