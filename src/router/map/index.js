export default {
  '/':{
    /*component (resolve) {
      // 使用 Webpack 的 Code-Splitting
      //require(['VIEW/login'], resolve)
      require(['./login'],resolve)
    }*/
    component:require('../../views/login.js')
/*    component:{
      template:'<div>test</div>'
    }*/
  }
}
