var webpack=require('webpack')

module.exports={
  entry:'./babel/app.js',
  output:{
    path:__dirname+'/dist',
    filename:'app.js'
  },
  plugins:[
    new webpack.BannerPlugin('create by tingxu.wang '+new Date())
  ]
}
