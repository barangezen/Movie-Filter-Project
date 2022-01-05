import { Card } from "react-bootstrap";
import styles from "./HomeCard.module.scss";
export interface IHomeCardProps {
  cardImg: string;
  cardText: string;
  onClickHandler: () => void;
}

export const HomeCard: React.FC<IHomeCardProps> = ({
  cardImg,
  cardText,
  onClickHandler,
}) => {
  return (
    <Card className={styles.container}>
      <Card.Img
        variant="top"
        src={cardImg}
        alt="placeholder"
        onClick={onClickHandler}
        className={styles.cardImg}
      />
      <Card.Body>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
