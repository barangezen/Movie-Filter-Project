import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import {
  IOption,
  MyDropdownFilter,
} from "../components/DropdownFilter/CustomDropdownFilter";
import { ProgramList } from "../components/ProgramList/ProgramList";
import { MySearch } from "../components/Search/CustomSearch";
import { ReactQueryStatus } from "../helpers/GlobalEnums";
import { options, sortByOption } from "../helpers/Sort";
import useFetch from "../hooks/fetch";
import { strings } from "../lang";
import { IProgramData } from "../models/MovieDataModel";
import { AppService } from "../services/app.service";

export const Program = () => {
  const { t } = useTranslation();
  const { programType } = useParams();
  const { data, status } = useFetch<IProgramData>(AppService.get);
  const [programData, setProgramData] = useState<IProgramData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const setOptionKey = (option: IOption) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    if (!data) {
      return;
    }
    let programs = [];

    if (inputValue.length > 2) {
      programs = data.entries.filter(
        (program) =>
          program.title
            .toLocaleLowerCase()
            .search(inputValue.toLocaleLowerCase()) !== -1
      );
    } else {
      programs = data?.entries.filter((program: IProgramData) => {
        return (
          program.programType === programType && program.releaseYear >= 2010
        );
      });
    }
    setProgramData(programs.slice(0, 21));
  }, [data, inputValue, programType]);

  useEffect(() => {
    if (selectedOption) {
      const sortedMovies = sortByOption(selectedOption, programData);
      setProgramData(sortedMovies);
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
          <ProgramList programList={programData} />
        </>
      )}
    </Container>
  );
};
