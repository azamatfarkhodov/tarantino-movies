import React from "react";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.spinner}>
      <img
        src="https://res.cloudinary.com/dzo9spu3l/image/upload/v1613847108/giphy_o5awfq.gif"
        alt="loading"
      />
    </div>
  );
};

export default Loader;