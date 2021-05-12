import security from "@/api/user/security";
import account from "@/api/user/account";
import settings from "@/api/user/settings";
import accountChannels from "@/api/user/accountChannels";
import accountStream from "@/api/user/accountStream";
import stream from "@/api/user/stream";
import chat from "@/api/user/chat";

const api = {
  SECURITY: security,
  ACCOUNT: account,
  ACCOUNT_SETTINGS: settings,
  ACCOUNT_CHANNELS: accountChannels,
  ACCOUNT_STREAM: accountStream,
  STREAM: stream,
  CHAT: chat,
};

export default api;
