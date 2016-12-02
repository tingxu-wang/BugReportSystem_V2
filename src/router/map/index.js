export default {
  '/welcome':{
    component:require('VIEW/welcome'),
    subRoutes:{
      '/login':{
        component:require('COMPONENT/welcome/login')
      },
      '/register':{
        component:require('COMPONENT/welcome/register')
      }
    }
  },
  '/log':{
    component:require('VIEW/log')
  }
}
