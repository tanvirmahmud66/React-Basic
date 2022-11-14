import React from "react";
import InfoData from "./InfoData";



const Structure = (props) =>{
    const{name,id,batch,department,email,phone,institution} = props;
    return(
        <div>
            <h1>Name:{name}</h1>
            <h3>Id:{id}</h3>
            <h3>Batch:{batch}</h3>
            <h4>Department:{department}</h4>
            <h4>Email:{email}</h4>
            <h4>Phone:{phone}</h4>
            <h4>Institution:{institution}</h4>
            <hr/>
        </div>
    );
};



//main export function
export default function Student(){
    return(
        <div>
          {InfoData.map((each)=>{
            return <Structure key={each.id} {...each}/>
          })}
        </div>
    )
}