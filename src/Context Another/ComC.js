import React from 'react'
import { Person,lastPerson } from './ComA'


export default function ComC() {
  return (
    <Person.Consumer>
        {
            (person)=>{
                return(
                    <lastPerson.Consumer>
                        {(lPerson)=>{
                            return(
                                <div>
                                    <h5>{lPerson}</h5>
                                    <h5>{person}</h5>
                                </div>
                            )
                        }}
                    </lastPerson.Consumer>
                )
            }
        }
    </Person.Consumer>
  )
}
