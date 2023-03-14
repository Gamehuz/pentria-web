import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./userSidebar.module.scss";

import { useSelector } from "react-redux";
import { dispatch } from "../../redux/store";
import { setToggleSidebar } from "../../redux/utils/UtilSlice";
import Button from "../Button";

/**
 * Wrap your component with this component to get a sidebar with a list of links.
 * @param {closeSidebar} function
 * use this prop to close the sidebar on mobile screens
 * @param {toggleSidebar} boolean
 * use this prop to determine if the sidebar should be open or closed on mobile screens when the hamburger icon is clicked from navbar
 * @returns a wrapper component with a sidebar and all the props passed to it
 */
function UserSidebar({ children }) {
  // const { user } = useSelector((state) => state.user);
  const { toggleSidebar } = useSelector((state) => state.util);

  const handleCloseSidebar = () => {
    dispatch(setToggleSidebar(false));
  };

  return (
    <div
      className={`${styles.userSidebar}
      } ${toggleSidebar ? styles.showSidebar : ""} `}
    >
      <div className={styles.userSidebar_header}>
        <div className={styles.userSidebar_itemsFlex}>
          <div className={styles.userSidebar_header_logo_vs_closeIcon}>
            <h1>Dashboard</h1>
          </div>

          <div className={styles.navLinks}>
            <NavLink
              to="/user/dashboard?checkpoint=listings"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=listings"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>Listing</p>
            </NavLink>
            <NavLink
              to="/user/dashboard?checkpoint=earnings"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=earnings"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>Earnings</p>
            </NavLink>
            <NavLink
              to="/user/dashboard?checkpoint=withdrawals"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=withdrawals"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>Withdrawals</p>
            </NavLink>
            <NavLink
              to="/user/dashboard?checkpoint=favorites"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=favorites"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>Favorites</p>
            </NavLink>
            <NavLink
              to="/user/dashboard?checkpoint=history"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=history"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>History</p>
            </NavLink>

            <NavLink
              to="/user/dashboard?checkpoint=settings"
              className={`${styles.navLink} ${
                window.location.pathname === "/user/dashboard" &&
                window.location.search === "?checkpoint=settings"
                  ? styles.active
                  : ""
              }`}
              onClick={handleCloseSidebar}
            >
              <p>Settings</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.userSidebar__bottom}>
          <Button text="LOGOUT" />
        </div>
      </div>
      <div className={styles.rightChild}>{children}</div>
    </div>
  );
}

export default UserSidebar;
