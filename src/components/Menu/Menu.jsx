import React from "react";
import styles from "./menu.module.css";
import MenuList from "./MenuList";

const Menu = () => {
  return (
    <div className={styles.container}>
      <MenuList subTitle="What's hot" title="Most Popular" />
      <MenuList subTitle="chosen by the editor" title="Editor's Choice" />
    </div>
  );
};

export default Menu;
