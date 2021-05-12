<template>
  <v-card max-width="500">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col align="center" justify="center">
            <div v-if="loading" class="text-center">
              <loading-spin :display="loading" />
            </div>
            <div v-if="!loading">
              <div v-if="verifyResult">
                {{ $translation("user.verify.success") }}
                <a @click="login">{{
                  $translation("user.verify.success_link")
                }}</a>
              </div>
              <div v-else>{{ $translation("user.verify.fail") }}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { MutationTypes } from "@/store/modules/auth/AuthStoreTypes";
import security from "@/api/user/security";
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";

export default Vue.extend({
  components: { LoadingSpin },
  data: () => ({
    loading: true,
    verifyResult: false,
  }),
  mounted() {
    const token = String(this.$route.query.token);
    const email = String(this.$route.query.email);
    console.log(token, email);
    this.$store.commit(MutationTypes.SET_TOKEN, null);
    this.verify(token, email);
  },
  methods: {
    async verify(token: string, email: string) {
      const response = await security.verify({ token, email });
      this.verifyResult = !!response;
      this.loading = false;
      // this.verifyResult = true;
    },
    login() {
      this.$router.push("/login");
    },
  },
});
</script>
<style scoped>
.v-text-field {
  width: 400px;
}
</style>
