import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

const Main = () => {
  return (
    <MainContent>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </MainContent>
  )
}

const MainContent = styled.div`
background-color:green;
padding-left:270px;
/* padding-left:0; */
/* z-index:1100; */
min-height:100vh;
`

export default Main