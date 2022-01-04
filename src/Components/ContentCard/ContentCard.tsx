import { Card } from "react-bootstrap";
import { IMovieData } from "../../models/MovieDataModel";
import styles from "./ContentCard.module.scss";

export interface IContentCardProps {
  movieType: IMovieData;
}

export const ContentCard: React.FC<IContentCardProps> = ({ movieType }) => {
  const { title, images } = movieType;
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
