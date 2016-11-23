/*
 * create by tingxu.wang 20161123
 * bug系统共用js脚本
*/

define(function(require,exports,module){
  /* 导入bootstrap所需的jquery */
  require('jquery')
  /* 导入bootstrap插件脚本 */
  require('../plugin/bootstrap')
  /* 导入vue */
  require('vue')


  //bootstrap 提示插件
	$('[data-toggle="tooltip"]').tooltip()
	$('[data-toggle="popover"]').popover({
		trigger:'hover'
	})
})
