import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ src, text, title, href }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={src} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>culture</span>
        </div>
        <Link href={href}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.desc}>{text}</p>
        <Link href={href} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
