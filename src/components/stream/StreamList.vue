<template>
  <v-card>
    <v-card-title class="text-center"></v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <stream-card :model="item" v-for="item in items" :key="item.id" />
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-container>
        <v-row>
          <v-col align="center" justify="center"> </v-col>
        </v-row>
      </v-container>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import StreamCard from "@/components/stream/StreamCard.vue";
import { ActionTypes, GetterTypes } from "@/store/modules/stream/PublicTypes";
import { SearchFilter } from "@/model/Filter/Search/SearchFilter";

@Component({
  components: {
    StreamCard,
  },
  computed: {
    items() {
      return this.$store.getters[GetterTypes.GET_ITEMS];
    },
  },
})
export default class StreamList extends Vue {
  searchFilter = new SearchFilter();

  mounted(): void {
    console.log("stream-list");
    this.searchFilter.paginated = false;
    this.$store.dispatch(ActionTypes.SEARCH, this.searchFilter);
  }
}
</script>
<style scoped>
.stream-card {
  margin: 50px auto auto;
}
.stream-list {
}
</style>
