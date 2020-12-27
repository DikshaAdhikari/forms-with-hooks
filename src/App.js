import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
    setName("");
  };
  return (
    <div>
      <h1>Hello {fullName}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={inputEvent}
        value={name}
      />
      <button onClick={onSubmit}> CLICK ME </button>
    </div>
  );
};

export default App;
