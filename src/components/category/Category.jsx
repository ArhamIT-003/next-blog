import React from "react";
import styles from "./category.module.css";
import Link from "next/link";
import Image from "next/image";

const Category = ({ href, src, text, bgColor }) => {
  return (
    <Link
      href={href}
      className={`${styles.category}`}
      style={{ backgroundColor: bgColor }}
    >
      <Image src={src} alt="" width={32} height={32} className={styles.image} />
      {text}
    </Link>
  );
};

export default Category;
