import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MySearch } from "../Components/Search/MySearch";
import { SeriesList } from "../Components/SeriesList/SeriesList";
import useFetch from "../hooks/getFeedData";

export const Series = () => {
  const [seriesData, setSeriesData] = useState();
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
    const series = data?.entries.filter((serie: any) => {
      return serie.programType === "series" && serie.releaseYear >= 2010;
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <MySearch placeholder="Search..." />

              <MyDropdownFilter dropdownName="Sort By" options={options} />
            </div>
          </Row>
          <SeriesList />
        </>
      )}
    </Container>
  );
};
