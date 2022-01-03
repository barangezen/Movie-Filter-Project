import { Col, Row } from "react-bootstrap";
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
    <div style={{ marginTop: "40px" }}>
      <Row xs={1} md={6} className="g-4">
        {movieList.map((movie, index) => {
          return (
            <Col key={index}>
              <ContentCard moviesData={movie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
