import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MovieList } from "../Components/MovieList/MovieList";
import { MySearch } from "../Components/Search/MySearch";
import useFetch from "../hooks/getFeedData";
import { IMovieData } from "../models/MovieDataModel";

export const Movies = () => {
  const { data, status } = useFetch();
  const [movieData, setMovieData] = useState<IMovieData[]>([]);
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
      const movies = data?.entries.filter((movie: IMovieData) => {
        return movie.programType === "movie" && movie.releaseYear >= 2010;
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
                placeholder={"Search.."}
                inputValue={inputValue}
                onChangeHandler={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(ev.target.value)
                }
              />

              <MyDropdownFilter dropdownName="Sort By" options={options} />
            </div>
          </Row>
          <MovieList movieList={movieData} />
        </>
      )}
    </Container>
  );
};
