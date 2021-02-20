import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(function mount() {
    function onScroll() {
      if (window.scrollY > 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <nav className={navbar ? `${styles.navbar_active}` : `${styles.navbar}`}>
      <Container>
        <div className={styles.inner_width}>
          <Link href="/">QTM</Link>
          <div className={styles.navbar_menu}>
            <Link href="#">Home</Link>
            <Link href="#">Movies</Link>
            <Link href="#">Stars</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
