import { Card } from "react-bootstrap";

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
    <Card style={{ width: "14rem", marginTop: "3rem", border: "none" }}>
      <Card.Img
        variant="top"
        src={cardImg}
        alt="placeholder"
        onClick={onClickHandler}
        style={{ backgroundColor: "black", height: "100%" }}
      />
      <Card.Body>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
