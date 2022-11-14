import React, { useState } from "react";

export default function LastOne() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [people, setPeople] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    if (firstName && secondName) {
      const person = {
        firstName: firstName,
        secondName: secondName,
      };
      setPeople((each) => {
        return [...each, person];
      });
      setFirstName("");
      setSecondName("");
    }
  };

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="FirstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="secondName">Second Name</label>
          <input
            type="text"
            placeholder="secondName"
            name="secondName"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
          />
        </div>
        <button type="submit"> Add people</button>
      </form>
      <div>
        {people.map((each) => {
          const {id,firstName, secondName} = each;
          return (
            <div key={id}>
              <h3>FullName:{`${firstName} ${secondName}`}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
