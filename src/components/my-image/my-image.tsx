import React from "react";
import styles from "./styles.module.css";

export default function MyImage() {
  return (
    <div className={styles.myImage}>
      <img width={200} alt="my picture" src="/img/me.png" />
    </div>
  );
}
