<template>
  <div class="h-screen w-full bg-gray-100 font-poppins">
    <div class="pt-8 px-4 h-24 w-full">
      <div class="px-8 h-20 w-full flex">
        <div class="flex w-2/12 h-full items-center">
          <h1 class="my-auto pl-4 items-start text-center text-5xl font-bold text-blue-600">LinkUp</h1>
        </div>
        <div class="w-8/12 h-full flex justify-center">
          <div class="flex h-full mx-auto items-center space-x-8">
            <span class="text-xl text-gray-800 font-semibold">Home</span>
            <span class="text-xl text-gray-800 font-semibold">FAQ</span>
            <span class="text-xl text-gray-800 font-semibold">Help</span>
            <span class="text-xl text-gray-800 font-semibold">Vixer</span>
          </div>
        </div>
        <div class="flex w-2/12 pr-4 h-full items-center justify-end">
          <button class="my-auto px-4 py-2 items-end text-center text-2xl text-white bg-blue-600 rounded-full">SINGUP</button>
        </div>
      </div>
    </div>
    <div class="flex mx-auto w-11/12 shadow-2xl c-border bg-white mt-20">
      <div class="w-6/12 row mx-8 py-20">
        <h2 class="text-9xl font-bold">All In</h2>
        <h2 class="text-9xl font-bold">One Link</h2>
        <div class="text-4xl">We make sure your followes can quickly</div>
        <div class="text-4xl">find what they're looking for</div>
      </div>
      <div class="w-6/12 row mx-8 py-20">
        <img src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/jumbo tron.png">
      </div>
    </div>
  </div>
</template>

<script>
import index from '~/components/Index/Index.vue'
export default {
  components: { index },
  data() {
    return {
      view: {
        atTopOfPage: true
      }
    }
  },
}
</script>

<style>
.hiddenscroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hiddenscroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.c-border{
  border-radius: 75px;
}
</style>
