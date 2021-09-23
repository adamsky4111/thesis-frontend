<template>
  <div>
    <div class="wrapper">
      <account-menu />
      <!--      <stream-config :stream-id="8" />-->
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
import StreamConfig from "@/components/stream/StreamConfig.vue";

@Component({
  components: { StreamConfig, AccountMenu },
  methods: {},
})
export default class LoggedLayout extends Vue {}
</script>
<style scoped></style>
