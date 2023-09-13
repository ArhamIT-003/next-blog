import React from "react";
import styles from "./categoryList.module.css";
import Category from "../category/Category";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular category</h1>
      <div className={styles.categories}>
        <Category
          href="/blog?cat=styles"
          src="/style.png"
          text="styles"
          bgColor="#57c4ff31"
        />
        <Category
          href="/blog?cat=travel"
          src="/travel.png"
          text="travel"
          bgColor="#da85c731"
        />
        <Category
          href="/blog?cat=food"
          src="/food.png"
          text="food"
          bgColor="#7fb88133"
        />
        <Category
          href="/blog?cat=fashion"
          src="/fashion.png"
          text="fashion"
          bgColor="#ff795736"
        />
        <Category
          href="/blog?cat=culture"
          src="/culture.png"
          text="culture"
          bgColor="#ffb04f45"
        />
        <Category
          href="/blog?cat=coding"
          src="/coding.png"
          text="coding"
          bgColor="#5e4fff31"
        />
      </div>
    </div>
  );
};

export default CategoryList;
