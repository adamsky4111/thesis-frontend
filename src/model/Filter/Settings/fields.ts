import {
  BooleanFilter,
  NumberFilter,
  PhraseFilter,
} from "@/model/Filter/types";

export enum SettingsFieldsEnum {
  DEFAULT = "isDefault",
  NAME = "name",
  AGE_ALLOWED = "ageAllowed",
}

export type SettingFields = {
  [SettingsFieldsEnum.AGE_ALLOWED]: NumberFilter;
  [SettingsFieldsEnum.DEFAULT]: BooleanFilter;
  [SettingsFieldsEnum.NAME]: PhraseFilter;
};
