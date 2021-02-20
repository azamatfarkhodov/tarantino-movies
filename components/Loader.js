import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <img
        src="./giphy.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loader;