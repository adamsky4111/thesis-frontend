<template>
  <div>
    <div :class="isMenuOpen ? 'wrapper' : 'wrapper wrapper--menu-open'">
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
import { GetterTypes } from "@/store/modules/settings/PublicTypes";

@Component({
  components: { StreamConfig, AccountMenu },
  methods: {},
  computed: {
    isMenuOpen() {
      return this.$store.getters[GetterTypes.IS_MENU_ACTIVE];
    },
  },
})
export default class LoggedLayout extends Vue {}
</script>
<style scoped></style>
