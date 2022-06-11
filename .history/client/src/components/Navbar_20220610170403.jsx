import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  const btnStyle = {
    float:"right",
    backgroundcolor: white
  }

  return (
    <NavWrap>
        <h1>Dauermedikation</h1>
        <a href={props.route}><button style={btnStyle}></button></a>

    </NavWrap>
  )
}

export default Navbar