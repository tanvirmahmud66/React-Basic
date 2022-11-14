import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../Data";

const reducer = (state, action) => {
  if (action.type === "TEXTING") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "Item Added",
    };
  }
  if(action.type==="NO_VALUE"){
    return{
      ...state,
      isModalOpen: true,
      modalContent: "Please enter value!!!"
    }
  }
  if(action.type==="CLOSE_MODAL"){
    return{
      ...state,
      isModalOpen: false
    }
  }
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

export default function Another() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  
  
  const show = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getDate().toString(), name };
      dispatch({ type: "TEXTING", payload: newItem });
      setName("");
    }else{
      dispatch({type:"NO_VALUE"})
    }
  };

const closeModal = () =>{
  dispatch({type: "CLOSE_MODAL"})
}

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={show}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">show</button>
      </form>



      
      <div>
        {state.people.map((each) => {
          return (
            <div>
              <h1>{each.id}</h1>
              <h1>{each.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
