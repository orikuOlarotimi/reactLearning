import React, { useEffect, useState } from 'react';
import './index.css';


const App = () => {
  const [person, setPerson] = useState({firstName:'', email:'', age:''})
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]: value})
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  if(person.firstName && person.email && person.age){ 
    setPeople([...people,person])
    setPerson({firstName:'', email:'', age:''})

  }
  }
  return (
    <>
      <article>
        <form className='form' >
          <div className='form-control'>
              <label htmlFor='firstName'> Name :</label>
              <input type='text' id='firstName' name='firstName' value={person.firstName} 
                onChange={handleChange}
              />
             </div>
             <div className='form-control'>
              <label htmlFor='email'> Email :</label>
              <input type='text' id='email' name='email' value={person.email}  onChange={handleChange}/> 
             </div>
             <div className='form-control'>
              <label htmlFor='email'> Age :</label>
              <input type='text' id='age' name='age' value={person.age}  onChange={handleChange}/> 
             </div>
             <button type='submit' onClick={handleSubmit}> add person</button>
        </form>
        {people.map((person) => {
          
            return(
              <>
              <div>
                <h2>{person.firstName}</h2>
                <h2>{person.email}</h2>
                <h2>{person.age}</h2>
              </div>
              </>
              
            )

        })}
      </article>
    </>
  );
}


export default App;
