<template>
  <div
    class="px-0 py-2 mt-10  sm:mt-2 sm:py-2 md:py-2 lg:py-20 sm:px-6 2xl:mt-6 lg:mt-2"
  >
    <div
      class="relative grid grid-cols-1 gap-6 mt-10  sm:gap-10 sm:mt-1 sm:grid-cols-2"
    >
      <div class="flex items-center justify-center px-6 pr-0 sm:px-0 sm:pl-32">
        <div>
          <h1
            class="text-5xl font-medium text-blue-400  font-museo 2xl:text-9xl lg:text-6xl"
          >
            The Lan Potter Foundation
          </h1>

          <p
            class="mt-2 text-base font-normal text-gray-900  sm:mt-14 sm:text-xl 2xl:mt-24 2xl:text-4xl"
          >
            The Ian Potter Foundation makes grants nationally to support
            charitable organisations working to benefit the community across a
            wide range of sectors and endeavours.
          </p>
          <button
            class="flex items-center w-auto px-6 py-3 mt-6 text-base font-medium text-white transition-all duration-300 bg-blue-400 rounded-md shadow-md  2xl:text-2xl 2xl:mt-24 2xl:px-10 2xl:py-6 hover:shadow-lg sm:mt-9 group bg-opacity-35 hovrer:bg-opacity-75"
          >
            Learn more
            <ArrowIcon
              class="w-6 h-6 ml-3 text-white transition-all duration-300 transform  hover:translate-scale-x-10"
            />
          </button>
        </div>
      </div>

      <div class="pl-0 pr-0 mt-16 sm:pr-32 2xl:pl-28 sm:mt-14">
        <img
          src="../assets/images/home-hero-section.png"
          class="hidden sm:block"
          alt=""
        />
        <img
          src="../assets/images/mobile-home-hero-section-img.jpg"
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
