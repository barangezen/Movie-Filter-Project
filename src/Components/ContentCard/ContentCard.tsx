import { Card } from "react-bootstrap";
import { IProgramData } from "../../models/MovieDataModel";
import styles from "./ContentCard.module.scss";

export interface IContentCardProps {
  program: IProgramData;
}

export const ContentCard: React.FC<IContentCardProps> = ({ program }) => {
  const { title, images } = program;
  return (
    <Card>
      <Card.Img variant="top" src={images["Poster Art"]?.url} />
      <Card.Body>
        <Card.Title title={title} className={styles.cardTitle}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
