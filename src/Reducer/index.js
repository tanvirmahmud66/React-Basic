import React, { useState, useReducer } from "react";
import { data } from "../Data";
import Modal from "./Modal";

const reducer = (state, action) => {
  if (state === "TESTING") {
    return {
      ...state,
      people: data,
      isModalOpen: true,
      modalContent: "item added"
    };
  }
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello world",
};

export default function ReducerPractice() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const show = (e) => {
    e.preventDefault();
    if (name) {
      dispatch({ type: "TESTING" });
    }else{
      dispatch({type:"RANDOM"})
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
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
            <>
              <p>{`${each.id} ${each.name}`}</p>
            </>
          );
        })}
      </div>
    </>
  );
}
