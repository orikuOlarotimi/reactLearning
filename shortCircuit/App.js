import React, { useEffect, useState } from 'react';
import './index.css';

const url = "https://api.github.com/users";

const App = () => {
  const [text, setText] = useState("d");

  return (
    <>
      <h2>{text || "hello world"}</h2>
      <h1>{text && "hello world"}</h1>
    </>
  );
}

export default App;
