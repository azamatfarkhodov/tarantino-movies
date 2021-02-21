import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 0);
  });

  function handleScroll() {
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Head>
        <title>Tarantino Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <section className={styles.showcase}>
              <div className={styles.video_container}>
                <video
                  src="https://res.cloudinary.com/dzo9spu3l/video/upload/v1613846731/tarantino_lehfwb.mp4"
                  ref={videoRef}
                  muted
                  loop
                ></video>
              </div>
              <div className={styles.content}>
                <h1 className={styles.written_and}>WRITTEN AND</h1>
                <h1 className={styles.directed_by}>DIRECTED BY</h1>
                <h1 className={styles.quentin}>QUENTIN</h1>
                <h1 className={styles.tarantino}>TARANTINO</h1>
                <button type="button" onClick={handleScroll}>
                  <i className="fas fa-arrow-down"></i>
                </button>
              </div>
            </section>

            <section className={styles.about}>
              <Container>
                <h1>
                  About{" "}
                  <span>
                    <span className={styles.quentin_tarantino}>
                      Quentin Tarantno
                    </span>
                  </span>
                </h1>
                <Row>
                  <Col sm={6}>
                    <Image
                      src="https://res.cloudinary.com/dzo9spu3l/image/upload/v1613923765/unnamed_o2vn4y.jpg"
                      alt="Quentin Tarantino"
                      width="100%"
                    />
                  </Col>
                  <Col sm={6}>
                    <p>
                      Born in Tennessee in 1963, Quentin Tarantino moved to
                      California at age 4. His love of movies led to a job in a
                      video store, during which time he wrote the scripts for
                      True Romance and Natural Born Killers. Tarantino's
                      directorial debut came with 1992's Reservoir Dogs, but he
                      received widespread critical and commercial acclaim with
                      Pulp Fiction (1994), for which he won an Academy Award for
                      best screenplay. Subsequent features included Jackie Brown
                      (1997), Kill Bill: Vol. 1 (2003) and Vol. 2 (2004) and
                      Grindhouse (2007). Tarantino earned several award
                      nominations for Inglourious Basterds (2009) and Django
                      Unchained (2012), the latter garnering him a second Oscar
                      win for best screenplay, and he went on to write and
                      direct The Hateful Eight (2015) and Once Upon a Time... in
                      Hollywood (2019). In 2016, Tarantino began dating Daniella
                      Pick, daughter of Israeli singer and songwriter Tzvika
                      Pick. After getting engaged in 2017, they married in Los
                      Angeles in November 2018. In August 2019, the couple
                      announced they were expecting their first child together.
                      The filmmaker had previously been involved in a long-term
                      relationship with actress Mira Sorvino.
                    </p>
                    <Link
                      href="https://en.wikipedia.org/wiki/Quentin_Tarantino"
                      target="_blank"
                    >
                      <a target="_blank" rel="noreferrer">
                        <Button variant="dark">Wiki</Button>
                      </a>
                    </Link>
                    <Link href="/movies">
                      <Button variant="dark">Movies</Button>
                    </Link>
                    <Link href="/stars">
                      <Button variant="dark">Collaborators</Button>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </section>
          </>
        )}
      </div>
    </>
  );
}
