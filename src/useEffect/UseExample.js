import React, { useState, useEffect } from "react";

export default function UseEffectExample() {

  const [name, setName] = useState("React Learning");
  console.log("render");
  useEffect(() => {
    document.title = name;
    console.log("something changed");
  },[name]);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName("Fahim")}>Fahim</button>
      <button onClick={() => setName("Tanvir")}>Tanvir</button>
      <button onClick={() => setName("Mahmud")}>Mahmud</button>
    </div>
  );
}
