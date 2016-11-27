var webpack=require('webpack'),
    path=require('path'),
    commonPath=require('./build/config'),
    src=commonPath.src,
    ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports={
  entry:'./babel/app.js',
  output:{
    path:__dirname+'/dist',
    filename:'app.js'
  },
  resolve:{
    extensions:['','.js','.vue'],
    alias:{
      // 自定义路径别名
      ASSET: path.join(src, 'assets'),
      COMPONENT: path.join(src, 'components'),
      SERVICE: path.join(src, 'services'),
      VIEW: path.join(src, 'views')
    }
  },
  resolveLoader: {
    root: path.join(commonPath.rootPath, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue',
      include: src,
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel!eslint',
      include: src,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10240, // 10KB 以下使用 base64
        name: 'img/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: 'url-loader?limit=10240&name=[name]-[hash:6].[ext]'
    }]
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
      css: ExtractTextPlugin.extract('vue-style', 'css'),
      less: ExtractTextPlugin.extract('vue-style', 'css!less'),
      sass: ExtractTextPlugin.extract('vue-style', 'css!sass')
    }
  },
  plugins:[
    new webpack.BannerPlugin('create by tingxu.wang '+new Date())
  ]
}
