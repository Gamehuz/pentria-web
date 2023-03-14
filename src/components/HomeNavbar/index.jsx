import React from "react";
import { Link } from "react-router-dom";
import mobileMenu from "./assets/menu-hamburger.svg";
import styles from "./homenav.module.scss";

const HomeNavbar = ({ bg }) => {
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div
      className={`${toggleNav ? styles.activeHomeNav : ""} ${
        styles.homeNavbar
      } ${bg ? bg : styles.defaultBg}`}
    >
      <h1 className={styles.homeNavbarLogo}>
        <Link to="/">Pentria</Link>
      </h1>
      <div className={`${styles.HomeNavbar_container} }`}>
        <ul className={styles.homeNavbarLinks}>
          <li className={styles.homeNavbarLink}>
            <a href="#">Partners</a>
          </li>
          <li className={styles.homeNavbarLink}>
            <a href="#">About</a>
          </li>
          <li className={styles.homeNavbarLink}>
            <a href="#">Enquiries</a>
          </li>
          <li className={styles.homeNavbarLink}>
            <a href="#">Blog</a>
          </li>
        </ul>
        <div className={styles.homeNavbar_btn}>
          <div className={styles.homeNavbar_login}>LOGIN</div>
          <div className={styles.homeNavbar_signup}>
            <a href="#">SIGN UP</a>
          </div>
        </div>
      </div>
      <div
        className={styles.mobile_menu}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <img src={mobileMenu} alt="mobile-menu" />
      </div>
    </div>
  );
};

export default HomeNavbar;
