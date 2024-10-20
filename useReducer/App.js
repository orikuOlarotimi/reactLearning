import React, { useReducer, useState } from 'react';
import './index.css';
import { data } from './data';
import Modal from './Modal';

const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const new_people = [...state.people,action.payload]
    return {...state,people: new_people, isModalOpen: true, modalContent: 'item added'}
  }
  if(action.type === 'NO_VALUE'){
    return {...state,isModalOpen:true, modalContent:"Please enter Value"}
  }
  if(action.type === 'CLOSE_MODAL'){
    return {...state,isModalOpen:false}
  }
 throw new Error('no matching action type');
 ;
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent:""
}


const App = () => { 
    const[name,setName] = useState('')
   const [state, dispatch] = useReducer(reducer, defaultState)
    const handleSubmit = (e) => {
      e.preventDefault()
      if(name){
        const new_item = {name:name}
        dispatch({type: 'ADD_ITEM',payload:new_item})   
      }
      else{
        dispatch({type: "NO_VALUE"})
      }
    }
    const closeModal = () => {
  dispatch({type: "CLOSE_MODAL"})
}
    return(
      <>
        {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
        <form onSubmit={handleSubmit}>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' >Add</button>
        </form>
        {state.people.map(
          (person) => {
            return(
              <div>
                <h4>{person.name}</h4> 
              </div>
            )
          }
        )}
      </> 
      )
}


export default App;
