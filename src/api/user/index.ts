import security from "@/api/user/security";
import account from "@/api/user/account";
import settings from "@/api/user/settings";

const api = {
  SECURITY: security,
  ACCOUNT: account,
  ACCOUNT_SETTINGS: settings,
};

export default api;
