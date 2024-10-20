import React, { useContext, useState } from 'react';
import './index.css';
import { data } from './data';


const PersonContext = React.createContext()


const App = () => { 
   const [people,setPeople] = useState(data)
   const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id)
    })
   }
    return(
      <>
      <PersonContext.Provider value={{removePerson, people}} >
        <h3>
          Context Api/ use Context
        </h3>
        <List />
      </PersonContext.Provider>
 
      </> 
      )
}

const List = () => {
  const mainData = useContext(PersonContext)
      return<>
        {mainData.people.map((person) => {
          return <SinglePerson key={person.id} {...person} />
        })}
      </>
}
const SinglePerson = ({id,name}) => {
  const removePerson = useContext(PersonContext)
return <div>
  <h4>{name}</h4>
  <button onClick={() => removePerson(id)}> remove </button>
</div>
}
export default App;
