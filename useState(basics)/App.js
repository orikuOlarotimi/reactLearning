import React, {useState} from 'react'
import './index.css' ;

const App = () => {
  const [Text, setText] = useState('random title')
  const handleChange = () => 
  {
    if(Text === 'random title'){ setText('hello')}
    else{ setText('random title')}

  }
  return (
    <>
      <h2>{Text}</h2>
      <button type='button' onClick={handleChange } className='btn'> Change</button>
    </>
  )
}

export default App