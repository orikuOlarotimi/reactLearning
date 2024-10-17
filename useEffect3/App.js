import React, {useEffect, useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [value,setValue] = useState(window.innerWidth)
  useEffect(() => 
    {
      window.addEventListener('resize', checkSize)
      return () => { window.removeEventListener('resize',checkSize)}
    },)
    const checkSize = () => {setValue(window.innerWidth)}
  return (
    <>
    <h1>size</h1>
      <h1>{value}</h1>
    </>
  )
}

export default App