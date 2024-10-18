import React, { useEffect, useState } from 'react';
import './index.css';

const url = "https://api.github.com/users";

const App = () => {
  const [text, setText] = useState("");
  const [isError, setisError] = useState(false)

  return (
    <>

      <h2>{text || "hello world"}</h2>
      <button className='btn' onClick={() => setisError(!isError)}> toggle error</button>
      {isError && <h1>Error...</h1>}
      {isError ? <p>there is an error</p> : (
            <div>
              <h2> Theres no error</h2>
            </div>
      )}
    </>
  );
}

export default App;
