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
    SAVE_USER(state, data) {
      state.user = data;
      state.token = data.access_token;

      localStorage.setItem("FA_token", JSON.stringify(data.access_token));
    },
  },
  actions: {
    async register({ commit }, credentials) {
      const res = await apiService.register(credentials);
      console.log(res)
      if (res.status === 201) {
        console.log(res)
         commit('STATUS',res.data.success.status)
        // localStorage.setItem("FA_token", JSON.stringify(res));
        // commit("users", res);
        return true;
      }
    },
    async login({ commit }, credentials) {
      const res = await apiService.login(credentials);
      console.log(res.data)
  
      commit('SAVE_USER',res.data.success.user);

    },
    async fetchUser({ commit }, credentials) {
      const res = await apiService.user();
      console.log(res)
      if (res.status === 201) {
        console.log(res)
        // localStorage.setItem("FA_token", JSON.stringify(res));
        // commit("users", res);
        return true;
      }
    },
  },
  modules: {
  }
})
