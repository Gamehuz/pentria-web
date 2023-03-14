import { React, useRef } from "react";
import styles from "./Menu.module.scss";

import InputField from "../../../components/InputField";
import Button from "../../../components/Button";

import upload from "../assets/upload.svg";

const Menu = () => {
  const selectFile = useRef();

  const handleSelectFile = (e) => {
    selectFile.current.click();
    setUploadID(e.target?.files[0]);
  };

  return (
    <div className={styles.menu_container}>
      <h2>Menu</h2>
      <form>
        <div className={styles.input_content}>
          <label htmlFor="name">Name</label>
          <InputField name="name" type="text" />
        </div>

        <div className={styles.input_content_hr}>
          <label htmlFor="name">Price</label>
          <div>
            <h1>NGN</h1>
            <InputField name="price" type="text" />
            <div>
              <div>Hr</div>
              <div>Min</div>
            </div>
          </div>
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
        <Button text="save"/>
      </form>
    </div>
  );
};

export default Menu;
