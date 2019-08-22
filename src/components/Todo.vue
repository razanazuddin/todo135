<template>
  <div>
    <p class="text-sm text-gray-600 mb-2">Last updated on December 31, 2019 at 3:00 PM</p>
    <h2 class="text-2xl font-semibold mb-3">Today I will accomplish...</h2>
    <form>
      <h3 class="text-lg font-semibold my-3">1 big thing</h3>
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[0]" type="text">
      <h3 class="text-lg font-semibold my-3">3 medium things</h3>
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[1]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[2]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[3]" type="text">
      <h3 class="text-lg font-semibold my-3">5 little things</h3>
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[4]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[5]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[6]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[7]" type="text">
      <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="tasks[8]" type="text">
      <div class="flex justify-between mt-3">
        <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="reset">
          Clear list
        </button>
        <Spinner v-if="task.length < 0"/>
      </div>
    </form>
  </div>
</template>

<script>
import Spinner from './Spinner.vue'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      tasks: []
    }
  },
  mounted () {
    this.tasks = new Array(9)

    const storedTasks = this.$store.state.tasks
    if (storedTasks.length > 0) {
      this.tasks = storedTasks
    }
  }
}
</script>
