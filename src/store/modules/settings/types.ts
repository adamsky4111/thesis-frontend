export enum MutationTypes {
  SET_IS_MENU_ACTIVE = "SET_IS_MENU_ACTIVE",
}

export enum ActionTypes {
  TOGGLE_MENU = "TOGGLE_MENU",
}

export enum GetterTypes {
  IS_MENU_ACTIVE = "IS_MENU_ACTIVE",
}

export interface SettingsState {
  theme: string | null;
  isMenuActive: boolean;
}
