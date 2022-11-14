import React from "react";
import { data } from "./Data";

export default function UseState() {
    const [people, setPeople] = React.useState(data);
    const removeHandler = (id)=>{
        const newPeople = people.filter((each)=>each.id !== id);
        setPeople(newPeople);
    }
  return (
    <div>
      {people.map((each) => {
        const { id, name, tittle } = each;
        return <div key={id}>
            <h1>{name}</h1>
            <p>{tittle}</p>
            <button onClick={()=>removeHandler(id)}>remove</button>
        </div>;
      })}

      <button onClick={()=>{setPeople([])}}>clear all</button>
    </div>
  );
}
