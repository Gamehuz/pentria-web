import React from "react";
import styles from "./home.module.scss";
import HomeNavbar from "../../components/HomeNavbar";
import EntryHome from "./components/EntryHomePage";
import Explore from "./components/Explore";
import PartnersAndFAQ from "./components/PartnersAndFAQ.jsx";
import Footer from "../../components/Footer";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <HomeNavbar />
      <EntryHome />
      <Explore />
      <PartnersAndFAQ />
      <Footer />
    </div>
  )
};

export default Homepage;
