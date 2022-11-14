import React,{useState, useEffect} from "react";

export default function FetchDemo(){

    const [users, setUsers] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/todos";
    // userId, id, title, completed

    const getUsers = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    },[])


    return(
        <div>
            <h1>Show users from api call</h1>
            <ul>
                {
                    users.map((each)=>{
                        const {userId,id,title,completed} = each;
                        return(
                            <div key={id}>
                                <h3>User ID: {userId}</h3>
                                <p>id: {id}</p>
                                <p>title: {title}</p>
                                <p>completed: {completed}</p>
                                <hr/>  
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
}