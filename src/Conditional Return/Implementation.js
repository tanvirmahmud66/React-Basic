import React, {useState, useEffect} from "react";

export default function Implementation(){
    const url = "https://jsonplaceholder.typicode.com/posts";
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState('Default Title');
    const [isError, setIsError] = useState(false);


    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(res.status >= 200 && res.status <=299){
                return res.json();
            }else{
                setIsLoading(false);
                setIsError(true);
                throw new Error(res.statusText)
            }
        })
        .then((users)=>{
            console.log(users);
            users.map((each)=>{
                const {title} = each;
                setUsers(title);
                setIsLoading(false);
                return title;
            })
        })
        .catch((error) => console.log(error));
    },[])


    if(isLoading){
        return(
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        );
    }
    

    if(isError){
        return(
            <div>
                <p>
                    Bad Getway...
                    Data can't found form the server..
                </p>
            </div>
        );
    }

    return(
        <div>
            <h1>
               {users}
            </h1>
        </div>
    );

}