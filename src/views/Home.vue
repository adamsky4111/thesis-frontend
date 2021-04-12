<template>
  <div class="home">
    <account-menu />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AccountMenu from "@/components/user/AccountMenu.vue";
@Component({
  components: { AccountMenu },
})
export default class Home extends Vue {}
</script>
