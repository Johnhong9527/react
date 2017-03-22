import React, {Component} from 'react'
import './Mine.css'

export default class Mine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '这里是个人中心'
    }
  }
  render () {
    return (
      <div id='Mine' title={this.state.title}>
        <div className='title'>{this.state.title}</div>
      </div>
    )
  }
}
