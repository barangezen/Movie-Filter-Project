import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../HomeCard/HomeCard";
import HomeCardImg from "../../assets/placeholder.png";
export const HomeContent = () => {
  const navigate = useNavigate();
  const onClickMovies = () => {
    navigate(`/movies/`);
  };
  const onClickSeries = () => {
    navigate(`/series/`);
  };
  return (
    <Container>
      <Row>
        <HomeCard
          cardImg={HomeCardImg}
          cardText="Popular Movies"
          onClickHandler={onClickMovies}
        />
        <HomeCard
          cardImg={HomeCardImg}
          cardText="Populer Series"
          onClickHandler={onClickSeries}
        />
      </Row>
    </Container>
  );
};
