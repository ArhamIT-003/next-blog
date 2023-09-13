import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit</b> Doloribus
        adipisci maiores facere enim corrupti officiis.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.desc}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
          <p className={styles.postSummary}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            laboriosam? Libero quaerat natus nostrum et, distinctio vitae ipsum
            delectus consequatur, quae assumenda deleniti nulla amet officiis.
            Perspiciatis dolor, repudiandae iure ad nam voluptatibus minus vero
            deleniti voluptas quos aliquid a corporis tempora nobis! Itaque
            laboriosam id minima doloremque dolor nihil.
          </p>
          <Link href="/" className={styles.postBtn}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
