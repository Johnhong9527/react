import React, { Component } from 'react'
import './BarView.css'

export default class BarView extends Component {
  state = {
    name: 'bar'
  }
  render () {
    return (
      <div id='barBox'>
        <p>I'm {this.state.name}</p>
      </div>
    )
  }
}
