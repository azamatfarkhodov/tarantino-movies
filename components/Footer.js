import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className="text-center">
        <Row>
          <Col>
            Created by{" "}
            <Link href="https://t.me/azamatfarkhodov">
              <a target="_blank" className={styles.name}>
                Azamat Farkhodov
              </a>
            </Link>{" "}
            ©2021&nbsp;|&nbsp;
            <Link href="https://github.com/azamatfarkhodov">
              <a target="_blank">
                {" "}
                <i className="fab fa-github"></i>
              </a>
            </Link>
            &nbsp;
            <Link href="https://farkhodovazamat@gmail.com">
              <a target="_blank">
                {" "}
                <i className="fa fa-lg fa-envelope"></i>
              </a>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.copyright}>
              I do not own any images or names. All rights belong to their
              respective owners.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
