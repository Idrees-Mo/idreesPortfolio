import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </div>
  )
}

export default Main