"use client";
import React, { useContext } from "react";
import styles from "./mode.module.css";
import { ThemeContext } from "@/context/ThemeContext";

const Mode = () => {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div style={{ cursor: "pointer" }}>🌙</div>
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <div style={{ cursor: "pointer" }}>☀️</div>
    </div>
  );
};

export default Mode;
