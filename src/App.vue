<template>
  <div id="app" class="bg-gray-100">
    <div class="bg-gray-900">
      <div class="max-w-lg mx-auto flex justify-between p-4">
        <h1 class="text-gray-100 font-black">TODO 1-3-5</h1>
        <div>
          <router-link to="/about" class="text-gray-100">About</router-link> |
          <button type="button" class="text-gray-100" v-on:click="logout">Log out</button>
        </div>
      </div>
    </div>
    <div class="max-w-lg mx-auto flex justify-center">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style src="./assets/tailwind.css">
