import React, { Component } from 'react'
import './Hello.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: 'Hello World!'
    }
  }
  render () {
    return (
      <div id='Hello'>
        <div className='msg'>{this.state.msg}</div>
      </div>
    )
  }
}
