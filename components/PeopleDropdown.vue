<template>
  <!-- People Drodown  -->
  <div class="relative">
    <div
      v-show="showPeople"
      class="absolute right-0 h-auto pb-10 bg-green-500 shadow  sm:w-72 md:w-full w-72"
    >
      <ul class="text-sm font-normal text-left text-white">
        <li
          class="flex items-center justify-start px-1 py-4 pr-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
          @click="backToAbout"
        >
          <ChevronLeftIcon class="w-5 h-5 mr-1 text-white" />
          <span>People</span>
        </li>
        <li
          class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
        >
          <span>Item One</span>
        </li>
        <li
          class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
        >
          <span>Item Two</span>
        </li>
        <li
          class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
        >
          <span>Item Three</span>
        </li>
        <li
          class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
        >
          <span>Item Four</span>
        </li>
      </ul>

      <div class="px-3 mt-6">
        <div class="px-3 py-2 bg-white rounded-md shadow-md">
          <img
            src="../assets/images/about-img.png"
            class="w-full mt-1"
            alt=""
          />

          <div class="mt-6 mb-2">
            <h3 class="text-sm font-medium">Card Title</h3>
            <p class="mt-2 text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              fugit.
            </p>
          </div>
        </div>
      </div>

      <ul
        class="flex items-center justify-center mt-6 space-x-4 text-sm text-white "
      >
        <li class="cursor-pointer hover:text-green-800">Links</li>
        <div class="h-4 border border-r border-white"></div>
        <li class="cursor-pointer hover:text-green-800">Contact</li>
        <div class="h-4 border border-r border-white"></div>
        <li class="cursor-pointer hover:text-green-800">FAQs</li>
        <div class="h-4 border border-r border-white"></div>
      </ul>
    </div>
    <AboutDropdown :show-about="aboutOpen" />
  </div>
</template>
<script>
import ChevronLeftIcon from './icons/ChevronLeftIcon.vue'
import AboutDropdown from './AboutDropdown.vue'

export default {
  components: {
    ChevronLeftIcon,
    AboutDropdown,
  },

  props: {
    showPeople: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      aboutOpen: false,
      isPeople: null,
    }
  },

  mounted() {
    this.isPeople = this.showPeople
  },

  methods: {
    backToAbout() {
      this.aboutOpen = true
      this.isPeople = false
      console.log('aboutOpen', this.aboutOpen)
      console.log(this.isPeople, 'isPeople ')
    },
  },
}
</script>
