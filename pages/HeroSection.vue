<template>
  <div class="px-4 py-2 mt-6 sm:py-2 md:py-2 lg:py-20 lg:mt-2 sm:px-6">
    <div
      class="relative grid grid-cols-1 gap-6  sm:mt-2 lg:px-24 sm:gap-10 sm:grid-cols-2"
    >
      <div class="px-4 py-16 sm:py-8 md:py-8 lg:py-24 md:mt-20 sm:mt-12">
        <img
          src="../assets/images/site-title.png"
          class="sm:w-full w-72"
          alt=""
        />

        <p class="mt-6 font-normal text-gray-900 sm:mt-8 font-base">
          The Ian Potter Foundation makes grants nationally to support
          charitable organisations working to benefit the community across a
          wide range of sectors and endeavours.
        </p>

        <button
          class="flex px-6 py-3 mt-6 transition-all duration-300 bg-blue-400 rounded-md shadow-md  tranform hover:shadow-lg sm:mt-10 group bg-opacity-35 hovrer:bg-opacity-75"
        >
          Learn more
          <ArrowIcon
            class="w-6 h-6 ml-3 text-white transition-all duration-300 transform  hover:translate-scale-x-10"
          />
        </button>
      </div>

      <div class="sm:mt-20 md:mt-16">
        <img
          src="../assets/images/header-home-img.png"
          class="hidden sm:block"
          alt=""
        />
        <img
          src="../assets/images/mobile-home-img.jpg"
          class="block sm:hidden"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '../components/icons/ArrowIcon.vue'
export default {
  components: {
    ArrowIcon,
  },
  layout: 'main',
}
</script>
