import React, {useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [people,setPeople] = useState(data)
  const removeItem = (id) => {
      let newPeople = people.filter((person) => person.id !==id)
      setPeople(newPeople)
  
  }
 

  return (
    <>
      {people.map((person)=> {
        const {id, name} = person
        return (
            <div key={id}>
              <h4>{name}</h4>
              <button type='button' onClick={() => removeItem(id)}> clear</button>
            </div>
        )
        })}
        <button type='button' onClick={() => setPeople([])}> clear</button>
    </>
  )
}

export default App