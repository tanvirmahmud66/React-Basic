import React, {useState} from "react";

export default function Conditional(){

    const [text, setText] = useState("");


    return(
        <div>
            <h1>{text || "Tanvir Mahmud Fahim"}</h1>
            <h1>{text && "Tanvir Mahmud Fahim"}</h1>
        </div>
    );
}