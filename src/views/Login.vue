<template>
  <div>
    <div class="w-full max-w-xs my-8">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" v-model="email" type="email">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" v-model="password" type="password">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" v-on:click="login">
            Log In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-teal-500 hover:text-teal-800" href="#">
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
    <div class="w-full text-center">
      <router-link to="/signup" class="text-sm text-teal-500 hover:text-teal-800">
        Sign up to create your list.
      </router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      });
    }
  }
}
</script>
