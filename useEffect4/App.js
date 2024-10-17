import React, {useEffect, useState} from 'react'
import './index.css' ;
import {data} from "./data"
const url = 'https://api.github.com/users'

const App = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users =  await response.json()
    setUsers(users)
    
  }
  useEffect( () => {
    getUsers()

  },[])
  
  return (
    <>
    <h3>github users</h3>
    <ul className='users'>
    {users.map( (user) => {
      const {id,login,avatar_url,html_url} = user
      return(
        <li key={id}>
          <img src={avatar_url}></img>
          <div>
            <h4> {login} </h4>
            <a href={html_url}>profile</a>
          </div>
        </li>
      )

    })
    
    }

    </ul>

    </>
  )
}

export default App