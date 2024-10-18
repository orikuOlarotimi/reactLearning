import React, { useEffect, useState } from 'react';
import './index.css';

const url = "https://api.github.com/users";

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>show/hide</button>
     {show && <Item/>}
    </>
  );
}

const Item = () => {
  const [size,setSize] = useState(window.innerWidth)

  useEffect (() => {window.addEventListener('resize',checkSize)

    return( () => {
      window.removeEventListener('resize',checkSize)
    })
  },[])

  const checkSize = () => {
    setSize(window.innerWidth)
  }

    return(
<div style={{marginTop:"2rem"}}>
  <h1>window</h1>
  <h2>size: {size}px</h2>
</div>

    )

}
export default App;
