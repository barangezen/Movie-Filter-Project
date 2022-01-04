import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MovieList } from "../Components/MovieList/MovieList";
import { MySearch } from "../Components/Search/MySearch";
import { options, sortByOption } from "../helpers/Sort";
import useFetch from "../hooks/getFeedData";
import { IMovieData } from "../models/MovieDataModel";

export const Movies = () => {
  const { data, status } = useFetch();
  const [movieData, setMovieData] = useState<IMovieData[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const setOptionKey = (option: IOption) => {
    setSelectedOption(option);
  };

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

  useEffect(() => {
    if (selectedOption) {
      sortByOption(selectedOption, movieData, setMovieData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // For avoid re-rendering every second by  movieData
  }, [selectedOption]);

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

              <MyDropdownFilter
                dropdownName={selectedOption?.value ?? "Sort By"}
                options={options}
                onSelect={setOptionKey}
              />
            </div>
          </Row>
          <MovieList movieList={movieData} />
        </>
      )}
    </Container>
  );
};
