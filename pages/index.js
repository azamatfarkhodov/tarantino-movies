import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Loader from "../components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
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
                <video src="./tarantino.mp4" ref={videoRef} muted loop></video>
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
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                debitis doloremque quo, expedita aut illo modi animi quis
                maiores. Odio delectus ab sed debitis nam molestias
                necessitatibus quidem laborum! Earum.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                debitis doloremque quo, expedita aut illo modi animi quis
                maiores. Odio delectus ab sed debitis nam molestias
                necessitatibus quidem laborum! Earum.
              </p>
            </section>
          </>
        )}
      </div>
    </>
  );
}
