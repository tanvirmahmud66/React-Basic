import React, { useState } from "react";
import { data } from "../Data";
import List from "./List";


export default function PropsDrill() {
  const [people, setPeople] = useState(data);
  
  const removeItem = (id) =>{
    setPeople((people)=>{
      return people.filter((person)=>person.id !== id);
    })
  }

  return <section>
    <List people={people} removeItem={removeItem}/>
  </section>;
}
