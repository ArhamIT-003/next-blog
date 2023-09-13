import Image from "next/image";
import React from "react";
import styles from "./menuContent.module.css";

const MenuContent = ({ username, date, category, src, title }) => {
  const categoryStyle =
    category === "travel"
      ? { backgroundColor: "#ff7857", width: "max-content" }
      : category === "culture"
      ? { backgroundColor: "#ffb147", width: "max-content" }
      : category === "food"
      ? { backgroundColor: "#7fb881", width: "max-content" }
      : category === "fashion"
      ? { backgroundColor: "#ff7887", width: "max-content" }
      : category === "coding"
      ? { backgroundColor: "#775aec", width: "max-content" }
      : category === "style" && {
          backgroundColor: "#789cff",
          width: "max-content",
        };

  return (
    <div className={styles.item}>
      {src && (
        <div className={styles.imgContainer}>
          <Image src={src} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <span className={`${styles.category}`} style={categoryStyle}>
          {category}
        </span>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span className={styles.username}>{username}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
