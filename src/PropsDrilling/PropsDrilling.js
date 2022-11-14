import React, {useState} from 'react'
import {data} from '../Data';

export default function PropsDrilling() {

  const [people,setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people)=>{
      return people.filter((person)=>person.id !== id); 
    });
  };

  return (
    <section>
      <List people={people} removeItem={removeItem}/>
    </section>
  )
}

const List = ({people, removeItem}) =>{
  
  
  return(
    <>
      {people.map((each)=>{
        return <ListItem key={each.id} {...each} removeItem={removeItem}/>
      })}
    </>
  );
}


const ListItem = ({id,name, removeItem}) => {

  return(
    <div>
      <p>{id}</p>
      <h3>{name}</h3>
      <button onClick={()=>{removeItem(id)}}>remove</button>
    </div>
  )
}