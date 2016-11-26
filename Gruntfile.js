/*
 * grunt 配置文件
*/

module.exports=function(grunt){
  require('load-grunt-tasks')(grunt)
  //项目配置
  grunt.initConfig({
    watch:{
      options:{
        livereload:true
      },
      express:{
        //files:['**/*.js','!src/**/*.js','!dist/**/*.js'],
        //files:['**/*.js'],
        files:['*.js','models/**/*.js','routes/**/*.js'],
        tasks:['express:dev'],
        options: {
          spawn: false // Without this option specified express won't be reloaded
        }
      }
    },
    express:{
      options:{},
      dev:{
        options:{
          script:'bin/www'
        }
      }
    }
  })
  grunt.registerTask('default',['express:dev','watch'])
}
