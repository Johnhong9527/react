import React, {Component} from 'react'
import './More.css'

export default class More extends Component {
  state={
    title: '这里是更多'
  }
  render () {
    return (
      <div id='More'>
        <div className='title'>{this.state.title}</div>
      </div>
    )
  }
}
