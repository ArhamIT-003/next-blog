"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image
            src="/plus.png"
            alt=""
            width={16}
            height={16}
            className={styles.img}
          />
        </button>
        {open && (
          <div className={styles.clickBtn}>
            <button className={styles.addBtn}>
              <Image
                src="/external.png"
                alt=""
                width={16}
                height={16}
                className={styles.img}
              />
            </button>
            <button className={styles.addBtn}>
              <Image
                src="/video.png"
                alt=""
                width={16}
                height={16}
                className={styles.img}
              />
            </button>
            <button className={styles.addBtn}>
              <Image
                src="/image.png"
                alt=""
                width={16}
                height={16}
                className={styles.img}
              />
            </button>
          </div>
        )}
        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell me your story"
          className={styles.textArea}
        />
      </div>
      <button className={styles.btn}>Publish</button>
    </div>
  );
};

export default WritePage;
