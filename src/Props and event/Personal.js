import React from "react";
import BioInfo from "./BioInfo";
import './BioData.css';

const BioData = ({name,father,mother,add,nid,mStatus,religion,contact})=>{
    const clickHandler = ()=>{
        alert('Button is Clicked');
    }
    const complexExample = (contact)=>{
        alert(contact)
    }
    return(
        <div className="BioData">
            <h1 onClick={()=>alert(name + ' is clicked')}>Name: {name}</h1>
            <h4 onMouseOver={()=>{console.log(father)}}>Father's Name: {father}</h4>
            <h4 onMouseOver={()=>{alert(`Mother's Name: ${mother}`)}}>Mother's Name: {mother}</h4>
            <h4>Address: {add}</h4>
            <h2 onClick={()=> alert("National ID No. is: "+nid)}>NID No: {nid}</h2>
            <h4>Marital Status: {mStatus}</h4>
            <h4>Religion: {religion}</h4>
            <p onClick={()=>complexExample(contact)}>contact: {contact}</p>
            <button type="button" onClick={clickHandler}>click me</button>
            <hr/>
        </div>
    );
}


//main export function
export default function Personal(){
    return(
        <div>
            {BioInfo.map((each)=>{
                return <BioData key={each.id} {...each}/>
            })}
        </div>
    )
}