import React, { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    if(name && email){
        const person = {
            name: name,
            email:email
        };
        setUsers((user)=>{
            return [...user, person]; 
        })
        setName('');
        setEmail('');
    }

  }

  return (
    <div>
        <form onClick={formHandler}>
            <div>
                <label htmlFor="name" id="name">Name: </label>
                <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email" id="email">Email: </label>
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <button type="submit">Add people</button>
        </form>
        <div>
            {
                users.map((each)=>{
                    const {id,name,email} = each;
                    return(
                        <div key={id}>
                            <h1>{name}</h1>
                            <h4>{email}</h4>
                        </div>
                    )
                })
            }
        </div>
    </div>
  );
}
