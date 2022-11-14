import React,{useEffect} from 'react'

export default function NewModal({ModalContent,close}) {

    useEffect(()=>{
        setTimeout(()=>{
            close();
        },3000);
    })

  return (
    <div>{ModalContent}</div>
  )
}
