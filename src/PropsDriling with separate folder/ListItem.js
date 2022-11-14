import React from 'react'

export default function ListItem({id,name,removeItem}) {
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
        <button onClick={()=>removeItem(id)}>remove</button>
    </div>
  )
}
