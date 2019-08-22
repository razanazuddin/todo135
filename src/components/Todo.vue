<template>
  <div>
    <h2 class="text-2xl font-semibold mb-3">Today I will accomplish...</h2>
    <h3 class="text-lg font-semibold my-3">1 big thing</h3>
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[0]" type="text">
    <h3 class="text-lg font-semibold my-3">3 medium things</h3>
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[1]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[2]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[3]" type="text">
    <h3 class="text-lg font-semibold my-3">5 little things</h3>
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[4]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[5]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[6]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[7]" type="text">
    <input class="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="task[8]" type="text">
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  data () {
    return {
      task: []
    }
  },
  mounted () {
    this.task = new Array(9)
  }
}
</script>
