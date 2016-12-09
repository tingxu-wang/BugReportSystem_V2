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
    needToLogin:true,
    component:require('VIEW/log')
  }
}
