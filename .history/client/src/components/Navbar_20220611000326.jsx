import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavWrap } from '../Styles/NavbarStyles'
const Navbar = (props) => {
  let navigate = useNavigate()
  const handleClick = () => {
  }

  return (
    <NavWrap>
      <h1>{props.title}</h1>
        <div onClick={() => navigate(props.route)}>{props.title === "Dauermedikation" ? "Bestellungen" : "Dauermedikation"}</div>
    </NavWrap>
  )
}

export default Navbar