import { Card } from "react-bootstrap";
import styles from "./ContentCard.module.scss";
export interface IMovie {
  title: string;
  description?: string;
  image: string;
  programType?: string;
  releaseYear?: number;
}
export interface IContentCardProps {
  moviesData: IMovie;
}

export const ContentCard: React.FC<IContentCardProps> = ({ moviesData }) => {
  const { title, image } = moviesData;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title title={title} className={styles.cardTitle}>
          {title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
