import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "../../components/Loader";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styles from "../../styles/Movie.module.css";
import axios from "axios";

export default function Movie({ movie }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>{`Tarantino Movies | ${movie.name}`}</title>
        <link rel="icon" href="/tarantino.png" />
      </Head>
      <div className={styles.movie_page}>
        {loading ? (
          <Loader />
        ) : (
          <section className={styles.movie_info}>
            <Container>
              <Row>
                <Col>
                  <h1>
                    <span className={styles.quentin_span}>
                      <span className={styles.quentin_movies}>
                        {movie.name}
                      </span>
                    </span>
                  </h1>
                  <div className={styles.card}>
                    <div className={styles.card_left}>
                      <Image
                        src={
                          movie.image
                            ? movie.image[0].url
                            : "https://via.placeholder.com/500x400.png"
                        }
                      />
                    </div>
                    <div className={styles.card_right}>
                      <h1>{movie.name}</h1>
                      <div className={styles.card_right_details}>
                        <ul>
                          <li>
                            <span className={styles.white}>Release Date:</span>{" "}
                            {movie.releaseDate}
                          </li>
                          <li>
                            <span className={styles.white}>Budget:</span>{" "}
                            {movie.budget}
                          </li>
                          <li>
                            <span className={styles.white}>Box Office:</span>{" "}
                            {movie.boxOffice}
                          </li>
                        </ul>
                        <div className={styles.card_right_review}>
                          <p>{movie.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Col className={styles.carddeck}>
                    <Card
                      style={{ width: "18rem" }}
                      className={styles.card_mobile}
                    >
                      <Card.Img
                        variant="top"
                        height="400px"
                        style={{ objectFit: "cover" }}
                        src={
                          movie.image
                            ? movie.image[0].url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Text>
                            <span className={styles.white}>Release Date:</span>{" "}
                            {movie.releaseDate}
                            <span className={styles.white}>Budget:</span>{" "}
                            {movie.budget}
                            <span className={styles.white}>Box Office:</span>{" "}
                            {movie.boxOffice}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Col>
              </Row>

              <Row>
                <Col>
                  <iframe
                    title="Relaxing Music Mix | BEAUTIFUL PIANO"
                    width="100%"
                    height="500px"
                    src={movie.trailer}
                  ></iframe>
                </Col>
              </Row>
            </Container>
          </section>
        )}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    "https://tarantino-movies-api.herokuapp.com/movies"
  );

  const paths = data.map((movie) => `/movie/${movie.slug}`);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const movies = await axios
    .get(
      `https://tarantino-movies-api.herokuapp.com/movies?slug=${params.slug}`
    )
    .then(({ data }) => data)
    .catch((e) => null);

  return {
    props: {
      movie: movies ? movies[0] : movies,
    },
    revalidate: 60, // In seconds
  };
}
