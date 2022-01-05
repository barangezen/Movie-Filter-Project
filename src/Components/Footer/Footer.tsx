/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "../Footer/Footer.module.scss";
import facebook from "../../assets/social/facebook-blue.svg";
import twitter from "../../assets/social/twitter-blue.svg";
import instagram from "../../assets/social/instagram-blue.svg";
import appstore from "../../assets/store/app-store.svg";
import playstore from "../../assets/store/play-store.svg";
import windowstore from "../../assets/store/windows-store.svg";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { strings } from "../../lang";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container className={styles.footer}>
        <div className={styles.footerNav}>
          <ul>
            <li>{t(strings.footer.home)}</li>
            <li>{t(strings.footer.termsAndConditions)}</li>
            <li>{t(strings.footer.privacyPolicy)}</li>
            <li>{t(strings.footer.collectionStatement)}</li>
            <li>{t(strings.footer.help)}</li>
            <li>{t(strings.footer.manageAccount)}</li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>{t(strings.footer.copyRight)}</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.icons}>
            <a href={"#"}>
              <img src={facebook} alt="facebookImage" />
            </a>
            <a href={"#"}>
              <img src={twitter} alt="twitterImage" />
            </a>
            <a href={"#"}>
              <img src={instagram} alt="instagramImage" />
            </a>
          </div>
          <div className={styles.downloads}>
            <img src={appstore} alt="appstoreImage" />
            <img src={windowstore} alt="windowstoreImage" />
            <img src={playstore} alt="playstoreImage" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
