<template>
  <div id="app">
    <div class="bg-gray-900 flex justify-between p-4">
      <h1 class="text-gray-100 font-black">TODO 1-3-5</h1>
      <div>
        <router-link to="/" class="text-gray-100">Home</router-link> |
        <router-link to="/about" class="text-gray-100">About</router-link> |
        <router-link to="/login" class="text-gray-100">Log in</router-link> |
        <router-link to="/signup" class="text-gray-100">Sign up</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style src="./assets/tailwind.css">
