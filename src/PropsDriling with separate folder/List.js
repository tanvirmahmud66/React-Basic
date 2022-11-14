import React from 'react'
import ListItem from './ListItem'

export default function List({people, removeItem}) {
  return (
    <div>
        {people.map((each)=>{
            return <div>
                <ListItem key={each.id} {...each} removeItem={removeItem}/>
            </div>
        })}
    </div>
  )
}
