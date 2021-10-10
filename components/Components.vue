<template>
  <div class="w-full px-12 py-6 mx-auto max-w-7xl">
    <!-- Button  -->
    <h3 class="text-lg font-medium text-gray-900">Basic Custom Rounded Buttons</h3>
    <div class="flex justify-between mt-2">
      <Button class="px-6 py-2 text-white transition-all bg-indigo-500 rounded-md shadow-md hover:bg-indigo-400 hover:text-gray-800 hover:bg-opacity-75 duration-400">
        Primary
      </Button>
      <Button class="px-6 py-2 text-white transition-all bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:text-gray-800 hover:bg-opacity-75 duration-400">
        Success
      </Button>
      <Button class="px-6 py-2 text-white transition-all bg-red-500 rounded-md shadow-md hover:bg-red-600 hover:text-gray-800 hover:bg-opacity-75 duration-400">
        Danger
      </Button>
      <Button class="px-6 py-2 text-white transition-all bg-yellow-500 rounded-md shadow-md hover:bg-yellow-400 hover:text-gray-800 hover:bg-opacity-75 duration-400">
        Warning
      </Button>
       <Button class="px-6 py-2 text-white transition-all bg-gray-500 rounded-md shadow-md hover:bg-gray-400 hover:text-gray-800 hover:bg-opacity-75 duration-400">
        Info
      </Button>
      <Button class="px-6 py-2 text-gray-900 transition-all bg-transparent border border-indigo-500 rounded-md shadow-md hover:bg-indigo-400 hover:text-gray-800 hover:bg-opacity-25 duration-400">
        Outline
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
