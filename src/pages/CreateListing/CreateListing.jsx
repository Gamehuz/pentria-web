import {React, useRef} from "react";
import styles from "./CreateListing.module.scss";

import InputField from "../../components/InputField";
import Button from "../../components/Button";
import NavbarAuth from "../../components/NavbarAuth";
import Menu from "./Menu/Menu";

import upload from "./assets/upload.svg"

const CreateListing = () => {
    const selectFile = useRef();

    const handleSelectFile = (e) => {
      selectFile.current.click();
      setUploadID(e.target?.files[0]);
    };
  return (
    <>
      <NavbarAuth />
      <div className={styles.createlist_container}>
        <h1>Create a new listing </h1>

        <form>
          <div className={styles.input_content}>
            <label htmlFor="name">Name</label>
            <InputField name="name" type="text" />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Address</label>
            <InputField name="address" type="text" />
          </div>
          <div className={styles.input_content}>
            <label htmlFor="name">Category</label>
            <InputField name="category" type="text" />
          </div>
          <div className={styles.input_content_text}>
            <label htmlFor="name">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={styles.input_content_text}>
            <label htmlFor="name">Policy</label>
            <textarea name="policy" id="policy" cols="30" rows="10"></textarea>
          </div>
          <div className={styles.input_content_img}>
            <label htmlFor="name">Add up to 6 images</label>
            <input
            //   onChange={handleChange}
            //   onBlur={handleBlur}
              type="file"
              name="identification"
              accept="image/*"
              ref={selectFile}
              hidden
            />
            <div className={styles.upload} onClick={handleSelectFile}>
              <img src={upload} alt="upload" />
              Upload your ID
            </div>
          </div>

          <div className={styles.features}>
            <h4>Features</h4>
            <div className={styles.feat}>
              <div className={styles.features_content}>
                <input type="checkbox" name="pool" id="pool" />
                <p>Pool</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="wifi" id="wifi" />
                <p>Wifi</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="parkingSpace" id="parkingSpace" />
                <p>Parking Space</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="outdoorSpace" id="outdoorSpace" />
                <p>Outdoor Space</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="kitchen" id="kitchen" />
                <p>Kitchen</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="ac" id="ac" />
                <p>A.c</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="videoGames" id="videoGames" />
                <p>Video Games</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="petFriendly" id="petFriendly" />
                <p>Pet Friendly </p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  n
                  ame="cleaningSupplies"
                  id="cleaningSupplies"
                />
                <p>Cleaning Supplies</p>
              </div>
              <div className={styles.features_content}>
                <input
                  type="checkbox"
                  name="tabletopGames"
                  id="tabletopGames"
                />
                <p>Tabletop Games</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="kidFriendly" id="kidFriendly" />
                <p>Kid-Friendly</p>
              </div>
              <div className={styles.features_content}>
                <input type="checkbox" name="workspace" id="workspace" />
                <p>workspace</p>
              </div>
            </div>
          </div>

          <Button text="create listing" />
              </form>
              <Menu />
      </div>
    </>
  );
};

export default CreateListing;
