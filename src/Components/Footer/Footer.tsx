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
export const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <div className={styles.footerNav}>
          <ul>
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Collection Statement</li>
            <li>Help</li>
            <li>Manage Account</li>
          </ul>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © Baran Gezenoğlu. All right reserved.</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.icons}>
            <a href={"#"}>
              <img src={facebook} alt="" />
            </a>
            <a href={"#"}>
              <img src={twitter} alt="" />
            </a>
            <a href={"#"}>
              <img src={instagram} alt="" />
            </a>
          </div>
          <div className={styles.downloads}>
            <img src={appstore} alt="" />
            <img src={windowstore} alt="" />
            <img src={playstore} alt="" />
          </div>
        </div>
      </Container>
    </footer>
  );
};
