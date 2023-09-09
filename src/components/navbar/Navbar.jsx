import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Mode from "../Mode/Mode";
import AuthLinks from "../AuthLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
      </div>
      <div className={styles.title}>ArhamBlogs</div>
      <div className={styles.links}>
        <Mode />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
