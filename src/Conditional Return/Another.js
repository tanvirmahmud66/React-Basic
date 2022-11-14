import React, {useState,useEffect} from "react";

export default function Another(){
    const [show,setShow] = useState(false);

    return (
        <div>
            <button onClick={()=>{setShow(!show)}}>Window Size</button>
            {show && <Item/>}           
        </div>
    )
}

const Item = ()=>{

    const [size, setSize] = useState(window.innerWidth);

    const checkSize = ()=>{
        setSize(window.innerWidth);
    }
    
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize', checkSize);
        }
    },[])

    return(
        <div>
            <h1>Window Size: {size} px</h1>
        </div>
    )
}