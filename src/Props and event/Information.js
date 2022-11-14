import React from "react";

//data
// const name = "Tanvir Mahmud Fahim";
const department = "Computer Science and Engineering";
const institution = "Stamford University Bangladesh";
const job = "Software Developer";
const organization = "Dynamic Megasoft Limited";
const email = "tanvir@dymesoft.com";

//data Object
const data = {
  name: "Jerin Tasnim",
  department: "Computer Science and Engineering",
  institution: "Stamford University Bangladesh",
  email: "jerin@dymesoft.com",
};

//function
const Info = (props) => {
  return (
    <div>
      <p style={{color:"crimson"}}>------information status--------</p>
      <h2>{props.name}</h2>
      <h4>{props.department}</h4>
      <h4>{props.institution}</h4>
      <h4>{props.job}</h4>
      <h4>{props.organization}</h4>
      <h4>{props.email}</h4>
      {props.children}

      <hr />
    </div>
  );
};

// Main function================

function Information(props) {
  console.log(props);
  return (
    <main>
      <Info
        name={props.name}
        department={department}
        institution={institution}
        Job={job}
        organization={organization}
        email={email}
      >
        <p>Experience: I have an Office experience of software Developer</p>
      </Info>
      <Info
        name={data.name}
        department={data.department}
        institution={data.institution}
        email={data.email}
      />
      <Info />
      <Info
        name={data.name}
        email={data.email}
      >
        <p>Experience: I have no Experience :P</p>
      </Info>
    </main>
  );
}
export default Information;
