import React from 'react'
import ComC from './ComC'
import { firstName, lastName } from './ComA'


export default function ComB() {
  return (
    <div>
        <firstName.Consumer>
            {(fname)=>{
                return <lastName.Consumer>
                    {(lname)=>{
                        return <>
                            <h3>This is {fname} {lname}</h3>
                        </>
                    }}
                </lastName.Consumer>
            }}
        </firstName.Consumer>
    </div>
  )
}
