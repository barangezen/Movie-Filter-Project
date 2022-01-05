import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/CustomDropdownFilter";
import { ProgramList } from "../Components/ProgramList/ProgramList";
import { MySearch } from "../Components/Search/CustomSearch";
import { ProgramType, ReactQueryStatus } from "../helpers/GlobalEnums";
import { options, sortByOption } from "../helpers/Sort";
import useFetch from "../hooks/fetch";
import { strings } from "../lang";
import { IProgramData } from "../models/MovieDataModel";
import { AppService } from "../services/app.service";

export const Series = () => {
  const { t } = useTranslation();
  const { data, status } = useFetch<IProgramData>(AppService.get);
  const [seriesData, setSeriesData] = useState<IProgramData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<IOption>();

  const setOptionKey = (option: IOption) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (!data) {
      return;
    }

    let series = [];

    if (inputValue.length > 2) {
      series = data.entries.filter(
        (serie) =>
          serie.title
            .toLocaleLowerCase()
            .search(inputValue.toLocaleLowerCase()) !== -1
      );
    } else {
      series = data?.entries.filter((serie: IProgramData) => {
        return (
          serie?.programType === ProgramType.Series &&
          serie?.releaseYear >= 2010
        );
      });
    }

    setSeriesData(series);
  }, [data, inputValue]);

  useEffect(() => {
    if (selectedOption) {
      const sortedSeries = sortByOption(selectedOption, seriesData);
      setSeriesData(sortedSeries);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <ProgramList programList={seriesData} />
        </>
      )}
    </Container>
  );
};
