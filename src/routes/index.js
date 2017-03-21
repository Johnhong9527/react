import MainView from 'views/MainView'
import Logistics from 'views/Logistics'
import Car from 'views/Car'
import Mine from 'views/Mine'
// import FooView from 'views/FooView'
// import BarView from 'views/BarView'
import Hello from 'components/Hello'
// import Counter from 'components/Counter'

export default [
  {
    path: '/',
    component: MainView,
    childRoutes: [
      {
        path: '/logistics',
        component: Logistics
      },
      {
        path: '/car',
        component: Car
      },
      {
        path: '/mine',
        component: Mine
      },
      {
        path: '/more',
        component: Hello
      }
    ]
  }
]
