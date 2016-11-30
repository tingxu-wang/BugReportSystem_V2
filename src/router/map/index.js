export default {
  '/welcome':{
    component:require('VIEW/welcome'),
    subRoutes:{
      '/login':{
        component:require('COMPONENT/input/login')
      },
      '/register':{
        component:require('COMPONENT/input/register')
      }
    }
  },
  '/log':{
    component:require('VIEW/log')
  }
}
