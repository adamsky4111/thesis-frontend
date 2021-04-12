<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ActionTypes } from "@/store/modules/auth/AuthStoreTypes";
@Component({
  components: {},
  mounted() {
    this.$store.dispatch(ActionTypes.LOGOUT);
    this.$router.push("/");
  },
})
export default class LogoutView extends Vue {}
</script>
