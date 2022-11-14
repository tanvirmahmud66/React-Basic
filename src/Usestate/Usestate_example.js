import React, { useState } from "react";

export default function UseStateExample() {
  const [name, setName] = useState("Tanvir Mahmud Fahim");

  const nameChange = () => {
    if (name === "Tanvir Mahmud Fahim") {
      setName("Computer Science and Engineering");
    } else {
      setName("Tanvir Mahmud Fahim");
    }
  };

  const [work, setWork] = useState("Software Developer");
  //if we don't declare the useSate in the top then
  // const [work, setWork] = React.useState([])
  //this useState will have the default value
  const workChange = ()=>{
    if(work ==="Software Developer"){
        setWork("Dynamic Megasoft Limited");
    }else{
        setWork("Software Developer");
    }
  }

  return (
    <div>
      <h1>{name}</h1>
      <button type="button" onClick={nameChange}>
        See
      </button>
      <hr />
      <h1>{work}</h1>
      <button type="button" onClick={workChange}>
        see
      </button>
    </div>
  );
}
