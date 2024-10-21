import React, { useContext, useEffect, useState } from 'react';
import './index.css';
import {useFetch} from './useFetch';
const url = 'https://course-api.com/react-prop-types-example'

const App = () => { 
  const { products } = useFetch(url)
    return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((product) => {
          return <product key={product.id} {...product} />
        })}
      </section>
    </div>
  )
}


export default App;
