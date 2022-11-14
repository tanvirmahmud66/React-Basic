import React,{useState} from "react";
import '../form/BigOne.css';


export default function Dynamic() {

    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        age: ''
    });

    const[people, setPeople] = useState([]);

    const inputHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value});
    }

    const formHandler = (e)=>{
        e.preventDefault();
        if(person.firstName && person.lastName && person.age){
            const newPerson = {...person, id: new Date().getDate().toString()};
            setPeople([...people,newPerson]);
            setPerson({firstName:'',lastName: '',age: ''});
        }
    }

  return (
    <div className="container">
      <>
        <form className="Form-wrapper" onSubmit={formHandler}>
          <div className="input-field">
            <label htmlFor="firstName">First Name: </label>
            <input
              type="text"
              name="firstName"
              value={person.firstName}
              onChange={inputHandler}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name: </label>
            <input
              type="text"
              name="lastName"
              value={person.lastName}
              onChange={inputHandler}
            />
          </div>
          <div className="input-field">
            <label htmlFor="age">Age: </label>
            <input
              type="text"
              name="age"
              placeholder="age"
              value={person.age}
              onChange={inputHandler}
            />
          </div>
          <button className="btn" type="submit">
            Add People
          </button>
        </form>
        <div className="Output-section">
          {
            people.map((e)=>{
                const {firstName, lastName, age, id} = e;
                return(
                    <div key={id}>
                        <h3>{firstName}</h3>
                        <h3>{lastName}</h3>
                        <h3>{age}</h3>
                    </div>
                )
            })
          }
        </div>
      </>
    </div>
  );
}
