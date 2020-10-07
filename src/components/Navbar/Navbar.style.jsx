import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarStyle = styled.div`
width: 100%;
margin: 0 auto;
/* background-color:gray; */
text-align:center;
/* padding:1rem; */
display:flex;
justify-content:center;
list-style:none;
`

export const LinkStyle = styled(Link)`
/* margin:0 1rem; */
margin:0.7em 2.3em;
color:#333;
border-bottom: solid 1px green;
&:hover{
  border-bottom: solid 1px red;
  /* background-color:red */
}
`