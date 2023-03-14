import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import locationIcon from "./assets/locationIcon.svg";
import plusBtn from "./assets/plus.svg";
import star from "./assets/star.svg";
import starGray from "./assets/starGray.svg";
import styles from "./listings.module.scss";

const UserListings = () => {
  return (
    <div className={styles.userListingsPage}>
      <div className={styles.listingHeader}>
        <div className={styles.listingHeader__balance}>
          <h1>NGN 30,000 </h1>
          <p>Available Balance</p>
        </div>
        <div className={styles.listingHeader__withdraw}>
          <Button type="button" text="Withdraw" />
        </div>
      </div>
      <div className={styles.createListing}>
        <h3>My Listings</h3>
        <Link to="/user/new-listing" className={styles.createListing__button}>
          <img src={plusBtn} alt="" />
          <p>Create new listing</p>
        </Link>
      </div>
      <div className={styles.listings}>
        <div className={styles.listings__hr} />
        {[1, 2, 3, 4].map((itm) => (
          <>
            <div className={styles.listings__itemContainer}>
              <div className={styles.listings__item}>
                <div className={styles.listings__item__img}>
                  <img src="https://picsum.photos/200" alt="" />
                </div>
                <div className={styles.listings__item__details}>
                  <h3>Pleasure Pack</h3>
                  <div className={styles.listings__item__details__location}>
                    <img src={locationIcon} alt="location pin" />
                    <p>2933 Lekki Phase One, Lagos</p>
                  </div>
                  <div className={styles.listings__item__details__rating}>
                    {[1, 2, 3, 4].map((itm) => (
                      <img src={star} key={itm} alt="" />
                    ))}
                    <img src={starGray} alt="" />
                    <p>4.0 Ratings </p>
                  </div>
                </div>
              </div>
              <div className={styles.listings__itemContainer__buttons}>
                <Button type="button" text="Edit" bg="tertiary" />
                <Button type="button" text="Remove" bg="tertiary" />
              </div>
            </div>
            <div className={styles.listings__hr} />
          </>
        ))}
      </div>
    </div>
  );
};

export default UserListings;
