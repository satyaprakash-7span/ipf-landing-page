<template>
  <nav
    id="nav"
    :class="[
      { 'transparent-navbar bg-transparent shadow-lg z-1': active },
      'fixed top-0 left-0 z-40 w-full bg-white scroll-navbar',
    ]"
  >
    <!--Dekstop Navbar block-->
    <div class="hidden w-full px-4 sm:px-8 sm:hidden md:hidden lg:block">
      <!-- header contact section  -->
      <div
        class="flex justify-center pt-2 pb-2 sm:justify-end 2xl:pt-4 2xl:pb-3"
      >
        <ul
          class="
            2xl:text-xl
            flex
            font-normal
            items-center
            space-x-3.5
            lg:space-x-4
            text-base
          "
        >
          <li
            class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
          >
            Links
          </li>
          <li
            class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
          >
            Contact
          </li>
          <li
            class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
          >
            FAQs
          </li>

          <div class="h-5 border border-r border-gray-200"></div>

          <li
            class="flex items-center transition-all duration-500 cursor-pointer  hover:text-blue-400"
          >
            <UserIcon class="w-5 h-4 mr-2 -ml-1 text-green-400" />
            <span class=""> Login </span>
          </li>
        </ul>
      </div>

      <!-- border  -->
      <div class="border border-b border-gray-200"></div>

      <div class="px-2 sm:px-0 sm:flex sm:items-center sm:justify-between">
        <!-- Site logo  -->
        <nuxt-link to="/" class="hidden mt-1 sm:hidden md:hidden lg:block">
          <img src="../assets/images/blocks-logo.png" class="" alt="" />
        </nuxt-link>

        <!-- dekstop Menu items  -->
        <div class="hidden sm:hidden md:hidden lg:block stroke">
          <ul
            v-if="!isSearchMenu"
            class="flex space-x-12 text-sm font-medium text-gray-900  2xl:space-x-28 lg:text-base md:text-base 2xl:text-xl text-none sm:text-base"
          >
            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              Our Vision
            </li>
            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              About
            </li>
            <div class="dropdown">
              <li
                class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
              >
                What We Support
              </li>
              <transition
                name="fade"
                :duration="{ enter: 500, leave: 600 }"
                mode="out-in"
              >
                <!-- hover dropdown -->
                <div class="absolute left-0 right-0 bg-white top-36">
                  <div class="w-full dropdown-content">
                    <div class="max-w-5xl mx-auto">
                      <div
                        class="grid grid-cols-1 py-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
                      >
                        <div class="cols-1">
                          <h3
                            class="w-20 mx-auto text-base font-medium text-gray-900 "
                          >
                            What We Support
                          </h3>
                        </div>

                        <div class="cols-2">
                          <h3>Program Areas</h3>

                          <div class="mt-4">
                            <ul
                              class="mt-2 space-y-2 text-sm font-normal cursor-pointer "
                            >
                              <li>
                                <a href="#" class="text-green-400">Arts</a>
                              </li>
                              <li>Community Wellbeing</li>
                              <li>Early Childhood</li>
                              <li>Development Environmental</li>
                              <li>Conservation Medical</li>
                              <li>Research Public Health Research</li>
                            </ul>
                          </div>
                        </div>

                        <div class="cols-3">
                          <a href="">Major Grants</a>
                        </div>

                        <div class="cols-3">
                          <a href="">Sub-Funds</a>
                        </div>

                        <div class="w-64">
                          <div class="px-3 py-3 bg-white rounded-md shadow-md">
                            <img
                              src="../assets/images/about-img.png"
                              class="w-full h-48 mt-1"
                              alt=""
                            />

                            <div class="mt-6 mb-2">
                              <h3 class="text-sm font-medium">Card Title</h3>
                              <p class="mt-2 text-sm font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. In, fugit.
                              </p>

                              <button
                                class="px-4 py-2 mt-3 text-sm font-normal text-gray-900 transition-all border border-blue-400 rounded-md  duration-400 hover:bg-green-400 hover:text-white"
                              >
                                Find out more
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="w-full mx-auto mt-3 mb-3 border border-b border-gray-200  mx-w-9xl"
                    ></div>
                    <!-- dropdown-footer -->
                    <div class="pb-10">
                      <ul
                        class="flex items-center justify-center text-sm font-normal text-center cursor-pointer "
                      >
                        <li>Policies</li>
                        <div
                          class="h-4 ml-3 mr-3 border border-gray-300 border-solid "
                        ></div>
                        <li class="text-green-400">Sitemap</li>
                        <div
                          class="h-4 ml-3 mr-3 border border-gray-300 border-solid "
                        ></div>
                        <li>Places</li>
                        <div
                          class="h-4 ml-3 mr-3 border border-gray-300 border-solid "
                        ></div>
                        <li>Catalysing Change</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              Can We Apply
            </li>
            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              Grantees
            </li>
            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              Knowledge Center
            </li>
            <li
              class="transition-all duration-500 cursor-pointer  hover:text-blue-400"
            >
              News
            </li>
          </ul>

          <!-- Search Input  -->
          <div v-else class="relative">
            <input
              type="text"
              class="px-4 py-2 text-sm font-normal text-gray-900 bg-gray-200 border rounded-md  w-72"
              placeholder="Search"
            />
            <SearchIcon
              class="absolute mr-2 text-gray-600 right-1 top-2"
              style="width: 20px"
            />
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <button
            v-if="!isSearchMenu"
            class="hidden w-24 h-12 text-base font-medium text-blue-800 transition-all duration-500 bg-green-100 bg-opacity-75 rounded-md  lg:block sm:hidden md:hblock hover:bg-green-400"
          >
            Apply
          </button>

          <button @click="isSearchMenu = !isSearchMenu && !isSearchMenu">
            <SearchIcon
              v-if="!isSearchMenu"
              class="hidden w-6 h-6 text-gray-600 transition-all duration-700 ease-in-out transform cursor-pointer  sm:hidden md:hidden lg:block hover:text-blue-400"
            />
            <XIcon v-else class="w-4 h-4 mr-3 hover:text-black" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile view Navbar-->
    <div
      class="block h-auto px-4 py-2 bg-white  rounded-b-md sm:block md:block lg:hidden"
    >
      <div class="flex items-center justify-between cursor-pointer">
        <SearchIcon
          class="w-5 h-5 text-green-400"
          @click="isMobileSearch = !isMobileSearch"
        />

        <!-- Mobile logo  -->
        <nuxt-link to="/">
          <img
            src="../assets/images/blocks-logo.png"
            class="w-20 h-12"
            alt=""
          />
        </nuxt-link>

        <button @click="isOpen = !isOpen">
          <IconBar v-if="!isOpen" />
          <XIcon v-else />
        </button>
      </div>

      <!-- Mobile menu Search block -->
      <div v-show="isMobileSearch" class="py-2 bg-white rounded rounded-b-md">
        <div class="max-w-lg px-4 border border-gray-200"></div>
        <div class="flex items-center justify-between mt-3 space-x-4">
          <div class="relative">
            <input
              type="text"
              class="px-5 py-2 text-sm font-normal text-gray-900 bg-gray-100 border rounded-md  w-96"
              placeholder="Search"
            />

            <SearchIcon
              class="absolute w-6 h-5 text-gray-600 top-2"
              style="left: 90%; width: 20px"
            />
          </div>

          <!-- v-show="isMobileSearchMenu" -->
          <XIcon
            class="mr-4 text-gray-600 cursor-pointer"
            style="width: 20px"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu Items -->
    <MobileMenu :show-mobile-menu="isOpen" />
  </nav>
</template>

<script>
import SearchIcon from './icons/SearchIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import XIcon from './icons/XIcon.vue'
import IconBar from './icons/IconBar.vue'
import MobileMenu from './MobileMenu.vue'

export default {
  components: {
    SearchIcon,
    UserIcon,
    XIcon,
    IconBar,
    MobileMenu,
  },

  data() {
    return {
      isOpen: false,
      isClose: false,
      isSearchMenu: false,
      active: false,
      isMobileSearch: false,
      isSidebarOpen: false,
    }
  },

  computed: {
    isMobileSearchMenu() {
      this.showMobileSearchMenu()

      return false
    },
  },

  mounted() {
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav')
      if (window.scrollY > navBar.offsetTop) {
        this.active = true
      } else {
        this.active = false
      }
    }
  },

  methods: {
    showMobileSearchMenu() {
      this.isMobileSearch = true
    },
    closeMobileSearchMenu() {
      this.isMobileSearch = false
    },
  },
}
</script>

<style lang="css">
/* stroke */

ul li:after,
ul li:before {
  transition: all 0.5s;
}
ul li:hover {
  color: #35bdb2;
}
.stroke ul li,
.fill ul li {
  position: relative;
}
.stroke ul li:after,
.fill ul li:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 10px;
  margin: auto;
  width: 0%;
  content: '.';
  top: 86px;
  color: transparent;
  background: #35bdb2;
  height: 2px;
}
.stroke ul li:hover:after {
  width: 100%;
}

/* Sticky header   */
.scroll-navbar {
  transition: all 700ms ease-in-out;
  padding: 0;
}

.transparent-navbar {
  transition: all 700ms ease-in-out;
  padding: 0.2rem 0.2rem;
}

/* Header dropdown page  */
.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  max-width: 100%;
}

.dropdown-content a {
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: white;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
