import { React, useRef, useState } from "react";
import styles from "./VendorSignup.module.scss";

import Button from "../../components/Button";
import Nav from "../../components/Nav";

import upload from "./assets/upload.svg";

const VendorSignup = () => {
  // input states
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState("");
  const [businessname, setBusinessname] = useState("");
  const [bankDetails, setBankdetails] = useState(null);
  const [occupation, setOccupation] = useState("");
  const [uploadID, setUploadID] = useState({});

  // error states
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [businessnameError, setBusinessnameError] = useState(false);
  const [bankDetailsError, setBankdetailsError] = useState(false);
  const [occupationError, setOccupationError] = useState(false);
  const [uploadIDError, setUploadIDError] = useState(false);

  // regex for input  validation
  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const passwordTest = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/
  );
  const nameTest = new RegExp(/^[A-Za-z][0-9]{5,20}$/);
  const cityStateTest = new RegExp(/^[A-Za-z][0-9]{5,20}$/);
  const phoneNumberTest = new RegExp(
    /^[+]*[(]{0,3}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/
  );

  const selectFile = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "businessName":
        setBusinessname(value);
        break;
      case "bankNumber":
        setBankdetails(value);
        break;
      case "occupation":
        setOccupation(value);
        break;
      case "identification":
        setUploadID(value);
        break;

      default:
        break;
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const validateField = (name) => {
    let isValid = false;

    switch (name) {
      case "firstname":
        isValid = validateFirstname();
        break;
      case "lastname":
        isValid = validateLastname();
        break;
      case "address":
        isValid = validateAddress();
        break;
      case "city":
        isValid = validateCity();
        break;
      case "state":
        isValid = validateState();
        break;
      case "email":
        isValid = validateEmail();
        break;
      case "phoneNumber":
        isValid = validatePhonenumber();
        break;
      case "password":
        isValid = validatepassword();
        break;
      case "businessName":
        isValid = validateBusinessname();
        break;
      case "bankNumber":
        isValid = validateBankDetails();
        break;
      case "occupation":
        isValid = validateOccupation();
        break;
      case "identification":
        isValid = validateIdentification();
        break;

      default:
        break;
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setFirstnameError(false);
      setLastnameError(false);
      setAddressError(false);
      setCityError(false);
      setStateError(false);
      setEmailError(false);
      setPhoneNumberError(false);
      setPasswordError(false);
      setBusinessnameError(false);
      setBankdetailsError(false);
      setOccupationError(false);
      setUploadIDError(false);
    }, 4000);
  };

  const validateFirstname = () => {
    let firstnameError = "";
    const value = firstname;
    if (value.trim() === "") firstnameError = "Firstname is required";
    else if (!nameTest.test(value))
      firstnameError = "firstname must be atleast 5 characters";
    setFirstnameError(firstnameError);
    clearError();
    return firstnameError === "";
  };

  const validateLastname = () => {
    let lastnameError = "";
    const value = lastname;
    if (value.trim() === "") lastnameError = "Lastname is required";
    else if (!nameTest.test(value))
      lastnameError = "Lastname must be atleast 5 characters";
    setLastnameError(lastnameError);
    clearError();
    return lastnameError === "";
  };

  const validateAddress = () => {
    let addressError = "";
    const value = address;
    if (value.trim() === "") addressError = "Address is requred";

    setAddressError(addressError);
    clearError();
    return addressError === "";
  };

  const validateCity = () => {
    let cityError = "";
    const value = city;
    if (value.trim() === "") cityError = "City is requred";
    else if (!cityStateTest.test(value)) cityError = "Pls add a valid address";
    setCityError(cityError);
    clearError();

    return cityError === "";
  };

  const validateState = () => {
    let stateError = "";
    const value = state;
    if (value.trim() === "") stateError = "State is requred";
    else if (!cityStateTest.test(value)) stateError = "Pls add a valid address";
    setStateError(stateError);
    clearError();

    return stateError === "";
  };

  const validateEmail = () => {
    let emailError = "";
    const value = email;
    if (value.trim() === "") emailError = "Email is required";
    else if (!emailTest.test(value)) emailError = "Enter a valid email";
    setEmailError(emailError);
    clearError();
    return emailError === "";
  };

  const validatePhonenumber = () => {
    let phoneNumberError = "";
    const value = phoneNumber;

    if (value === null) phoneNumberError = "Phone number is required";
    else if (!phoneNumberTest.test(value))
      phoneNumberError = "Enter a valid mobile number";
    setPhoneNumberError(phoneNumberError);
    clearError();
    return phoneNumberError === "";
  };

  const validatepassword = () => {
    let passwordError = "";
    const value = password;

    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordTest.test(value))
      passwordError =
        "Password must be atleast 8 characters 1 uppercase and lowercase";

    setPasswordError(passwordError);
    clearError();
    return passwordError === "";
  };

  const validateBusinessname = () => {
    let businessnameError = "";
    const value = businessname;

    if (value.trim() === "") businessnameError = "Business name is required";
    setBusinessnameError(businessnameError);
    clearError();
    return businessnameError === "";
  };

  const validateBankDetails = () => {
    let bankDetailsError = "";
    const value = bankDetails;

    if (value === null) bankDetailsError = "Pls add your bank details";
    setBankdetailsError(bankDetailsError);
    return bankDetailsError === "";
  };

  const validateOccupation = () => {
    let occupationError = "";
    const value = occupation;

    if (value.trim() === "") occupationError = "Occupation is required";
    setOccupationError(occupationError);
    clearError();

    return occupationError === "";
  };

  const validateIdentification = () => {
    let uploadIDError = "";

    const value = uploadID;
    if (value.length === undefined) uploadIDError = "A means of ID is required";
    setUploadIDError(uploadIDError);
    clearError();

    return uploadIDError === "";
  };

  const handleSelectFile = (e) => {
    selectFile.current.click();
    setUploadID(e.target?.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formFields = [
      "firstname",
      "lastname",
      "address",
      "city",
      "state",
      "email",
      "password",
      "phoneNumber",
      "businessName",
      "bankNumber",
      "occupation",
      "identification",
    ];

    let isValid = true;
    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });
  };

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_container}>
            <div className={styles.left_form}>
              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {firstnameError && <p>{firstnameError}</p>}
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {lastnameError && <p>{lastnameError}</p>}
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {addressError && <p>{addressError}</p>}
              </div>

              <div className={styles.input_container}>
                <div className={styles.inputs}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {cityError && <p>{cityError}</p>}
                </div>
                <div className={styles.inputs}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {stateError && <p>{stateError}</p>}
                </div>
              </div>

              <div className={styles.inputs}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {emailError && <p>{emailError}</p>}
              </div>

              <div className={styles.inputs}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {phoneNumberError && <p>{phoneNumberError}</p>}
              </div>

              <div className={styles.inputs}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {passwordError && <p>{passwordError}</p>}
              </div>
            </div>

            <div className={styles.right_form}>
              <div className={styles.inputs}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {businessnameError && <p>{businessnameError}</p>}
              </div>

              <div className={styles.banking}>
                <label htmlFor="bank">Banking Information</label>
                <select name="bank" id="">
                  <option value="select">Select</option>
                  <option value="bank"></option>
                </select>
                <p>
                  Banking information should tally with the details on your ID
                </p>

                <input
                  type="number"
                  name="bankNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <div className={styles.inputs}>
                <label htmlFor="occupation">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {occupationError && <p>{occupationError}</p>}
              </div>

              <div className={styles.identification}>
                <label htmlFor="identification">Identification</label>
                <p>
                  Upload a photo of your NIN or other government approved ID
                </p>
                <input
                  type="file"
                  name="identification"
                  accept="image/*"
                  ref={selectFile}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  hidden
                />
                <div className={styles.upload} onClick={handleSelectFile}>
                  <img src={upload} alt="upload" />
                  Upload your ID
                </div>
                {uploadIDError && <p>{uploadIDError}</p>}
              </div>
            </div>
          </div>
          <Button type="submit" text="Sign Up" />
        </form>
      </div>
    </>
  );
};

export default VendorSignup;
