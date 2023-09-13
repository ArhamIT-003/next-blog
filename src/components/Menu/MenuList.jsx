import React, { Fragment } from "react";
import MenuContent from "./MenuContent"; // Assuming the correct file name is "MenuContent"
import styles from "./menulist.module.css";

const MenuList = ({ subTitle, title }) => {
  return (
    <Fragment>
      <h2 className={styles.subTitle}>{subTitle}</h2>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.items}>
        {title === "Most Popular" ? (
          <>
            <MenuContent
              username="John Doe"
              date="11-02-2023"
              category={"travel"}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <MenuContent
              username="John Doe"
              date="11-02-2023"
              category={"coding"}
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </>
        ) : title === "Editor's Choice" ? (
          <>
            <MenuContent
              username="John Doe"
              date="11-02-2023"
              category={"culture"}
              src="/p1.jpeg"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <MenuContent
              username="John Doe"
              date="11-02-2023"
              category={"culture"}
              src="/p1.jpeg"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
            <MenuContent
              username="John Doe"
              date="11-02-2023"
              category={"culture"}
              src="/p1.jpeg"
              title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </>
        ) : null}
      </div>
    </Fragment>
  );
};

export default MenuList;
