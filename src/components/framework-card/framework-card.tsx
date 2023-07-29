import React from "react";
import styles from "./styles.module.css";

export default function FrameworkCard({ name, alt, src }) {
  return (
    <div className={`${styles.framework} card`}>
      <img src={src} alt={alt} />
      <p className="pills__item pills__item--active margin-bottom--sm">
        {name}
      </p>
    </div>
  );
}
