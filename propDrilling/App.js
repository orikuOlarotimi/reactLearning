import React, { useReducer, useState } from 'react';
import './index.css';
import { data } from './data';
import Modal from './Modal';

const App = () => { 
   const [people,setPeople] = useState(data)
   const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
   }
    return(
      <>
      <section>
        <h3>
          prop drilling
        </h3>
        <List people={people} removePerson={removePerson}/>
      </section>
      </> 
      )
}

const List = ({people, removePerson}) => {
      return<>
        {people.map((person) => {
          return <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
        })}
      </>
}
const SinglePerson = ({id,name,removePerson}) => {
return <div>
  <h4>single item</h4>
  <button onClick={() => removePerson(id)}> remove </button>
</div>
}
export default App;
