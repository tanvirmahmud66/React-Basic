import React,{useState} from 'react'
import List from './List'
import {data} from '../Data';


export default function Main() {
    const [people, setPeople] = useState(data);

    const removeItem = (id) => {
        setPeople((people)=>{
            return people.filter((each)=>each.id !== id);
        })
    }


  return (
    <div>
        <List people={people} removeItem={removeItem}/>
    </div>
  )
}
