import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AsideBar = () => {
  return (
    <Aside>
      <Logo class="logo">
        <LinkR to="/">
          Idrees
        </LinkR>
      </Logo>
      <Nav class="nav">
        <ListItem><PageLink to="/" active><i className='fa fa-home'></i>Home</PageLink></ListItem>
        <ListItem><PageLink to="/projects"><i className='fa fa-briefcase'></i>Projects</PageLink></ListItem>
        <ListItem><PageLink to="/about" className="bg"><i className='fa fa-user'></i>About</PageLink></ListItem>
        <ListItem><PageLink to="/contact"><i className='fa fa-envelope'></i>Contact</PageLink></ListItem>
      </Nav>

      <Copyright>
        &copy; 2020 Mu Idrees
      </Copyright>
    </Aside>
  )
}

// AsideBar
const Aside = styled.div`
    width: 270px;
    background-color: #fdf9ff;
    position: fixed;
    min-height: 100%;
    left:0;
    top:0;
    z-index: 10;
    border-right:1px solid #e8dfec;
    padding:30px;
`

// Logo
const Logo = styled.div`
padding: 30px 0;
`
// Link in logo 
const LinkR = styled(Link)`
font-size: 40px;
  color: #302e4d;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  text-decoration: none;
  display: inline-block;
  position: relative;
  padding: 0 10px;  
  line-height: 50px;
  ::before{
content: '';
height: 20px;
width: 20px;
position: absolute;
top:0;
left:0;
border-top: 4px solid tomato;
border-left: 4px solid tomato;}
::after{
content: ''; 
height: 20px;
width: 20px;
position: absolute;
height: 20px;
width: 20px;
position: absolute;
bottom:0;
right:0;
border-bottom: 4px solid tomato;
border-right: 4px solid tomato;}
`
const Nav = styled.ul`
  margin: 80px 0;
  `
const ListItem = styled.li`
display: block;
border-bottom: 1px solid #e8dfec;


`
const PageLink = styled(Link)`
font-size: 16px;
font-weight: 600;
color:${props => props.active ? 'tomato' : '#302e4d'};
line-height: 55px;
display: block;
-webkit-transition: all 0.3s ease;
transition: all 0.2s ease;
.fa {
  margin-right: 7px;
}
:hover{
padding-left: ${props => props.active ? '0' : '5px'};
color:tomato;
}
`

const Copyright = styled.div`
  /* background-color: #ededed; */
  font-size:13px;
  color:#7d7d7d;
`


export default AsideBar
