import { Col, Container, Row } from "react-bootstrap";
import {
  IOption,
  MyDropdownFilter,
} from "../Components/DropdownFilter/MyDropdownFilter";
import { MovieList } from "../Components/MovieList/MovieList";
import { MySearch } from "../Components/Search/MySearch";

export const Series = () => {
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
  return (
    <Container>
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
    </Container>
  );
};
