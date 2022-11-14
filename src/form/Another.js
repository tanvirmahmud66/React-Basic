import React, { useState } from "react";

export default function Another() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [users, setUsers] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if (name && email && contact) {
      const person = {
        name: name,
        email: email,
        contact: contact
      }
      setUsers((people) => {
        return [...people, person];
      });
      setContact("");
      setUsers("");
      setEmail("");
    }
  };

  return (
    <div>
      <form onClick={formHandler}>
        <div>
          <label htmlFor="name" id="fullName">
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" id="emailAddress">
            Email:{" "}
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="contact" id="contact">
            Contacts:{" "}
          </label>
          <input
            type="text"
            name="contact"
            placeholder="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
      <div>
        {users.map((each) => {
          const { id, name, email, contact } = each;
          return (
            <div key={id}>
              <h1>Name: {name}</h1>
              <p>Email: {email}</p>
              <p>Contact: {contact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
