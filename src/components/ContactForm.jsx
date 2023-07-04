import React, { useState } from "react";

const ContactForm = ({ addContacts }) => {
  const [inputVal, setInputVal] = useState("");
  const [inputVal2, setInputVal2] = useState("");
  const [inputVal3, setInputVal3] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputVal.trim() || !inputVal2.trim() || !inputVal3.trim()) {
          return;
        }
        const newContacts = {
          id: Date.now(),
          name: inputVal,
          surname: inputVal2,
          phone: inputVal3,
        };
        addContacts(newContacts);
        setInputVal("");
        setInputVal2("");
        setInputVal3("");
      }}
    >
      <h1>Contacts Form</h1>
      <div className="inputContainer">
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          value={inputVal}
          required="required"
          id="inputField"
          placeholder="Username"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <input
          onChange={(e) => {
            setInputVal2(e.target.value);
          }}
          value={inputVal2}
          required="required"
          id="inputField"
          placeholder="LastName"
          type="text"
        />
      </div>
      <div className="inputContainer">
        <input
          onChange={(e) => {
            setInputVal3(e.target.value);
          }}
          value={inputVal3}
          required="required"
          id="inputField"
          placeholder=" Phone+"
          type="number"
        />
      </div>
      <button className="form-button">
        <span>Button</span>
      </button>
    </form>
  );
};

export default ContactForm;
