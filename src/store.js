import firebase from 'firebase'
import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    user: null,
    isAuthenticated: false
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setIsAuthenticated (state, payload) {
      state.isAuthenticated = payload
    },
    setTasks(state, payload) {
      state.tasks = payload
    },
    setUserTasks(state, payload) {
      state.userTasks = payload
    }
  },
  actions: {
    userSignup ({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('setUser', user)
          commit('setIsAuthenticated', true)
        })
        .catch(() => {
          commit('setUser', null)
          commit('setIsAuthenticated', false)
        })
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            commit('setUser', user)
            commit('setIsAuthenticated', true)
            router.push('/home')
        })
        .catch(() => {
            commit('setUser', null)
            commit('setIsAuthenticated', false)
            router.push('/login')
        })
    },
    userLogout({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit('setUser', null)
          commit('setIsAuthenticated', false)
          router.push('/login')
        })
        .catch(() => {
          commit('setUser', null)
          commit('setIsAuthenticated', false)
          router.push('/home')
        })
    },
    async getTasks({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiUrl}`, {
            params: {
                q: plan,
                app_id: '5b6623d5',
                app_key: '46674aa2193dbb7b88ffd897331e661a',
                from: 0,
                to: 9
            }
        })
        commit('setTasks', response.data.hits)
      } catch (error) {
        commit('setTasks', [])
      }
    },
    addTask({ state }, payload) {
      firebase
        .database()
        .ref('users')
        .child(state.user.user.uid)
        .push(payload.Task.label)
    },
    getUserTasks({ state, commit }) {
      return firebase
        .database()
        .ref('users/' + state.user.user.uid)
        .once('value', snapshot => {
          commit('setUserTasks', snapshot.val())
        })
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined
    }
  }
})
