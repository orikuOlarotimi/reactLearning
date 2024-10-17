import React, {useEffect, useState} from 'react'
import './index.css' ;
import {data} from "./data"

const App = () => {
  const [loading, setLoading] = useState(true)
  if(loading) {
    return <h2>hello world</h2>
  }
  return (
    <>
    <h2>timi</h2>
    </>
  )
}

export default App