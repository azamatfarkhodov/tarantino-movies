import React, { useState, useEffect } from "react";
import Head from "next/head";
import Loader from "../../components/Loader";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import styles from "../../styles/Star.module.css";
import axios from "axios";

export default function Star({ actor }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      <Head>
        <title>{`Tarantino Movies | ${actor.name}`}</title>
        <link rel="icon" href="/tarantino.png" />
      </Head>
      <div className={styles.actor_page}>
        {loading ? (
          <Loader />
        ) : (
          <section className={styles.actor_info}>
            <Container>
              <Row>
                <Col>
                  <h1>
                    <span className={styles.quentin_span}>
                      <span className={styles.quentin_movies}>
                        {actor.name}
                      </span>
                    </span>
                  </h1>
                  <div className={styles.card}>
                    <div className={styles.card_left}>
                      <Image
                        src={
                          actor.image
                            ? actor.image.url
                            : "https://via.placeholder.com/500x400.png"
                        }
                      />
                    </div>
                    <div className={styles.card_right}>
                      <h1>{actor.name}</h1>
                      <div className={styles.card_right_details}>
                        <ul>
                          <li>
                            <span className={styles.white}>Birth Date:</span>{" "}
                            {actor.birthDate}
                          </li>
                          <li>
                            <span className={styles.white}>Movies:</span>{" "}
                            {actor.movie}
                          </li>
                        </ul>
                        <div className={styles.card_right_review}>
                          <p>{actor.biography}</p>
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
                          actor.image
                            ? actor.image.url
                            : "https://via.placeholder.com/150.png"
                        }
                      />
                      <Card.Body className={styles.cardbody}>
                        <Card.Text>
                          <span className={styles.white}>Birth Date:</span>{" "}
                          {actor.birthDate}
                          <span className={styles.white}>Movies:</span>{" "}
                          {actor.movie}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
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
    "https://tarantino-movies-api.herokuapp.com/actors"
  );

  const paths = data.map((actor) => `/actor/${actor.slug}`);

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const actors = await axios
    .get(
      `https://tarantino-movies-api.herokuapp.com/actors?slug=${params.slug}`
    )
    .then(({ data }) => data)
    .catch((e) => null);

  return {
    props: {
      actor: actors ? actors[0] : actors,
    },
    revalidate: 60, // In seconds
  };
}
