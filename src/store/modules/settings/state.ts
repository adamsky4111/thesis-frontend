import { SettingsState } from "@/store/modules/settings/types";

export const state: SettingsState = {
  theme: null,
  isMenuActive: false,
};

export type State = typeof state;
