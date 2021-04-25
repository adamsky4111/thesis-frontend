export enum SortTypes {
  ASC = "ASC",
  DESC = "DESC",
}

export enum SearchTypes {
  TYPE_FROM_TO = 0,
  TYPE_PHRASE = 1,
  TYPE_BOOLEAN = 2,
}

export type FilterTypes = PhraseFilter | NumberFilter | BooleanFilter;

export type PhraseFilter = string | null;
export type NumberFilter = { min: number | null; max: number | null };
export type BooleanFilter = boolean | null;
