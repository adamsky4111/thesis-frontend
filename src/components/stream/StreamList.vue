<template>
  <v-card>
    <v-card-title class="text-center"></v-card-title>
    <v-card-text>
      <v-container>
        <v-row v-if="items.length > 0">
          <stream-card :model="item" v-for="item in items" :key="item.id" />
        </v-row>
        <v-row v-else>
          <v-col> <h2>Aktualnie brak transmisji :(</h2></v-col>
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
  mounted(): void {
    this.$store.dispatch(ActionTypes.SEARCH);
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
