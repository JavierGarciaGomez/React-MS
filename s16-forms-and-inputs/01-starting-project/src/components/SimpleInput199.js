// 199

import { useEffect, useRef, useState } from "react";

const SimpleInput199 = (props) => {
  const [enteredName, setenteredName] = useState("");

  const nameInputChangeHandler = (e) => {
    setenteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    console.log("submitting");

    e.preventDefault();
    setenteredName("");
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput199;
