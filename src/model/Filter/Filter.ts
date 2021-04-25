import { FilterTypes, SearchTypes, SortTypes } from "@/model/Filter/types";

export abstract class Filter<T extends string | number> {
  perPage: number;
  page: number;
  paginated: boolean;
  sortBy!: Record<T, SortTypes | null>;
  findBy!: Record<T, FilterTypes>;

  public constructor() {
    this.initSorters();
    this.initSearch();
    this.perPage = 10;
    this.page = 1;
    this.paginated = true;
  }

  addSorter(field: T, direction: SortTypes | null): void {
    this.sortBy[field] = direction;
  }

  addSearch(field: T, value: FilterTypes): void {
    this.findBy[field] = value;
  }

  abstract initSorters(): void;
  abstract initSearch(): void;
}
