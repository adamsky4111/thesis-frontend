import { AccountChannelFieldsEnum } from "@/model/Filter/AccountChannels/fields";
import { SearchTypes } from "@/model/Filter/types";
import { IFilter } from "@/model/Filter/IFilter";
import { Filter } from "@/model/Filter/Filter";
import initialValueOf from "@/model/Filter/filterIniter";

export class AccountChannelsFilter
  extends Filter<AccountChannelFieldsEnum>
  implements IFilter<AccountChannelFieldsEnum> {
  initSorters(): void {
    this.sortBy = {
      [AccountChannelFieldsEnum.DEFAULT]: null,
      [AccountChannelFieldsEnum.NAME]: null,
    };
  }

  initSearch(): void {
    this.findBy = {
      [AccountChannelFieldsEnum.DEFAULT]: initialValueOf(
        SearchTypes.TYPE_BOOLEAN
      ),
      [AccountChannelFieldsEnum.NAME]: initialValueOf(SearchTypes.TYPE_PHRASE),
    };
  }
}
