import React, { useState } from "react";
import "../form/BigOne.css";

export default function BigOne() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);


  const formHandler = (e) => {
    e.preventDefault();
    if(firstName && secondName && email){
        const person = {
            firstName: firstName,
            secondName: secondName,
            email: email,
            password: password
        }
        setUsers((e)=>{
            return [...e,person];
        })

        setFirstName('');
        setSecondName('');
        setEmail('');
        setPassword('');

    }
  };

  return (
    <div className="container">
      <>
        <form className="Form-wrapper" onSubmit={formHandler}>
          <div className="input-field">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              placeholder="FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="secondName">Last Name: </label>
            <input
              type="text"
              name="secondName"
              placeholder="secondName"
              value={secondName}
              onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label htmlFor="pass-word">Password: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            Add People
          </button>
        </form>
        <div className="Output-section">
            {
                users.map((each)=>{
                    const {firstName,secondName,email,password} = each
                    return(
                        <div>
                            <h3>{firstName}</h3>
                            <h3>{secondName}</h3>
                            <h3>{email}</h3>
                        </div>
                    );
                })
            }
        </div>
      </>
    </div>
  );
}
