import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../styles/Stars.module.css";
import Loader from "../components/Loader";
import { Container, Row, Col, Image, CardDeck, Card } from "react-bootstrap";

export default function Stars({ actors }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

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
              <div className={styles.hero_container}>
                <Image
                  src="https://res.cloudinary.com/dzo9spu3l/image/upload/v1614003589/144-1446677_quentin-tarantino-movie-hd-wallpaper-reservoir-dogs-poster_vgn7xz.jpg"
                  alt="Movie Page Image"
                />
              </div>
              <div className={styles.content}>
                <h1>Best Quentin Tarantino Collaborations</h1>
              </div>
            </section>

            <section className={styles.movies}>
              <Container>
                <Row>
                  <Col>
                    <h1>
                      <span>
                        <span className={styles.quentin_movies}>Stars</span>
                      </span>
                    </h1>
                    <CardDeck>
                      {actors.map((star) => (
                        <Col
                          sm={12}
                          md={6}
                          lg={4}
                          xl={3}
                          key={star.id}
                          className={styles.carddeck}
                        >
                          <Link href={`/actor/${star.slug}`}>
                            <Card
                              style={{ width: "15rem" }}
                              className={styles.card}
                            >
                              <Card.Img
                                variant="top"
                                height="275px"
                                style={{ objectFit: "cover" }}
                                src={
                                  star.image
                                    ? star.image.url
                                    : "https://via.placeholder.com/150.png"
                                }
                              />
                              <Card.Body className={styles.cardbody}>
                                <Link href={`/actor/${star.slug}`}>
                                  <h5>{star.name}</h5>
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
  const actors = await axios
    .get("https://tarantino-movies-api.herokuapp.com/actors")
    .then(({ data }) => data)
    .catch((e) => null);

  return {
    props: {
      actors,
    },
  };
}
