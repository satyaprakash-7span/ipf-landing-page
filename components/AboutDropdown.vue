<template>
  <!-- About Dropdown  -->
  <div class="relative">
    <transition name="fade" :duration="{ enter: 800, leave: 500 }">
      <div
        v-show="showAbout"
        class="absolute right-0 h-auto pb-10 overflow-y-auto bg-green-500 shadow  sm:w-72 md:w-full w-72"
      >
        <ul class="text-sm font-normal text-left text-white">
          <li
            class="flex items-center justify-start px-1 py-4 pr-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
            @click="backMobileMenu"
          >
            <ChevronLeftIcon class="w-5 h-5 mr-1 text-white" />
            <span>About</span>
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>About Sir Ian Potter</span>
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>Timeline & History</span>
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
            @click="peopleOpen"
          >
            <span>People</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>Donate</span>
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
    </transition>
    <MobileMenu :show-mobile-menu="isMobileMenu" />

    <PeopleDropdown :show-people="isPeople" />
  </div>
</template>

<script>
import ChevronLeftIcon from './icons/ChevronLeftIcon.vue'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'
import PeopleDropdown from './PeopleDropdown.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  name: 'AboutDropdown',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    PeopleDropdown,
    MobileMenu,
  },

  props: {
    showAbout: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isPeople: false,
      aboutProp: null,
      isMobileMenu: false,
    }
  },

  mounted() {
    this.aboutProp = this.showAbout
  },

  methods: {
    peopleOpen() {
      this.isPeople = true
      this.aboutProp = false
    },

    backMobileMenu() {
      this.isMobileMenu = true
      this.aboutProp = false
      console.log(this.isMobileMenu, 'mobile menu')
      console.log(this.aboutProp, 'about prop')
    },
  },
}
</script>
