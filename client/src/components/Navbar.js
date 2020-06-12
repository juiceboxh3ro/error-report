import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBar } from '../styled'

export default function Navbar() {
  return (
    <NavBar>
      <div>
        <NavLink exact to="/">View Errors</NavLink>
        <NavLink to="/submit">Submit</NavLink>
      </div>
    </NavBar>
  )
}
