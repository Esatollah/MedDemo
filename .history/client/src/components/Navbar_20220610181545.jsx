import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {


  return (
    <NavWrap>
      <h1>{props.title}</h1>
        <input type="button" value={props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"} />
    </NavWrap>
  )
}

export default Navbar