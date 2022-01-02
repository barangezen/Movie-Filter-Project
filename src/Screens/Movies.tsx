import { Container } from "react-bootstrap";
import { MySearch } from "../Components/Search/MySearch";

export const Movies = () => {
  return (
    <Container>
      <MySearch buttonText="Search.." />
    </Container>
  );
};
