import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../HomeCard/HomeCard";
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
          cardImg={require("../../assets/placeholder.png")}
          cardText="Popular Movies"
          onClickHandler={onClickMovies}
        />
        <HomeCard
          cardImg={require("../../assets/placeholder.png")}
          cardText="Populer Series"
          onClickHandler={onClickSeries}
        />
      </Row>
    </Container>
  );
};
