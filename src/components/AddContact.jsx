import { useState } from "react";
import PropTypes from "prop-types";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler({ name, email, guid: Math.random().toString() });
    // Clear the form
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field ">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field ">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="ui button blue">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

AddContact.prototype = {
  addContactHandler: PropTypes.func.isRequired,
};

export default AddContact;
