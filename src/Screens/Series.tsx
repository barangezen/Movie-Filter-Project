import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/CustomDropdownFilter";
import { MySearch } from "../Components/Search/CustomSearch";
import { SeriesList } from "../Components/SeriesList/SeriesList";
import { ProgramType, ReactQueryStatus } from "../helpers/GlobalEnums";
import { options, sortByOption } from "../helpers/Sort";
import useFetch from "../hooks/getFeedData";
import { strings } from "../lang";
import { IMovieData } from "../models/MovieDataModel";

export const Series = () => {
  const { t } = useTranslation();
  const { data, status } = useFetch();
  const [seriesData, setSeriesData] = useState<IMovieData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const setOptionKey = (option: IOption) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (inputValue === "") {
      const series = data?.entries.filter((serie: IMovieData) => {
        return (
          serie?.programType === ProgramType.Series &&
          serie?.releaseYear >= 2010
        );
      });
      if (series) {
        setSeriesData(series);
      }
    }
  }, [data, inputValue]);
  useEffect(() => {
    if (inputValue.length > 2) {
      setSeriesData((preData) =>
        preData?.filter(
          (i) =>
            i.title
              .toLocaleLowerCase()
              .search(inputValue.toLocaleLowerCase()) !== -1
        )
      );
    }
  }, [inputValue]);
  useEffect(() => {
    if (selectedOption) {
      sortByOption(selectedOption, seriesData, setSeriesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // For avoid re-rendering every second by  movieData
  }, [selectedOption]);

  return (
    <Container>
      {status === ReactQueryStatus.Loading && (
        <p>{t(strings.queryStatus.loading)}</p>
      )}
      {status === ReactQueryStatus.Error && (
        <p>{t(strings.queryStatus.error)}</p>
      )}
      {status === ReactQueryStatus.Success && (
        <>
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <MySearch
                placeholder={t(strings.filter.searchPlaceholder)}
                inputValue={inputValue}
                onChangeHandler={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(ev.target.value)
                }
              />

              <MyDropdownFilter
                dropdownName={selectedOption?.value ?? t(strings.filter.sortBy)}
                options={options}
                onSelect={setOptionKey}
              />
            </div>
          </Row>
          <SeriesList seriesList={seriesData} />
        </>
      )}
    </Container>
  );
};
