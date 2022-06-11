import React from 'react'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  const btnStyle = {
    float:"right"
  }

  return (
    <NavWrap>
        <h1>Dauermedikation</h1>
        <button style={btnStyle}></button>
    </NavWrap>
  )
}

export default Navbar