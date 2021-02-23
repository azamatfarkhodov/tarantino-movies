import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Movies.module.css";
import Loader from "../components/Loader";
import { Container, Row, Col, Image, CardDeck, Card } from "react-bootstrap";

export default function Movies({ movies }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>Tarantino Movies| Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <section className={styles.showcase}>
              <div className={styles.hero_container}>
                <Image
                  src="https://res.cloudinary.com/dzo9spu3l/image/upload/v1614001833/WM8Wl_tk3bgm.jpg"
                  alt="Movie Page Image"
                />
              </div>
              <div className={styles.content}>
                <h1>Best Quentin Tarantino Movies</h1>
              </div>
            </section>

            <section className={styles.movies}>
              <Container>
                <Row>
                  <Col>
                    <h1>
                      <span>
                        <span className={styles.quentin_movies}>Movies</span>
                      </span>
                    </h1>
                    <CardDeck>
                      {movies.map((movie) => (
                        <Col
                          sm={12}
                          md={6}
                          lg={4}
                          xl={3}
                          key={movie.id}
                          className={styles.carddeck}
                        >
                          <Link href={`/movie/${movie.slug}`}>
                            <Card
                              style={{ width: "15rem" }}
                              className={styles.card}
                            >
                              <Card.Img
                                variant="top"
                                height="275px"
                                style={{ objectFit: "cover" }}
                                src={
                                  movie.image
                                    ? movie.image[0].url
                                    : "https://via.placeholder.com/150.png"
                                }
                              />
                              <Card.Body className={styles.cardbody}>
                                <Link href={`/movie/${movie.slug}`}>
                                  <h5>{movie.name}</h5>
                                </Link>
                              </Card.Body>
                            </Card>
                          </Link>
                        </Col>
                      ))}
                    </CardDeck>
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

export async function getStaticProps() {
  const movies = await axios
    .get("https://tarantino-movies-api.herokuapp.com/movies")
    .then(({ data }) => data)
    .catch((e) => null);

  return {
    props: {
      movies,
    },
  };
}
