import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

let app = ''

firebase.initializeApp({
  apiKey: 'AIzaSyDxjFbZQE2iVPY2eh_HodokdrwHvFaKxoQ',
  authDomain: 'todo-135.firebaseapp.com',
  databaseURL: 'https://todo-135.firebaseio.com',
  projectId: 'todo-135',
  storageBucket: '',
  messagingSenderId: '811286683640',
  appId: '1:811286683640:web:7e7ea98cd8bd1cb8'
})

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
