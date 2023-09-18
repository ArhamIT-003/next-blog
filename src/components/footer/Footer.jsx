import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <Image
            src="/logo.png"
            alt=""
            width={30}
            height={30}
            className={styles.img}
          />
          <h4 className={styles.name}>ArhamLogs</h4>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            corporis explicabo omnis, soluta reprehenderit quidem tenetur, modi
            adipisci officiis recusandae pariatur ipsum eaque porro distinctio
            dolores harum temporibus quo ut.
          </p>
        </div>
        <div className={styles.links}>
          <Image src="/facebook.png" alt="" width={24} height={24} />
          <Image src="/instagram.png" alt="" width={24} height={24} />
          <Image src="/tiktok.png" alt="" width={24} height={24} />
          <Image src="/youtube.png" alt="" width={24} height={24} />
        </div>
      </div>
      <div className={styles.pages}>
        <FooterLink
          title="Links"
          link1={"homepage"}
          link2={"contact"}
          link3={"blog"}
          link4={"about"}
        />
        <FooterLink
          title="tags"
          link1={"style"}
          link2={"fashion"}
          link3={"coding"}
          link4={"travel"}
        />
        <FooterLink
          title="socials"
          link1={"facebook"}
          link2={"instagram"}
          link3={"tiktok"}
          link4={"youtube"}
        />
      </div>
    </div>
  );
};

export default Footer;
