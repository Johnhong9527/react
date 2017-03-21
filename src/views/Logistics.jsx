import React, { Component } from 'react'
import './Logistics.css'

export default class Logistics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '这里是物流页面'
    }
  }
  render () {
    return (
      <div id='Logistics'>
        <div className='msg'>{this.state.title}</div>
      </div>
    )
  }
}
