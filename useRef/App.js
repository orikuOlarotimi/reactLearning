import React, { useEffect, useState, useRef } from 'react';
import './index.css';

const App = () => { 
  const refContainer = useRef(null)
  const divContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value )
    console.log(divContainer.current )
  }    
    return(
      <>
        <div>
            <form className='form' onSubmit={handleSubmit}>
              <div>
                <input type='text' ref={refContainer}/>
                <button type='submit'>Submit</button>
                <div ref={divContainer}><h4>hello world</h4></div>
              </div>
            </form>
          </div>      
      </> 
      )
}


export default App;
