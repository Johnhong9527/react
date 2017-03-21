import React, { Component, PropTypes } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink as Link } from 'react-router-dom'
import './MainView.css'

export default class MainView extends Component {
  static propTypes = {
    route: PropTypes.object
  }
  render () {
    return (
      <div className='main-view'>

        <div className='view'>
          {renderRoutes(this.props.route.childRoutes)}
        </div>

        <div className='btn-group'>
          <Link to='/#' className='btn' activeClassName='active'>首页</Link>
          <Link to='/logistics' className='btn' activeClassName='active'>物流</Link>
          <Link to='/car' className='btn' activeClassName='active'>购物车</Link>
          <Link to='/mine' className='btn' activeClassName='active'>我的淘宝</Link>
          <Link to='/more' className='btn' activeClassName='active'>更多</Link>
        </div>
      </div>
    )
  }
}
