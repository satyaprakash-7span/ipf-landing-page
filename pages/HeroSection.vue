<template>
  <div class="px-4 mt-16 sm:py-24 sm:px-6">
    <div class="relative grid grid-cols-1 gap-6 sm:mt-2 sm:px-24 sm:gap-10 sm:grid-cols-2">
      <div class="px-4 py-6 sm:py-24">
        <img src="../assets/images/site-title.png" class="sm:w-full w-72 " alt="">

        <p class="mt-6 font-normal text-gray-900 sm:mt-8 font-base">The Ian Potter Foundation makes grants nationally to support charitable organisations working to benefit the community across a wide range of sectors and endeavours.</p>

        <button class="flex px-6 py-3 mt-6 bg-green-500 rounded-md shadow-md sm:mt-10 group bg-opacity-35 hover:bg-green-800">
          Learn more
          <ArrowIcon class="w-6 h-6 ml-3 text-white transition-all duration-300 group-hover:translate-x-4"/>
        </button>
      </div>

      <div class="col-2">
        <img src="../assets/images/header-home-img.png" class="hidden sm:block" alt="">
        <img src="../assets/images/mobile-home-img.jpg" class="block sm:hidden" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/ArrowIcon.vue'
export default {
  layout: 'main',

  components: {
    ArrowIcon
  }
}
</script>
