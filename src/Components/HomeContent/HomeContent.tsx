import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HomeCard } from "../HomeCard/HomeCard";
import HomeCardImg from "../../assets/placeholder.png";
import { useTranslation } from "react-i18next";
import { strings } from "../../lang";
export const HomeContent = () => {
  const { t } = useTranslation();
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
          cardText={t(strings.homeContent.popularMovies)}
          onClickHandler={onClickMovies}
        />
        <HomeCard
          cardImg={HomeCardImg}
          cardText={t(strings.homeContent.popularSeries)}
          onClickHandler={onClickSeries}
        />
      </Row>
    </Container>
  );
};
