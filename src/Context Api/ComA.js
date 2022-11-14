import React, { createContext } from 'react'
import ComB from './ComB'

const firstName = createContext();
const lastName = createContext();

export default function ComA() {
  return (
    <div>
        <firstName.Provider value={"Tanvir"}>
            <lastName.Provider value={"Mahmud"}>
                <ComB/>
            </lastName.Provider>
        </firstName.Provider>
    </div>
  )
}

export {firstName,lastName};
