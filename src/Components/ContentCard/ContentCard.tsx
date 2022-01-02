import { Row, Col, Card } from "react-bootstrap";
export interface IContentCardProps {
  cardTitle: string;
  cardImg: string;
}

export const ContentCard: React.FC<IContentCardProps> = ({
  cardTitle,
  cardImg,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardImg} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
      </Card.Body>
    </Card>
  );
};
