import React, { useEffect, useState } from 'react';
import './index.css';


const App = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log('hello-world')
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
              <label htmlFor='firstName'> Name :</label>
              <input type='text' id='firstName' name='firstName'/>
             </div>
             <div className='form-control'>
              <label htmlFor='email'> Email :</label>
              <input type='text' id='email' name='email'/> 
             </div>
             <button type='submit' > add person</button>
        </form>
      </article>
    </>
  );
}


export default App;
