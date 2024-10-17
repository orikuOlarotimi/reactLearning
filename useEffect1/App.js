import React, {useEffect, useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [value,setValue] = useState(0)
  useEffect(() => {
    document.title = (`New messages(${value})`)
  })
  return (
    <>
    <h1>{value}</h1>
    <button onClick={() => setValue(value + 1)}> click me</button>
    </>
  )
}

export default App