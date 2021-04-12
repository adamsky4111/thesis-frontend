<template>
  <div>
    <div class="wrapper">
      <account-menu />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";

@Component({
  components: { AccountMenu },
  methods: {},
})
export default class LoggedLayout extends Vue {}
</script>
<style scoped></style>
