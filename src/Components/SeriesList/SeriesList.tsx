import { Col, Row } from "react-bootstrap";
import { ContentCard, IMovie } from "../ContentCard/ContentCard";

export const SeriesList = () => {
  const seriesList: IMovie[] = [
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
        {seriesList.map((serie, index) => {
          return (
            <Col key={index}>
              <ContentCard moviesData={serie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
