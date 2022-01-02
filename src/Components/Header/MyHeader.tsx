import { Button, Container, Navbar } from "react-bootstrap";
import "./MyHeader.css";

export const MyHeader = () => {
  return (
    <>
      <Navbar className={"navbarStyle"} bg={"primary"} variant={"dark"}>
        <Container>
          <Navbar.Brand style={{ fontSize: "25px" }}>
            {"DEMO Streaming"}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="navbarText">
              <a href="#login">Login</a>
            </Navbar.Text>
            <Button variant="secondary" size="sm">
              Start your free trial
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg={"dark"} variant={"dark"}>
        <Container>
          <Navbar.Brand>{"Populer Titles"}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
