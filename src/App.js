import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const onSubmit = () => {
    alert("form submitted");
  };
  return (
    <div>
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <p> {fullName.email} </p>
      <p> {fullName.phone} </p>
      <input
        type="text"
        placeholder="Enter your first name"
        name="fName"
        onChange={inputEvent}
        value={fullName.fName}
      />
      <input
        type="text"
        placeholder="Enter your last name"
        name="lName"
        onChange={inputEvent}
        value={fullName.lName}
      />
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={inputEvent}
        value={fullName.email}
      />
      <input
        type="number"
        placeholder="Enter your phone number"
        name="phone"
        onChange={inputEvent}
        value={fullName.phone}
      />
      <button onClick={onSubmit}> SUBMIT </button>
    </div>
  );
};

export default App;
