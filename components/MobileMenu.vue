<template>
  <div class="relative">
    <transition
      name="fade"
      :duration="{ enter: 500, leave: 600 }"
      mode="out-in"
    >
      <div
        v-show="showMobileMenu"
        :class="[{ '': active }, '-right-1']"
        class="absolute right-0 block h-auto pb-10 bg-green-500 shadow  sm:block md:block lg:hidden w-72 sm:w-72 md:w-full"
      >
        <ul class="text-lg font-medium text-left text-white">
          <li
            class="flex items-center justify-between h-16 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>Our Vision</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>

          <li
            class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
            @click="aboutOpen"
          >
            <span>About</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>

          <li
            class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>What We Support</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>How To Apply</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>Grantees</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>Knowledge Center</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>
          <li
            class="flex items-center justify-between py-4 pl-3 mb-1 text-white transition-all duration-500 cursor-pointer  hover:bg-green-400 hover:text-white"
          >
            <span>News</span>
            <ChevronRightIcon class="w-5 h-5 mr-1 text-white" />
          </li>

          <li
            class="flex items-center justify-between px-3 py-4 pl-3 text-base font-normal text-white border border-white cursor-pointer  hover:text-white"
          >
            My Account
            <button
              class="flex items-center px-4 py-2 text-base font-normal bg-transparent border border-white rounded-md  group hover:border-white hover:bg-white hover:bg-opacity-30 hover:text-white hover:text-blue-400"
            >
              <user-icon
                class="w-4 h-4 mr-2 -ml-1 text-white hover:text-white"
              />
              Login
            </button>
          </li>
        </ul>

        <div class="flex items-center justify-center py-5 space-x-6">
          <facebook-icon class="w-5 h-5" />
          <youtube-icon class="w-5 h-5" />
          <twitter-icon class="w-5 h-5" />
        </div>

        <ul
          class="flex items-center justify-center space-x-4 text-sm text-white"
        >
          <li class="cursor-pointer hover:text-green-800">Links</li>
          <div class="h-4 border border-r border-white"></div>
          <li class="cursor-pointer hover:text-green-800">Contact</li>
          <div class="h-4 border border-r border-white"></div>
          <li class="cursor-pointer hover:text-green-800">FAQs</li>
          <div class="h-4 border border-r border-white"></div>
        </ul>
      </div>
      <transition-child name="fade" :duration="{ enter: 800, leave: 500 }">
        <AboutDropdown :show-about="isAbout" />
      </transition-child>
    </transition>
  </div>
</template>
<script>
import UserIcon from './icons/UserIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'
import AboutDropdown from './AboutDropdown.vue'

export default {
  components: {
    UserIcon,
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    ChevronRightIcon,
    AboutDropdown,
  },

  props: {
    showMobileMenu: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      isMobileMenu: false,
      isAbout: false,
      active: false,
    }
  },

  mounted() {
    this.isMobileMenu = this.showMobileMenu
  },

  methods: {
    aboutOpen() {
      this.isAbout = true
      this.isMobileMenu = false
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
