import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import People from './People'
import Error from './Error'
import Person from './Person'
import NAvbar from './NAvbar'
const Indii = () => {
  return (
   <Router>
    <NAvbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='*' element={<Error/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/person/:id' element={<Person />} />
        </Routes>
    </Router>
  )
}

export default Indii