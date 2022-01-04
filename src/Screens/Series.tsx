import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MySearch } from "../Components/Search/MySearch";
import { SeriesList } from "../Components/SeriesList/SeriesList";
import useFetch from "../hooks/getFeedData";
import { IMovieData } from "../models/MovieDataModel";

export const Series = () => {
  const { data, status } = useFetch();
  const [seriesData, setSeriesData] = useState<IMovieData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const options: IOption[] = [
    {
      key: "ascTitle",
      value: "Ascending by Title",
    },
    {
      key: "descTitle",
      value: "Descending by Title",
    },
    {
      key: "ascYear",
      value: "Ascending by Year",
    },
    {
      key: "descTitle",
      value: "Descending by Year",
    },
  ];
  useEffect(() => {
    if (inputValue === "") {
      const series = data?.entries.filter((serie: IMovieData) => {
        return serie?.programType === "series" && serie?.releaseYear >= 2010;
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
  return (
    <Container>
      {status === "loading" && <p>{"Loading..."}</p>}
      {status === "error" && <p>{"Ups.. Something went wrong"}</p>}
      {status === "success" && (
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
                placeholder="Search..."
                inputValue={inputValue}
                onChangeHandler={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(ev.target.value)
                }
              />

              <MyDropdownFilter dropdownName="Sort By" options={options} />
            </div>
          </Row>
          <SeriesList seriesList={seriesData} />
        </>
      )}
    </Container>
  );
};
