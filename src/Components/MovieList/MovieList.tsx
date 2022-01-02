import { Col, Container, Row } from "react-bootstrap";
import { ContentCard, IMovie } from "../ContentCard/ContentCard";

export const MovieList = () => {
  const movieList: IMovie[] = [
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
    {
      title: "Baran",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <Container style={{ marginTop: "40px" }}>
      <Row xs={1} md={6} className="g-4">
        {movieList.map((movie) => {
          return (
            <Col>
              <ContentCard movieType={movie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
