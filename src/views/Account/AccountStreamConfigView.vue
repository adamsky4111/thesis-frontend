<template>
  <div>
    <v-row>
      <v-col align="center" class="account-stream">
        <div class="account-stream-form">
          <account-stream-form />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import LoadingSpin from "@/components/common/LoadingSpin.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AccountStreamForm from "@/components/user/account/AccountStreamForm.vue";
import { StreamModel } from "@/model/StreamModel";

@Component({
  components: { LoadingSpin, AccountStreamForm },
})
export default class AccountChannelShowView extends Vue {
  stream: StreamModel | null = null;
  loading = false;
  show = false;

  mounted(): void {
    this.loading = true;
    this.loading = false;
    this.show = true;
  }

  startTransmission(): void {
    console.log("TODO: Start transmission");
  }

  close(): void {
    this.show = false;
  }
}
</script>
<style scoped lang="scss">
.v-text-field {
  width: 400px;
}

.account-stream {
  margin: 100px;
}
.account-stream-form {
  width: 700px;
}
</style>
