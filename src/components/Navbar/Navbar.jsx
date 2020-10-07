import React from 'react'
import { NavbarStyle, LinkStyle } from './Navbar.style'


const Navbar = () => {
  return (
    <NavbarStyle>
      <LinkStyle to='/'>Home</LinkStyle>
      <LinkStyle to='/projects'>Projects</LinkStyle>
      <LinkStyle to='/contact'>Contact</LinkStyle>
    </NavbarStyle>
  )
}

export default Navbar
