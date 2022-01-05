import { IOption } from "../Components/DropdownFilter/CustomDropdownFilter";
import { IProgramData } from "../models/MovieDataModel";
import { FilterOptionsKey } from "./GlobalEnums";

export const options: IOption[] = [
  {
    key: FilterOptionsKey.AscTitle,
    value: "Ascending by Title",
  },
  {
    key: FilterOptionsKey.DscTitle,
    value: "Descending by Title",
  },
  {
    key: FilterOptionsKey.AscYear,
    value: "Ascending by Year",
  },
  {
    key: FilterOptionsKey.DscYear,
    value: "Descending by Year",
  },
];

export const sortByOption = (option: IOption, data: IProgramData[]) => {
  switch (option.key) {
    case FilterOptionsKey.AscTitle:
      return [...data].sort((first, second) =>
        first.title < second.title ? -1 : 1
      );
    case FilterOptionsKey.DscTitle:
      return [...data].sort((first, second) =>
        first.title > second.title ? -1 : 1
      );
    case FilterOptionsKey.AscYear:
      return [...data].sort(
        (first, second) => first.releaseYear - second.releaseYear
      );
    case FilterOptionsKey.DscYear:
      return [...data].sort(
        (first, second) => -(first.releaseYear - second.releaseYear)
      );

    default:
      return [];
  }
};
