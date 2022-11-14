import React from 'react'
import ListItem from './ListItem'


export default function List({people, removeItem}) {
  return (
    <div>
        {people.map((each)=>{
            return <ListItem {...each} removeItem={removeItem}/>
        })}
    </div>
  )
}
