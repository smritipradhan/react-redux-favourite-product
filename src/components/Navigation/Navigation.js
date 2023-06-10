import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
      >
        <div>Heroes</div>
      </NavLink>
      <NavLink
        to="/favourite"
        className={({ isActive }) =>
          isActive ? styles.active : styles.inactive
        }
      >
        <div>Favorite</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
