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
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: prevValue.phone
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          phone: prevValue.phone
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          phone: prevValue.phone
        };
      } else if (name === "phone") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: value
        };
      }
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
