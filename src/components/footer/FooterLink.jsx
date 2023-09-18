import Link from "next/link";
import React from "react";
import styles from "./footerlink.module.css";

const FooterLink = ({ title, link1, link2, link3, link4 }) => {
  return (
    <div className={styles.link}>
      <b className={styles.title}>{title}</b>
      <Link href={`/${link1}`}>{link1}</Link>
      <Link href={`/${link2}`}>{link2}</Link>
      <Link href={`/${link3}`}>{link3}</Link>
      <Link href={`/${link3}`}>{link4}</Link>
    </div>
  );
};

export default FooterLink;
