import React, { Component } from 'react'
// import { renderRoutes } from 'react-router-config'
import './Nav.css'

export default class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      msg: '标题'
    }
    console.log(this)
  }
  render () {
    return (
      <div id='Nav'>
        <div className='msg'>{this.state.msg}</div>
      </div>
    )
  }
}
