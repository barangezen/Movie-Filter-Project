import { IOption } from "../Components/DropdownFilter/MyDropdownFilter";
import { IMovieData } from "../models/MovieDataModel";
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

export const sortByOption = (
  option: IOption,
  data: IMovieData[],
  setFilteredData: React.Dispatch<React.SetStateAction<IMovieData[]>>
) => {
  switch (option.key) {
    case FilterOptionsKey.AscTitle:
      return setFilteredData(
        [...data].sort((first, second) => (first.title < second.title ? -1 : 1))
      );
    case FilterOptionsKey.DscTitle:
      return setFilteredData(
        [...data].sort((first, second) => (first.title > second.title ? -1 : 1))
      );
    case FilterOptionsKey.AscYear:
      return setFilteredData(
        [...data].sort(
          (first, second) => first.releaseYear - second.releaseYear
        )
      );
    case FilterOptionsKey.DscYear:
      return setFilteredData(
        [...data].sort(
          (first, second) => -(first.releaseYear - second.releaseYear)
        )
      );
  }
};
