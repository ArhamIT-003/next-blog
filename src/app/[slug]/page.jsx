import React from "react";
import styles from "./singlepage.module.css";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/Comments/Comments";
import Image from "next/image";

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlog}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.author}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.img}
            />
            <div className={styles.authorDes}>
              <h3 className={styles.authorName}>William Randolph</h3>
              <p className={styles.publish}>25 April 2023</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
            voluptates nam maxime natus eius aut nulla, dignissimos magni
            eligendi cumque, ea odio unde sed sint minus, dolor eveniet vel.
            Enim, eum non! Voluptatem tempore corporis molestias numquam iure
            excepturi nihil.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            dicta quibusdam sint, consectetur atque earum itaque ipsam a
            deserunt perferendis illo quaerat. Eveniet sed nemo tenetur commodi,
            sint, omnis, saepe voluptas architecto soluta ipsum assumenda dolor
            quam sunt corrupti vitae accusantium at delectus. Aliquid tempora
            minus fugiat perferendis aspernatur asperiores fuga voluptas a.
            Voluptatibus repudiandae cum repellendus et fuga nemo!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            maxime distinctio possimus nostrum soluta animi inventore beatae
            illo deserunt ad.
          </p>
          <Comments />
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SingleBlogPage;
