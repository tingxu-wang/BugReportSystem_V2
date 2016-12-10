var webpack=require('webpack'),
    path=require('path'),
    commonPath=require('./build/config'),
    src=commonPath.src

module.exports={
  entry:'./src/app.js',
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
      VIEW: path.join(src, 'views'),
      STATIC:path.join(src,'static'),
      BUILD:commonPath.build,
      TOOL:path.join(src,'tools'),
      ROUTER:path.join(src,'router')
    }
  },
  resolveLoader: {
    root: path.join(commonPath.rootPath, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
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
        css: 'style!css!autoprefixer',
        html:'html-loader'
    }
  },
  babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
  },
  plugins:[
    new webpack.BannerPlugin('create by tingxu.wang '+new Date())
  ]
}
