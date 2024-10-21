import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import {useFetch} from './useFetch';

const url = "https://course-api.com/javascript-store-products"


const App = () => { 
  const {loading,products} = useFetch(url)
    return(
      <>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      </> 
      )
}


export default App;
