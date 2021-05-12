import { SettingsFieldsEnum } from "@/model/Filter/Settings/fields";
import { SearchTypes } from "@/model/Filter/types";
import { IFilter } from "@/model/Filter/IFilter";
import { Filter } from "@/model/Filter/Filter";
import initialValueOf from "@/model/Filter/filterIniter";

export class SettingsFilter
  extends Filter<SettingsFieldsEnum>
  implements IFilter<SettingsFieldsEnum> {
  initSorters(): void {
    this.sortBy = {
      [SettingsFieldsEnum.AGE_ALLOWED]: null,
      [SettingsFieldsEnum.DEFAULT]: null,
      [SettingsFieldsEnum.NAME]: null,
    };
  }

  initSearch(): void {
    this.findBy = {
      [SettingsFieldsEnum.AGE_ALLOWED]: initialValueOf(
        SearchTypes.TYPE_FROM_TO
      ),
      [SettingsFieldsEnum.DEFAULT]: initialValueOf(SearchTypes.TYPE_BOOLEAN),
      [SettingsFieldsEnum.NAME]: initialValueOf(SearchTypes.TYPE_PHRASE),
    };
  }
}
