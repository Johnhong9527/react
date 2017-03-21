import React, { Component } from 'react'
import './Car.css'

export default class Car extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '这里是购物车'
    }
  }
  render () {
    return (
      <div id='Car'>
        <div className='title'>{this.state.title}</div>
      </div>
    )
  }
}
