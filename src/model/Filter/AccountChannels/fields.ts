import { BooleanFilter, PhraseFilter } from "@/model/Filter/types";

export enum AccountChannelFieldsEnum {
  DEFAULT = "default",
  NAME = "name",
}

export type AccountChannelFields = {
  [AccountChannelFieldsEnum.DEFAULT]: BooleanFilter;
  [AccountChannelFieldsEnum.NAME]: PhraseFilter;
};
