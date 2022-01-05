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

export const Movies = () => {
  const { t } = useTranslation();
  const { data, status } = useFetch<IProgramData>(AppService.get);
  const [movieData, setMovieData] = useState<IProgramData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const setOptionKey = (option: IOption) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (inputValue === "") {
      const movies = data?.entries.filter((movie: IProgramData) => {
        return (
          movie.programType === ProgramType.Movie && movie.releaseYear >= 2010
        );
      });
      if (movies) {
        setMovieData(movies);
      }
    }
  }, [data, inputValue]);

  useEffect(() => {
    if (inputValue.length > 2) {
      setMovieData((preData) =>
        preData?.filter(
          (movie) =>
            movie.title
              .toLocaleLowerCase()
              .search(inputValue.toLocaleLowerCase()) !== -1
        )
      );
    }
  }, [inputValue]);

  useEffect(() => {
    if (selectedOption) {
      const sortedMovies = sortByOption(selectedOption, movieData);
      setMovieData(sortedMovies);
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
          <ProgramList programList={movieData} />
        </>
      )}
    </Container>
  );
};
