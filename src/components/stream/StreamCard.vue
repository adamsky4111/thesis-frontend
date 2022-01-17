<template>
  <v-card class="mx-auto my-12 card" max-width="374" min-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div class="text-right">
      <subscribe :channel="model.channel" @click="handleRefresh"></subscribe>
    </div>
    <v-img height="250" :src="'G'"></v-img>
    <v-card-title class="justify-center"
      ><span class="text-center">{{ model.name }}</span></v-card-title
    >
    <v-divider class="mx-4"></v-divider>
    <v-card-text class="justify-center">
      <v-chip-group
        active-class="deep-purple accent-4 white--text text-center"
        column
      >
        <v-chip class="tag" :key="tag" v-for="tag in tags">{{ tag }}</v-chip>
      </v-chip-group>
      <div class="my-4 text-subtitle-1">
        Oglądających: {{ model.watchersCount }}
      </div>
      <v-btn
        class="btn-stream"
        color="orange"
        rounded
        x-large
        v-on:click="goToStream"
      >
        Pokaż transmisję
      </v-btn>
      <v-divider class="mx-4"></v-divider>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { StreamModel } from "@/model/StreamModel";
import Subscribe from "@/components/common/Subscribe.vue";
import { ActionTypes } from "@/store/modules/stream/PublicTypes";

@Component({
  components: { Subscribe },
})
export default class StreamCard extends Vue {
  @Prop({
    default: () => {
      new StreamModel();
    },
  })
  model!: StreamModel;
  tags: Array<string> = ["Test", "Tag", "Todo"];

  goToStream(): void {
    this.$router.push("/stream/" + this.model.id);
  }

  handleRefresh(): void {
    this.$store.dispatch(ActionTypes.SEARCH);
  }
}
</script>
<style scoped lang="scss">
.stream-card {
  margin: 50px auto auto;
}
.theme--light {
  .card {
    background-color: #eeeeff !important;
  }

  .tag {
    background-color: #ccccff !important;
  }

  .btn-stream {
    background-color: #99ff99 !important;
  }
}
.theme--dark {
  .card {
    background-color: #220 !important;
  }

  .tag {
    background-color: #444400 !important;
  }

  .btn-stream {
    background-color: #660066 !important;
  }
}
</style>
