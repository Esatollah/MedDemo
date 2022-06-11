import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  const btnStyle = {
    backgroundcolor: "white"
  }

  return (
    <NavWrap>
        <h1>{props.title}</h1>
        <a href={props.route}><button style={btnStyle}>Bestellungen</button></a>

    </NavWrap>
  )
}

export default Navbar