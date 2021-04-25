<template>
  <v-card max-width="900">
    <v-card-title> </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col class="text-right" cols="12">
            <v-btn color="green" dark @click="addSettings">
              {{ $translation("account.settings.create") }}
            </v-btn>
            <v-text-field
              class="search search-name"
              :label="$translation('account.settings.search.name')"
              required
              outlined
              dense
              v-model="filter.findBy.name"
              lazy-validation
              @input="applySearch"
            >
            </v-text-field>
            <v-text-field
              class="search search-min"
              :label="$translation('account.settings.search.min')"
              type="number"
              required
              outlined
              dense
              v-model="filter.findBy.ageAllowed.min"
              lazy-validation
              @input="applySearch"
            >
            </v-text-field>
            <v-text-field
              class="search search-max"
              :label="$translation('account.settings.search.max')"
              type="number"
              required
              outlined
              dense
              v-model="filter.findBy.ageAllowed.max"
              lazy-validation
              @input="applySearch"
            >
            </v-text-field>

            <v-checkbox
              class="search search-default"
              dense
              v-model="filter.findBy.isDefault"
              :label="$translation('account.settings.search.is_default')"
              @change="applySearch"
            ></v-checkbox>
          </v-col>
          <v-col cols="12" align="center" justify="center">
            <template>
              <div>
                <v-data-table
                  :headers="headers"
                  :items="settings"
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
                  <template v-slot:item.isDefault="{ item }">
                    <v-chip
                      class="ma-2"
                      :color="item.isDefault ? 'green' : 'yellow'"
                      small
                      :dark="item.isDefault"
                    >
                      {{
                        item.isDefault
                          ? $translation("app.yes")
                          : $translation("app.no")
                      }}
                    </v-chip>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <v-btn
                      class="mr-4"
                      color="blue"
                      dark
                      @click="updateSettings(item)"
                    >
                      {{ $translation("app.edit") }}
                    </v-btn>
                    <v-btn color="red" dark @click="deleteSettings(item)">
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
    <account-settings-form
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
import { SettingsFilter } from "@/model/Filter/Settings/SettingsFilter";
import {
  ActionTypes,
  GetterTypes,
} from "@/store/modules/account/AccountStoreTypes";
import AccountSettingsForm from "@/components/user/AccountSettingsForm.vue";
import api from "@/api/user";
import { SettingsModel } from "@/model/SettingsModel";
import { SortTypes } from "@/model/Filter/types";

@Component({
  components: { AccountSettingsForm },
  computed: {
    settings() {
      return this.$store.getters[GetterTypes.GET_SETTINGS];
    },
    total() {
      return this.$store.getters[GetterTypes.GET_TOTAL];
    },
    pages() {
      return this.$store.getters[GetterTypes.GET_PAGES];
    },
  },
})
export default class SettingsTable extends Vue {
  filter = new SettingsFilter();
  fetchTimeout: number | undefined;
  editableModel?: SettingsModel = new SettingsModel();
  editMode = false;
  options = {} as any;
  headers = [
    {
      text: this.$translation("account.settings.name"),
      value: "name",
    },

    {
      text: this.$translation("account.settings.age_allowed"),
      value: "ageAllowed",
    },

    {
      text: this.$translation("account.settings.is_default"),
      value: "isDefault",
    },

    {
      text: this.$translation("app.action"),
      value: "action",
    },
  ];
  openEdit = false;

  openModal(): void {
    this.openEdit = true;
  }
  closeModal(): void {
    this.openEdit = false;
    this.loadSettings();
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
    this.loadSettings();
  }

  paginationChange(pagination: Record<string, any>): void {
    this.filter.page = pagination.page;
    console.log(pagination);
    this.filter.perPage = pagination.itemsPerPage;
    this.loadSettings();
  }

  handleSortDirectionChange(value): void {
    console.log("sdf");
  }

  handleSortByChange(value): void {
    console.log(value);
  }

  addSettings(): void {
    this.editableModel = new SettingsModel();
    this.editMode = false;
    this.openModal();
  }

  async updateSettings(item: SettingsModel): Promise<void> {
    await api.ACCOUNT_SETTINGS.get(item.id as number).then((response) => {
      this.editableModel = new SettingsModel(response.data.settings);
    });
    this.editMode = true;
    this.openModal();
  }

  deleteSettings(item: any): void {
    api.ACCOUNT_SETTINGS.remove(item);
  }

  mounted(): void {
    this.loadSettings();
  }

  applySearch(): void {
    clearTimeout(this.fetchTimeout);
    this.fetchTimeout = setTimeout(async () => {
      await this.loadSettings();
    }, 500);
  }
  async loadSettings(): Promise<void> {
    console.log(this.filter);
    await this.$store.dispatch(ActionTypes.SEARCH, this.filter);
  }
}
</script>
<style scoped lang="scss">
.search {
  display: inline-block;
  margin-right: 15px;
  float: left;
  &-max,
  &-min {
    width: 60px;
  }
  &-name {
    width: 200px;
  }
  &-default {
    width: 200px;
    margin-top: 5px;
  }
}
</style>
