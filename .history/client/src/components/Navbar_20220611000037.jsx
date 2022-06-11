import React from 'react'
import { usaeNavigate } from 'react-router-dom'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  const handleClick = () => {
  }

  return (
    <NavWrap>
      <h1>{props.title}</h1>
        <div onClick={() => }>{props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"}</div>
    </NavWrap>
  )
}

export default Navbar