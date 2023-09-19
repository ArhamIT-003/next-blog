import React from "react";
import styles from "./commentlist.module.css";
import Image from "next/image";

const CommentList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/p1.jpeg"
          alt=""
          width={50}
          height={50}
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>John Doe</h1>
        <p className={styles.comment}>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default CommentList;
