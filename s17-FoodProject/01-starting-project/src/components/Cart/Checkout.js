// 218
import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";

// 220
const isNotEmpty = (value) => value.trim() !== "";
const hasMinThreeChars = (value) => value.trim().length >= 3;

const Checkout = ({ toggleForm, submitOrderHandler }) => {
  // 220
  const [formsInputValidity, setformsInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  // 219
  const nameInputRef = useRef("");
  const streetInputRef = useRef("");
  const postalInputRef = useRef("");
  const cityInputRef = useRef("");

  const [isFormValid, setisFormValid] = useState(false);

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = hasMinThreeChars(enteredName);
    const enteredStreetIsValid = isNotEmpty(enteredStreet);
    const enteredPostalIsValid = hasMinThreeChars(enteredPostal);
    const enteredCityIsValid = hasMinThreeChars(enteredCity);

    setformsInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    if (
      !enteredNameIsValid &&
      !enteredStreetIsValid &&
      !enteredPostalIsValid &&
      !enteredCityIsValid
    ) {
      setisFormValid(false);
      return;
    } else {
      // 221
      submitOrderHandler({
        name: enteredName,
        street: enteredStreet,
        postal: enteredPostal,
        city: enteredCity,
      });
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formsInputValidity.name ? "" : classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formsInputValidity.name && <p>Incorrect input</p>}
      </div>
      <div
        className={`${classes.control} ${
          formsInputValidity.street ? "" : classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formsInputValidity.street && <p>Incorrect input</p>}
      </div>
      <div
        className={`${classes.control} ${
          formsInputValidity.postal ? "" : classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formsInputValidity.postal && <p>Incorrect input</p>}
      </div>
      <div
        className={`${classes.control} ${
          formsInputValidity.city ? "" : classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formsInputValidity.city && <p>Incorrect input</p>}
      </div>
      <div className={classes.actions}>
        <button onClick={toggleForm}>Close</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
