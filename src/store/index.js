import { createStore } from 'vuex'
// Import axios to make HTTP requests
import axios from 'axios'
export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers: (state) => state.users
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        commit('setUsers', data.data)
      } catch (error) {
        alert(error)
        console.log(error)
      }
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  }
})
