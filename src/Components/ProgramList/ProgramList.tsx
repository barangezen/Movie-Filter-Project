import React from "react";
import { Col, Row } from "react-bootstrap";
import { IProgramData } from "../../models/MovieDataModel";
import { ContentCard } from "../ContentCard/ContentCard";
import styles from "./ProgramList.module.scss";

export interface ISeriesList {
  programList: IProgramData[];
}

export const ProgramList: React.FC<ISeriesList> = ({ programList }) => {
  return (
    <div className={styles.container}>
      <Row xs={1} md={6} className="g-4">
        {programList.map((program) => {
          return (
            <Col>
              <ContentCard program={program} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
