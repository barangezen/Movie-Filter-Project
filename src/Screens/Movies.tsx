import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MovieList } from "../Components/MovieList/MovieList";
import { MySearch } from "../Components/Search/MySearch";
import useFetch from "../hooks/getFeedData";

export const Movies = () => {
  const [movieData, setMovieData] = useState();
  const { data, status } = useFetch();
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
    const movies = data?.entries.filter((movie: any) => {
      return movie.programType === "movie" && movie.releaseYear >= 2010;
    });
    setMovieData(movies);
  }, [data]);
  console.log("movieData", movieData);
  return (
    <Container>
      {status === "loading" && <p>{"Loading..."}</p>}
      {status === "error" && <p>{"Ups.. Something went wrong"}</p>}
      {status === "success" && (
        <>
          <Row>
            <Col sm={10}>
              <MySearch
                buttonText="Search"
                placeholder="Search..."
                btnVariant="outline-dark"
              />
            </Col>
            <Col>
              <MyDropdownFilter dropdownName="Sort By" options={options} />
            </Col>
          </Row>
          <MovieList />
        </>
      )}
    </Container>
  );
};
