import React from "react";
import FrameworkCard from "../framework-card/framework-card";
import frameworks from "../../frameworks";
import styles from "./styles.module.css";

export default function FrameworkList() {
  return (
    <div className={styles.frameworks}>
      {frameworks.map((framework) => (
        <FrameworkCard {...framework} />
      ))}
    </div>
  );
}
