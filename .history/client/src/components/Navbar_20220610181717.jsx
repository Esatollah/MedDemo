import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {


  return (
    <NavWrap>
      <h1>{props.title}</h1>
        <div >{props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"}</div>
    </NavWrap>
  )
}

export default Navbar