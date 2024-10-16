import React, {useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [value, setValue] = useState(1)
  const reset = () => { setValue(0)}

  const complexCounter = () => {
    setTimeout(()=> {setValue(
      (prevState) => { return prevState + 1}
      
    );}, 2000)
  }
  return (
    <>
    <section><h2>regular counter</h2>
    <h1>{value}</h1>
    <button type='button' onClick={() => setValue( value - 1)} style={{margin:"1rem"}}>decrease</button>
    <button type='button' onClick={reset} style={{margin:"1rem"}}>reset</button>
    <button type='button' onClick={() => setValue(value + 1)} style={{margin:"1rem"}}>increase</button>
    </section>

    <section>
      <h2>more complex counter</h2>
    <h1>{value}</h1>
    <button type='button' onClick={() => setValue( value - 1)} style={{margin:"1rem"}}>decrease</button>
    <button type='button' onClick={reset} style={{margin:"1rem"}}>reset</button>
    <button type='button' onClick={complexCounter} style={{margin:"1rem"}}>increase</button>
    </section>
    </>
  )
}

export default App