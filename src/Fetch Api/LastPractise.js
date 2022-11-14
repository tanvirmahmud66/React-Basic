import React, {useState, useEffect} from "react";

export default function LastPractise(){

    const url = "https://jsonplaceholder.typicode.com/photos";
    const [picture, setPicture] = useState([]);

    const getPicture = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setPicture(data);
    }

    useEffect(()=>{
        getPicture();
    },[]);

    {/* 
        albumId:
        id:
        title:
        url:
        thumbnailUrl:
*/}

    return(
        <div>
            {picture.map((each)=>{
                const{albumId,id,title,url,thumbnailUrl} = each;
                return(
                    <div>
                        <h3>Album Id: {albumId}</h3>
                        <h3>Id: {id}</h3>
                        <h3>title: {title}</h3>
                        <img src={url} alt={id}/>
                        <h3>Album Id: {thumbnailUrl}</h3>
                    </div>
                )
            })}
        </div>
    );
}