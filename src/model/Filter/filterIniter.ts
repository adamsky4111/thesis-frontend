import {
  BooleanFilter,
  NumberFilter,
  PhraseFilter,
  SearchTypes,
} from "@/model/Filter/types";

export default function initialValueOf(
  type: SearchTypes.TYPE_PHRASE
): PhraseFilter;
export default function initialValueOf(
  type: SearchTypes.TYPE_FROM_TO
): NumberFilter;
export default function initialValueOf(
  type: SearchTypes.TYPE_BOOLEAN
): BooleanFilter;

export default function initialValueOf(type: SearchTypes): any {
  if (type === SearchTypes.TYPE_BOOLEAN) {
    return null;
  } else if (type === SearchTypes.TYPE_PHRASE) {
    return null;
  } else if (type === SearchTypes.TYPE_FROM_TO) {
    return { min: null, max: null };
  }
}
