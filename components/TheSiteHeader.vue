<template>
<div class="">
  <nav id="nav" class="fixed top-0 left-0 z-40 w-full bg-white">
      <!--Dekstop Navbar block-->
      <div class="hidden w-full px-4 pt-3 sm:hidden md:hidden lg:block">
        <!-- header contact section  -->
        <div class="flex justify-center px-1 mt-3 space-x-4 sm:mt-1 sm:justify-end">
          <ul class="flex items-center space-x-4 text-sm">
            <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Links</li>
                    <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Contact</li>
            <li class="transition-all duration-500 cursor-pointer hover:text-blue-400 ">FAQs</li>

            <div class="h-5 border border-r border-gray-200"></div>

            <li class="flex items-center transition-all duration-500 cursor-pointer hover:text-blue-400">
              <UserIcon class="w-5 h-4 mr-2 -ml-1 text-green-500"/>
              <span class="">
                Login
              </span>
            </li>
          </ul>
        </div>

        <!-- border  -->
        <div class="mt-3 mb-2 border border-b border-gray-200"></div>

        <div class="px-2 sm:px-0 sm:flex sm:items-center sm:justify-between">
          <!-- Site logo  -->
            <nuxt-link to="/" class="hidden sm:hidden md:hidden lg:block">
              <img src="../assets/images/blocks-logo.png" class="" alt="">
            </nuxt-link>

            <!-- Menu items  -->
            <div class="hidden sm:hidden md:hidden lg:block stroke">
              <ul class="flex space-x-8 text-xs font-normal text-gray-900 sm:text-sm md:text-sm text-none xl:text-base" v-show="!isSearchMenu">
                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Our Vision</li>
                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">About</li>
                  <div class="dropdown">
                    <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">
                       What We Support
                    </li>
                    <!-- hover dropdown -->
                    <div class="absolute left-0 right-0 bg-white top-36">
                      <div class="w-full dropdown-content">
                        <div class="max-w-5xl mx-auto">
                          <div class="grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                            <div class="cols-1">
                            <h3 class="w-20 mx-auto text-base font-medium text-gray-900">
                              What We
                              Support
                            </h3>
                            </div>

                            <div class="cols-2">
                              <h3>Program Areas</h3>

                              <div class="mt-4">
                                <ul class="mt-2 space-y-2 text-sm font-normal cursor-pointer">
                                  <li>
                                    <a href="#" class="text-green-400 ">Arts</a>
                                  </li>
                                  <li>
                                    Community Wellbeing
                                  </li>
                                  <li>
                                      Early Childhood
                                  </li>
                                  <li>
                                    Development Environmental
                                  </li>
                                  <li>
                                    Conservation Medical
                                  </li>
                                  <li>
                                    Research Public Health Research
                                  </li>
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
                                <img src="../assets/images/about-img.png"  class="w-full h-48 mt-1" alt="">

                                <div class="mt-6 mb-2">
                                  <h3 class="text-sm font-medium">Card Title</h3>
                                  <p class="mt-2 text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</p>

                                  <button class="px-4 py-2 mt-3 text-sm font-normal text-gray-900 transition-all border border-blue-400 rounded-md duration-400 hover:bg-green-400 hover:text-white">
                                    Find out more
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="w-full mx-auto mt-3 mb-3 border border-b border-gray-200 mx-w-9xl"></div>
                        <!-- dropdown-footer -->
                          <div class="pb-10">
                            <ul class="flex items-center justify-center text-sm font-normal text-center cursor-pointer">
                              <li>Policies</li>
                              <div class="h-4 ml-3 mr-3 border border-gray-300 border-solid"></div>
                              <li class="text-green-400">Sitemap</li>
                              <div class="h-4 ml-3 mr-3 border border-gray-300 border-solid"></div>
                              <li>Places</li>
                              <div class="h-4 ml-3 mr-3 border border-gray-300 border-solid"></div>
                              <li>Catalysing Change	</li>
                            </ul>
                          </div>
                      </div>
                    </div>
                  </div>

                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Can We Apply</li>
                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Grantees</li>
                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">Knowledge Center</li>
                  <li class="transition-all duration-500 cursor-pointer hover:text-blue-400">News</li>
                </ul>
              </div>



            <!-- Search Input  -->
            <div class="relative" v-show="isSearchMenu">
              <input type="text" class="px-4 py-2 text-sm font-normal text-gray-900 bg-gray-200 border rounded-md w-72" placeholder="Search"/>
              <SearchIcon class="absolute mr-2 right-1 top-2" style="width: 20px" />
            </div>

            <div class="flex items-center space-x-4">
              <button  v-if="!isSearchMenu" class="hidden px-6 py-2 text-blue-800 transition-all duration-500 bg-green-100 bg-opacity-75 rounded-md lg:block sm:hidden md:hblock hover:bg-green-400">
                Apply
              </button>

              <button @click="isSearchMenu =! isSearchMenu && !isSearchMenu">
                <SearchIcon class="hidden w-6 h-6 transition-all duration-700 ease-in-out transform cursor-pointer sm:hidden md:hidden lg:block hover:text-blue-400"/>
                <XIcon class="w-4 h-4 hover:text-black" v-show="isSearchMenu" />
              </button>
            </div>
          </div>
        </div>


        <!-- Mobile First view  Navbar-->
        <div class="block h-16 px-4 py-2 bg-white shadow-lg sm:block md:block lg:hidden">
          <div class="flex items-center justify-between cursor-pointer">
            <SearchIcon class="w-5 h-5 text-green-500" @click="isOpen =! isOpen"/>


              <!-- Mobile logo  -->
              <nuxt-link to="/home">
                <img src="../assets/images/blocks-logo.png" class="w-20 h-12" alt="">
              </nuxt-link>

            <button @click="isOpen =! isOpen">
              <XIcon  class="hidden" />
              <IconBar class="" />
            </button>
          </div>
        </div>

           <!-- Mobile menu Search block -->
              <div class="h-20 px-4 py-2 mt-20 bg-gray-200 rounded-md shadow-md" >
                <div class="relative flex items-center">
                  <input type="text" class="px-6 py-2 text-sm font-normal text-gray-900 bg-gray-300 border rounded-md w-72" placeholder="Search"/>

                  <SearchIcon  class="absolute w-6 h-5 left-60 top-2"/>
                  <XIcon class="flex justify-end w-4 h-4"/>
                </div>
              </div>





        <!-- Mobile Menu Items  -->
        <div class="absolute right-0 block h-auto pb-10 bg-green-500 shadow sm:block md:block lg:hidden w-72 sm:w-full" v-show="isOpen">
          <ul class="text-sm font-normal text-left text-white ">
            <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>Our Vision</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>About</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
              <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>What We Support</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
              <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>How To Apply</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>Grantees</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>Knowledge Center</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 mb-1 text-white transition-all duration-500 cursor-pointer hover:bg-green-400 hover:text-white" @click="isOpen =! isOpen">
              <span>News</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>

            <li class="flex items-center justify-between px-3 py-4 pl-3 text-white border border-white cursor-pointer hover:text-white">
              My Account
              <button class="flex items-center px-4 py-2 bg-transparent border border-white rounded-md group hover:border-white hover:bg-green-400 hover:text-white">
                <user-icon class="w-4 h-4 mr-2 -ml-1 hover:text-white"/>
                Login
              </button>
            </li>
          </ul>

          <div class="flex items-center justify-center py-5 space-x-6">
            <facebook-icon class="w-5 h-5"/>
            <youtube-icon class="w-5 h-5"/>
            <twitter-icon class="w-5 h-5"/>
          </div>

          <ul class="flex items-center justify-center space-x-4 text-sm text-white">
            <li class="cursor-pointer hover:text-green-800">Links</li>
            <div class="h-4 border border-r border-white"></div>
            <li class="cursor-pointer hover:text-green-800">Contact</li>
            <div class="h-4 border border-r border-white"></div>
            <li class="cursor-pointer hover:text-green-800 ">FAQs</li>
            <div class="h-4 border border-r border-white"></div>
          </ul>
        </div>

        <!-- About Dropdown  -->
        <div class="absolute right-0 hidden h-auto pb-10 bg-green-500 shadow w-72 sm:hidden" v-show="isOpen">
          <ul class="text-sm font-normal text-left text-white ">
            <li class="flex items-center justify-start px-1 py-4 pr-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <ChevronLeftIcon class="w-5 h-5 mr-1 text-white"/>
              <span>About</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>About Sir Ian Potter</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Timeline & History</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>People</span>
              <ChevronRightIcon class="w-5 h-5 mr-1 text-white"/>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Donate</span>
            </li>
          </ul>

          <div class="px-3 mt-6">
            <div class="px-3 py-2 bg-white rounded-md shadow-md">
              <img src="../assets/images/about-img.png"  class="w-full mt-1" alt="">

              <div class="mt-6 mb-2">
                <h3 class="text-sm font-medium">Card Title</h3>
                <p class="mt-2 text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</p>
              </div>
            </div>
          </div>

          <ul class="flex items-center justify-center mt-6 space-x-4 text-sm text-white">
            <li class="cursor-pointer hover:text-green-800">Links</li>
            <div class="h-4 border border-r border-white"></div>
            <li class="cursor-pointer hover:text-green-800">Contact</li>
            <div class="h-4 border border-r border-white"></div>
            <li class="cursor-pointer hover:text-green-800 ">FAQs</li>
            <div class="h-4 border border-r border-white"></div>
          </ul>
        </div>

        <!-- People Drodown  -->
        <div class="absolute right-0 hidden h-auto pb-10 bg-green-500 shadow w-72 sm:hidden" v-show="isOpen">
          <ul class="text-sm font-normal text-left text-white ">
            <li class="flex items-center justify-start px-1 py-4 pr-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <ChevronLeftIcon class="w-5 h-5 mr-1 text-white"/>
              <span>People</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Item One</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Item Two</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Item Three</span>
            </li>
            <li class="flex items-center justify-between py-4 pl-3 text-white cursor-pointer hover:bg-green-400 hover:text-white">
              <span>Item Four</span>
            </li>
          </ul>

        <div class="px-3 mt-6">
          <div class="px-3 py-2 bg-white rounded-md shadow-md">
            <img src="../assets/images/about-img.png"  class="w-full mt-1" alt="">

            <div class="mt-6 mb-2">
              <h3 class="text-sm font-medium">Card Title</h3>
              <p class="mt-2 text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, fugit.</p>
            </div>
          </div>
        </div>

        <ul class="flex items-center justify-center mt-6 space-x-4 text-sm text-white">
          <li class="cursor-pointer hover:text-green-800">Links</li>
          <div class="h-4 border border-r border-white"></div>
          <li class="cursor-pointer hover:text-green-800">Contact</li>
          <div class="h-4 border border-r border-white"></div>
          <li class="cursor-pointer hover:text-green-800 ">FAQs</li>
          <div class="h-4 border border-r border-white"></div>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import SearchIcon from './icons/SearchIcon.vue'
import UserIcon from './icons/UserIcon.vue'
import XIcon from './icons/XIcon.vue'
import IconBar from './icons/IconBar.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'
import ChevronLeftIcon from './icons/ChevronLeftIcon.vue'
export default {
  components: {
    SearchIcon,
    UserIcon,
    XIcon,
    IconBar,
    FacebookIcon,
    YoutubeIcon,
    TwitterIcon,
    ChevronRightIcon,
    ChevronLeftIcon
  },
  data() {
    return {
      isOpen: false,
      isClose: false,
      isSearchMenu: false,
      active: false
    }
  },


  computed: {
    isShowMenu() {
      if(this.isOpen) {
        return true
      }

      return false
    }
  },

  mounted(){
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav');
      if(window.scrollY > navBar.offsetTop){
        this.active = true;
        } else {
        this.active = false;
      }
    }
  },


  methods: {
    openMenu() {
      this.isOpen = true
    },
    closeMenu() {
      this.isOpen = false
    },

    toggleNavClass(){
      if(this.active === false){
        return 'nav'
      } else {
        return 'sticky-nav'
      }
    }
  },


}
</script>



<style lang="css">
/* stroke */

ul li:after,
ul li:before {
  transition: all .5s;
}
ul li:hover {
  color: #35BDB2
;
}
.stroke ul li ,
.fill ul li  {
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
  top:80px;
  color: transparent;
  background: #35BDB2;
  height: 2px;
}
.stroke ul li:hover:after {
  width: 100%;
}

/* Sticky header   */
/* .sticky-nav{
  transition: 100ms;
  padding: 20px;
}

#nav {
  width: 100%;
  background-color:white;
  position: fixed;
  top: 0;
}

#nav.sticky{
  transition: 150ms;
  border: black;
  box-shadow: 0px 15px 10px -15px #111;
} */

/* Header dropdown page  */
.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  max-width: 100%;
}

.dropdown-content a{
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: white;}

.dropdown:hover .dropdown-content {display: block;}

</style>
