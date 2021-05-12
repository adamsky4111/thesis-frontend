import { SettingsModel } from "@/model/SettingsModel";
import { SettingsState } from "@/store/modules/account/types";

export const state: SettingsState = {
  settings: new Array<SettingsModel>(),
  pages: 1,
  total: 0,
};

export type State = typeof state;
