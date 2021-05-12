<template>
  <div class="stream-chat">
    <v-card style="background-color: #5eb5e0">
      <v-card-title class="text-center">
        {{ $translation("stream.chat") }}
      </v-card-title>
      <v-card-text>
        <v-container class="stream-chat">
          <v-row>
            <v-col cols="12" align="center" justify="center">
              <message
                :owner="message.owner"
                v-for="message in data.messages"
                :message="message"
                :key="message.id"
              ></message>
            </v-col>
            <v-col cols="12">
              <v-divider />
            </v-col>
            <v-col cols="12" class="sender-new-message">
              <div class="sender-new-message-input">
                <v-text-field
                  class="my-text-style"
                  outlined
                  dense
                  v-model="text"
                  :disabled="!isLogged"
                >
                </v-text-field>
              </div>
              <v-btn
                :disabled="!isLogged"
                @click="sendMessage"
                class="sender-new-message-button"
                >{{ $translation("chat.send") }}</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Message from "@/components/stream/Message.vue";
import { MessageModel } from "@/model/MessageModel";
import api from "@/api/user";
import { GetterTypes } from "@/store/modules/auth/AuthStoreTypes";

@Component({
  components: { Message },
  computed: {
    isLogged(): boolean {
      return this.$store.getters[GetterTypes.IS_LOGGED];
    },
  },
})
export default class StreamChat extends Vue {
  data: { messages: Array<any> } = { messages: [] };
  @Prop({
    default: -1,
  })
  streamId!: number;
  text = "";

  mounted(): void {
    this.loadChat();
    window.setInterval(() => {
      this.loadChat();
    }, 2000);
  }

  sendMessage(): void {
    const message = new MessageModel();
    message.text = this.text;
    api.CHAT.addMessage(message, this.streamId).then((response) => {
      this.text = "";
      this.loadChat();
    });
  }

  loadChat(): void {
    api.CHAT.getChat(this.streamId).then((response) => {
      this.data.messages = response.data.chat.messages.map((item) => {
        console.log(item);
        return new MessageModel(item);
      });
      console.log(this.data.messages);
    });
  }
}
</script>
<style scoped lang="scss">
.stream {
  &-chat {
    background-color: lightblue;
  }
  &-new-message {
    margin-top: 15px;
    width: 80%;
    float: left;
  }
}
.sender {
  &-new-message {
    &-input {
      float: left;
      display: inline-block;
      width: 60%;
    }
    &-button {
      float: left;
      display: inline-block;
      width: 20%;
      border-radius: 0 20px 20px 0;
    }
  }
}

.v-text-field--outlined {
  background-color: white;
  height: 36px;
}
</style>
