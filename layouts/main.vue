<template>
  <div class="overflow-hidden bg-gray-50 ">
    <the-site-header  />

    <div class="">
      <main id="main" class="w-full">
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import TheSiteHeader from '../components/TheSiteHeader.vue'
export default {
  components: {
    TheSiteHeader
  }

}
</script>


