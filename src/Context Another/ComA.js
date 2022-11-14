import React,{createContext, useContext} from 'react'
import ComB from './ComB'

export const Person = createContext();
export const lastPerson = createContext();


export default function ComA() {
  return (
    <Person.Provider value={"Tanvir"}>
        <lastPerson.Provider value={"Jerin"}>
            <ComB/>
        </lastPerson.Provider>
    </Person.Provider>
  )
}
