import { Col, Row } from "react-bootstrap";
import { ContentCard, IMovie } from "../ContentCard/ContentCard";
import styles from "./SeriesList.module.scss";
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
    <div className={styles.container}>
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
