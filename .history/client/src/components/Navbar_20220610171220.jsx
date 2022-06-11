import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  

  return (
    <NavWrap>
        <h1>{props.title}</h1>
        <a href={props.route}><button>{props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"}</button></a>
    </NavWrap>
  )
}

export default Navbar