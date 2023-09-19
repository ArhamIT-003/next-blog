import React from "react";
import styles from "./comments.module.css";
import CommentList from "./CommentList";

const Comments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTitle}>
        <h1 className={styles.title}>Comments</h1>
      </div>

      <div className={styles.inputComment}>
        <div className={styles.input}>
          <input className={styles.input} placeholder="Write a text ..." />
        </div>
        <div className={styles.btn}>
          <button className={styles.addBtn}>send</button>
        </div>
      </div>

      <div className={styles.comments}>
        <CommentList />
        <CommentList />
        <CommentList />
      </div>
    </div>
  );
};

export default Comments;
