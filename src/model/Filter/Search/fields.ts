import { PhraseFilter } from "@/model/Filter/types";

export enum AccountStreamFieldsEnum {
  NAME = "name",
}

export type AccountChannelFields = {
  [AccountStreamFieldsEnum.NAME]: PhraseFilter;
};
