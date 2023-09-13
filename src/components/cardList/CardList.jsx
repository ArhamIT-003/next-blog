import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../Card/Card";

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recents Posts</h1>
      <div className={styles.posts}>
        <Card
          href="/blog/culture"
          src="/p1.jpeg"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
          est sit fugiat necessitatibus, inventore itaque facere, nisi accusamus
          vitae omnis illum."
          title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
        <Card
          href="/blog/culture"
          src="/p1.jpeg"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit,
          est sit fugiat necessitatibus, inventore itaque facere, nisi accusamus
          vitae omnis illum."
          title="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
