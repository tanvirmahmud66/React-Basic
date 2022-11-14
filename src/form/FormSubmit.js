import React, {useState} from "react";

export default function FormSubmit(){

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [people, setPeople] =useState([]);

    const formHandler = (e)=>{
        e.preventDefault();
    
        if(name && email){
            const person = {name: name, email: email};
            setPeople((people)=>{
                return [...people, person];
            });
            setName('');
            setEmail('');      
        }

    }


    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="firstName" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button type="submit">Add People</button>
            </form>
            <div>
                {people.map((each)=>{
                    const {id,name, email} =each;
                    return(
                        <div key={id}>
                            <h1>{name}</h1>
                            <h1>{email}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}