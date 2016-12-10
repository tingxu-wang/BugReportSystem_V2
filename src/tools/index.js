import {rootPath} from 'SERVICE/config'
import {router} from 'ROUTER'

export const sendAjax=(relativePath,infoObj,fn) =>{
  $.post(rootPath+relativePath,infoObj,fn,'json')
}

export const getIdendity=(router)=>{
  const userData=router.app.userData,
        type=userData.type

  if(userData===null){
    throw new Error('根组件userData为null!')
    return
  }

  switch(type){
    case 0:
    return 'manager'
    break;
    case 1:
    return 'pm'
    break;
    case 2:
    return 'tester'
    break;
    case 3:
    return 'programer'
    break;
    case 4:
    return 'user'
    break;
  }
}
