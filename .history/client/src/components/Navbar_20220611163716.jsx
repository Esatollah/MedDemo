import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavWrap } from '../Styles/NavbarStyles'


const Navbar = (props) => {
  let navigate = useNavigate()

  return (
    <NavWrap>
      <h1>{props.title}</h1>
        <div onClick={() => navigate(props.route)}>{props.title === "Dauermedikation" ? "+" : "-"}</div>
    </NavWrap>
  )
}

export default Navbar