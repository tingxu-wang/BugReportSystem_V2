import Vue from "Vue"
import Vuex from "Vuex"

Vue.use(Vuex)

const state={
  user:{}
}



const mutations={
  getUserInfo (state,userObj){
    state.user={
      ...userObj
    }
  }
}

/*
const actions={
  getUserInfoBy ({dispatch},userObj){
    dispatch('getUserInfo',userObj)
  }
}
*/

const actions={
  getUserInfo ({commit},userObj){
    commit('getUserInfo',userObj)
  }
}

const store=new Vuex.Store({
  state,
  mutations,
  actions
})

export {store}
