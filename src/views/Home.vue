<template>
  <div class="home">
    <v-row>
      <v-col align="center" class="">
        <div class="stream-list page-wrapper">
          <stream-list />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StreamList from "@/components/stream/StreamList.vue";
@Component({
  components: { StreamList },
})
export default class Home extends Vue {}
</script>
<style scoped lang="scss">
.stream-list {
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 400px;
}
</style>
