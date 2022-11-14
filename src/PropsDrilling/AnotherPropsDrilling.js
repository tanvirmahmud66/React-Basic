import React, { useState } from "react";
import { data } from "../Data";

export default function AnotherPropsDrilling() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people)=>{
        return people.filter((person)=>person.id !== id);
    })
  }

  return (
    <section>
      <List people={people} removeItem={removeItem}/>
    </section>
  );
}

const List = ({people, removeItem}) => {
  return (
    <div>
        {people.map((each)=>{
           return <ListItem key={each.id} {...each} removeItem={removeItem}/>
        })}
    </div>
  );
};

const ListItem = ({id,name, removeItem}) => {
  return <div>
    <p>{id}</p>
    <h3>{name}</h3>
    <button onClick={()=>removeItem(id)}>remove</button>
  </div>;
};
