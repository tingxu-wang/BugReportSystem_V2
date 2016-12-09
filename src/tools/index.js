import {rootPath} from 'SERVICE/config'

export const sendAjax=function(relativePath,infoObj,fn){
  $.post(rootPath+relativePath,infoObj,fn,'json')
}
