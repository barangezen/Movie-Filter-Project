import React from "react";
import { Col, Row } from "react-bootstrap";
import { IMovieData } from "../../models/MovieDataModel";
import { ContentCard } from "../ContentCard/ContentCard";
import styles from "./MovieList.module.scss";
export interface IMovieList {
  movieList: IMovieData[];
}

export const MovieList: React.FC<IMovieList> = ({ movieList }) => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={6} className="g-4">
        {movieList.map((movie, index) => {
          return (
            <Col key={index}>
              <ContentCard movieType={movie} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
