import React from "react";
import { Col, Row } from "react-bootstrap";
import { IMovieData } from "../../models/MovieDataModel";
import { ContentCard } from "../ContentCard/ContentCard";
import styles from "./SeriesList.module.scss";
export interface ISeriesList {
  seriesList: IMovieData[];
}

export const SeriesList: React.FC<ISeriesList> = ({ seriesList }) => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={6} className="g-4">
        {seriesList.map((serie) => {
          return (
            <Col>
              <ContentCard movieType={serie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
