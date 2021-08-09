<template>
<div class="max-w-md mx-auto font-poppins">
  <div class="row items-center h-screen bg-white">
    <div class="h-full">
      <div class="flex py-auto px-4 items-center bg-white h-16 justify-between">
        <div class="">
          <nuxt-link to="/members" class="">
            <div class="">
              <!-- <h1 class="text-3xl font-bold text-gray-600">LinkUp</h1> -->
              <img src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/logo-LU.png" class="w-32 h-22 lg:w-40 lg:pt-4 lg:h-22 object-fit my-auto">
            </div>
          </nuxt-link>
        </div>
        <div class="h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-600" fill="current" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g></svg>
        </div>
      </div>
      <createLink/>
    </div>
  </div>
</div>
</template>

<script>
import createLink from '~/components/Member/CreateLink.vue'
export default {
  components: { createLink },
}
</script>

<style>

</style>
