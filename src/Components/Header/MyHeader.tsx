import { Button, Container, Navbar } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { BootsrapVariants } from "../../helpers/GlobalEnums";
import { strings } from "../../lang";
import styles from "./MyHeader.module.scss";

export const MyHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar className={styles.container} bg={"primary"} variant={"dark"}>
        <Container>
          <Navbar.Brand style={{ fontSize: "25px" }}>
            {t(strings.header.demoStreaming)}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className={styles.navbarText}>
              <a href="#login">Login</a>
            </Navbar.Text>
            <Button variant={BootsrapVariants.Secondary} size="sm">
              Start your free trial
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar bg={BootsrapVariants.Dark} variant={BootsrapVariants.Dark}>
        <Container>
          <Navbar.Brand>{t(strings.header.popularTitles)}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};
