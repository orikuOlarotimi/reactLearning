import React from 'react'
import { Link } from 'react-router-dom'

const NAvbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/"> Home</Link>
            </li>
            <li>
                <Link to="/About"> About</Link>
            </li>
            <li>
                <Link to="/People"> People</Link>
            </li>
        </ul>
    </div>
  )
}

export default NAvbar