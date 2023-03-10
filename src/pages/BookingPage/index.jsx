import React, { useState } from "react";
import styles from "./BookingPage.module.scss";
import HomeNavbar from "../../components/HomeNavbar";
import { Link } from "react-router-dom";
import backArrow from "./assets/211686_back_arrow_icon 1.png";
import Item from "./Item";

const BookingPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <div className={styles.BookingPage}>
        <HomeNavbar bg={"#FAFAFA"} />
        <main>
          <header>
            <Link className={styles.Link} to="/results">
              <img src={backArrow} alt="" />
              <p>Back to results</p>
            </Link>
            <h2>Booking</h2>
          </header>
          <form action=".">
            <section className={styles.user_details}>
              <div className={styles.input_text}>
                <label htmlFor="name" className="">
                  Enter Your Full Name
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className={styles.input_text}>
                <label htmlFor="phoneNumber" className="">
                  Enter Your Phone Number
                </label>
                <input
                  name="phoneNumber"
                  id="phoneNumber"
                  type="text"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </section>
            <section className={styles.items}>
              <Item />
              <Item />
            </section>
          </form>
        </main>
      </div>
    </>
  );
};

export default BookingPage;
