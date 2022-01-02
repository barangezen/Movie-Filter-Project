import { Card } from "react-bootstrap";
export interface IMovie {
  title: string;
  description?: string;
  image: string;
  programType?: string;
  releaseYear?: number;
}
export interface IContentCardProps {
  movieType: IMovie;
}

export const ContentCard: React.FC<IContentCardProps> = ({ movieType }) => {
  const { title, image } = movieType;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
