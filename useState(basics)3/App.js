import React, {useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [people,setPeople] = useState({name: 'peter', age: "13", message:"hello people"})
  const handlechange = () => {setPeople({...people, message:"hello"})}
 
  return (
    <>
      <h1>{people.name}</h1>
      <h1>{people.age}</h1>
      <h1>{people.message}</h1>
      <button type='button' onClick={handlechange}>hhhdhd</button>
    </>
  )
}

export default App