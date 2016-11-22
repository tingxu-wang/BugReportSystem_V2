'use strict';
var path = require("path");
module.exports = function(grunt) {
	
	
	/**
	 *  扩展函数
	 * @param {Object} tar 目标对象
	 * @param {Object} src 源对象
	 */
	var _extend = function(tar, src) {
		for (var key in src) {
			if (tar[key]) {
				var config = src[key];
				for (var prop in config) {
					tar[key][prop] = config[prop];
				}
			} else {
				tar[key] = src[key];
			}
		}
		return tar;
	};
	
	/**
	 * 
	 * @param {Object} lessJson : 自定义的less任务
	 * @param {Object} pkg      : package中定义的json对象
	 * 
	 */
	var parseLessTask = function(lessJson, pkg) {
		var newLessTask = {}
		,	lessTask = lessJson
		,	tempFiles
		,	taskFiles = []
		,	sourceMapFilename
		,	sourceMapURL
		,	inExt = ".less"
		,	outExt = ".css"
		,	sep = "/"
		;
		
		if(lessTask) {
			tempFiles = grunt.file.expand(lessTask.src);
			
			if(tempFiles.length > 0) {
				tempFiles.forEach(function(f,k){
					var _dest;
					var _newDest;
					var tempOpts = {};
					
					
					_dest = path.dirname(f).split(sep);
					_dest.splice(0, 1, lessTask.dest);
					_newDest = _dest.join(sep) + sep + path.basename(f,inExt) + outExt;
					
					tempOpts.src = f;
					tempOpts.dest = _newDest;
					taskFiles.push(tempOpts);
				});
			}
			
			
			taskFiles.forEach(function(v, i, arr){
				var _task = {};
				
				newLessTask['devLess' + i] = {};
				sourceMapFilename = v.dest + ".map";
				sourceMapURL = sourceMapFilename.split("/").pop();
				
				
				newLessTask['devLess' + i]['options'] = {
					sourceMap : true,
					sourceMapURL : sourceMapURL,
					sourceMapFilename : sourceMapFilename,
					sourceMapRootpath : '/' + pkg.name
				};
				
				_task[v.dest] = v.src;
				
				newLessTask['devLess' + i]['files'] =_task;
				
			});
		}
		
		
		return newLessTask;
		
	};
	
	var defineTask = function(prop) {
		if(config.taskOptions[prop]) {
			config.watch.src.tasks.unshift(prop);
			return true;
		} else {
			delete config[prop];
			return false;
		}
	};
	
	// 配置grunt任务 
	var globalConfig = eval("(" + grunt.file.read("../setting.json") + ")")
	,	projectConfig = eval("(" + grunt.file.read("project.json") + ")")
	,	lessJson = projectConfig.config.lessTask
	,	pkg = grunt.file.readJSON('package.json')
	,	less = parseLessTask(lessJson, pkg)
	,	config
	,	buildTask = ['cssjoin','cssmin','copy','transport','concat','uglify']
	;
	
	config = _extend(globalConfig.config,projectConfig.config);
	
	config.less = less;
	
	if(defineTask('less')) {
		buildTask.unshift('less');
	} else if(defineTask('sass')) {
		buildTask.unshift('sass');
		
	}
	
	// 初始化任务
	grunt.initConfig(config);
	
	// 加载任务
	require("load-grunt-tasks")(grunt);
	
	// 注册任务
	globalConfig.registerTask(buildTask);
	projectConfig.registerTask();
	
};
