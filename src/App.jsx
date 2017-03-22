import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Nav from 'Components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
// import GroceryList from 'views/GroceryList'
import './App.css'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        {console.log(this)}
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}
