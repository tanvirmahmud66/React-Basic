import React, { useState, useEffect } from "react";

export default function AnotherDemo() {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1> This is the Fetching Data from api request..</h1>
      <ul>
        {users.map((each) => {
          const { id, name, username, email, phone, website } = each;
          const { street, suite, city, zipcode } = each.address;
          const { lat, lng } = each.address.geo;
          const { companyName, catchPhrase, bs } = each.company;

          return (
            <div key={id}>
              <p>Id: {id}</p>
              <h1>Id: {name}</h1>
              <h3>Id: {username}</h3>
              <h3>Id: {email}</h3>
              <p>
                Address:
                <p>street: {street}</p>
                <p>suite: {suite}</p>
                <p>city: {city}</p>
                <p>ZipCode: {zipcode}</p>
                <h4>
                  Geo:
                  <p>Lat: {lat}</p>
                  <p>lng: {lng}</p>
                </h4>
              </p>
              <h3>Phone: {phone}</h3>
              <h3>website: {website}</h3>
              <p>
                Company:
                <p>Company Name: {companyName}</p>
                <p>Catch Phrase: {catchPhrase}</p>
                <p>BS: {bs}</p>
              </p>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
