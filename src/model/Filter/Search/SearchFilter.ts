import { AccountStreamFieldsEnum } from "@/model/Filter/Search/fields";
import { SearchTypes } from "@/model/Filter/types";
import { IFilter } from "@/model/Filter/IFilter";
import { Filter } from "@/model/Filter/Filter";
import initialValueOf from "@/model/Filter/filterIniter";

export class SearchFilter
  extends Filter<AccountStreamFieldsEnum>
  implements IFilter<AccountStreamFieldsEnum> {
  initSorters(): void {
    this.sortBy = {
      [AccountStreamFieldsEnum.NAME]: null,
    };
  }

  initSearch(): void {
    this.findBy = {
      [AccountStreamFieldsEnum.NAME]: initialValueOf(SearchTypes.TYPE_PHRASE),
    };
  }
}
