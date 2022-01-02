import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MovieList } from "../Components/MovieList/MovieList";
import { MySearch } from "../Components/Search/MySearch";
import { SeriesList } from "../Components/SeriesList/SeriesList";
import useFetch from "../hooks/getFeedData";

export const Series = () => {
  const [seriesData, setSeriesData] = useState();
  const { data, status, error } = useFetch();
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
    const series = data?.entries.map((series: any) => {
      if (series.programType === "series") {
        return series;
      }
    });
    setSeriesData(series);
  }, [data]);
  console.log("seriesData", seriesData);
  console.log("data", data);
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
          <SeriesList />
        </>
      )}
    </Container>
  );
};
