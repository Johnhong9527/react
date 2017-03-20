import React, { Component } from 'react'
import Hello from 'components/Hello'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'routes'
import './App.css'

import Counter from 'components/Counter'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Counter />
        <Hello />
        <Router>
          {renderRoutes(routes)}
        </Router>
      </div>
    )
  }
}
