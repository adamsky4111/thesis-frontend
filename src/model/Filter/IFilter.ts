import { FilterTypes, SortTypes } from "@/model/Filter/types";

export interface IFilter<T extends string | number> {
  perPage: number;
  page: number;
  paginated: boolean;
  sortBy: Record<T, SortTypes | null>;
  findBy: Record<T, FilterTypes>;
  addSorter(field: T, direction: SortTypes | null): void;
  addSearch(field: T, value: FilterTypes): void;
}
