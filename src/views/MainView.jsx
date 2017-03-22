import React, { Component, PropTypes } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
import './MainView.css'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.route
    }
    console.log(this.props)
    console.log(this.state.name)
  }
  render () {
    return (
      <div className='main-view' name={this.state.name}>
        <div className='view'>
          {
            renderRoutes(
              this.props.route.childRoutes
            )
          }
        </div>

        <div className='btn-group'>
          <Link to='/react/Hello' className='btn' activeClassName='active'>首页</Link>
          <Link to='/react/logistics' className='btn' activeClassName='active'>物流</Link>
          <Link to='/react/car' className='btn' activeClassName='active'>购物车</Link>
          <Link to='/react/mine' className='btn' activeClassName='active'>我的淘宝</Link>
          <Link to='/react/more' className='btn' activeClassName='active'>更多</Link>
        </div>
      </div>
    )
  }
}
