<template>
  <div id="app" class="bg-gray-100">
    <div class="bg-gray-900">
      <div class="max-w-lg mx-auto flex justify-between p-4">
        <h1 class="text-gray-100 font-black">TODO 1-3-5</h1>
        <div>
          <router-link to="/about" class="text-gray-100">About</router-link> |
          <template v-if="isAuthenticated">
            <button type="button" class="text-gray-100">Log out</button>
          </template>
          <template v-else>
            <router-link to="/login" class="text-gray-100">Log in</router-link> |
            <router-link to="/signup" class="text-gray-100">Sign up</router-link>
          </template>
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
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('userLogout');
    }
  }
}
</script>

<style src="./assets/tailwind.css">
