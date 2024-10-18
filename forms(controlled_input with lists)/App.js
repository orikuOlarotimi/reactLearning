import React, { useEffect, useState } from 'react';
import './index.css';


const App = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(firstName && email){
      const person = {firstName: firstName, email:email}   
      console.log(person)
      setPeople((people) => {
        return [...people,person]
      })
      console.log(people)
      setEmail('')
      setFirstName('')
    }
    else{
      console.log('empty values')
    }
    
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
              <label htmlFor='firstName'> Name :</label>
              <input type='text' id='firstName' name='firstName' value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
              />
             </div>
             <div className='form-control'>
              <label htmlFor='email'> Email :</label>
              <input type='text' id='email' name='email' value={email}  onChange={(e) => setEmail(e.target.value)}/> 
             </div>
             <button type='submit' > add person</button>
        </form>
        {people.map((person) => {
          
            return(
              <>
              <div>
                <h2>{person.firstName}</h2>
                <h2>{person.email}</h2>
              </div>
              </>
              
            )

        })}
      </article>
    </>
  );
}


export default App;
