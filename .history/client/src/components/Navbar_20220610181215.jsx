import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {


  return (
    <NavWrap>
      <h1>{props.title}</h1>
      <div>
        <a className="nav" href={props.route}><input type="button" value={props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"}></input></a>
      </div>
    </NavWrap>
  )
}

export default Navbar