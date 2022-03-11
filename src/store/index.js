import Vue from 'vue'
import Vuex from 'vuex'
import apiService from "../config/apiService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    status:'',
    user:{}
  },
  mutations: {
    STATUS(state,data) {
      state.status = data
    },
    users(state, data) {
      state.user = data.user;
      state.token = data.token;
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const res = await apiService.register(credentials);
      console.log(res)
      if (res.status === 201) {
        console.log(res)
         commit(res.data.success.status)
        // localStorage.setItem("FA_token", JSON.stringify(res));
        // commit("users", res);
        return true;
      }
    },
  },
  modules: {
  }
})
