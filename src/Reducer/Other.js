import React,{useState,useReducer} from "react";
import NewModal from "./NewModal";

const reducer = (state,action) => {
    if(action.type==="Add_item"){
        const newPeople = [...state.people, action.payload];
        return{
            ...state,
            people:newPeople,
            isModalOpen: true,
            ModalContent: "New Item Added"
        };
    }
    if(action.type==="No_value"){
        return{
            ...state,
            isModalOpen: true,
            ModalContent: "Please add new value"
        }
    }
    if(action.type==="CLOSE"){
        return{
            ...state,
            isModalOpen: false
        }
    }
}


const defaultState = {
    people: [],
    isModalOpen: false,
    ModalContent: ""
}


export default function Other() {

    const [name, setName] = useState("");
    const [state, dispatch] = useReducer(reducer,defaultState);

    const show = (e)=>{
        e.preventDefault();
        if(name){
            const random = Math.floor(Math.random()*10000);
            const newItem = {id:random,name};
            dispatch({type:"Add_item", payload: newItem})
            setName("");
        }else{
            dispatch({type:"No_value"})
            setName("");
        }
    }

    const close = ()=>{
        dispatch({type:"CLOSE"})
    }

  return <>
    {state.isModalOpen && <NewModal close={close}  ModalContent={state.ModalContent}/>}
    <div className="Input-section">
        <form onSubmit={show}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
            <button type="submit">Add</button>
        </form>
    </div>
    <div className="Output-section">
        {state.people.map((each)=>{
            return(
                <div>
                    <h3>{each.id}</h3>
                    <h3>{each.name}</h3>
                </div>
            )
        })}
    </div>
  </>;
}
