import MainView from 'views/MainView'
import Logistics from 'views/Logistics'
import Car from 'views/Car'
import Mine from 'views/Mine'
import More from 'views/More'
// import Info from 'views/Info'
import Hello from 'components/Hello'
// import FooView from 'views/FooView'
// import BarView from 'views/BarView'
// import Hello from 'components/Hello'
// import Counter from 'components/Counter'

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/react/Hello',
        component: Hello
      },
      {
        // 物流
        path: '/react/logistics',
        component: Logistics
      },
      {
        // 购物车
        path: '/react/car',
        component: Car
      },
      {
        // 个人中心
        path: '/react/mine',
        component: Mine
      },
      {
        // 更多
        path: '/react/more',
        component: More
      }
    ]
  },
  {
    path: '/Hello',
    component: Hello
  }
]
