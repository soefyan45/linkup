<template>
<div class="h-screen w-screen bg-gray-100 items-center">
  <div :class="{ 'fixed': !view.atTopOfPage }"  class="h-20 row w-screen items-center py-2">
    <div class="h-20 lg:h-20 w-11/12 lg:w-10/12 flex rounded-full shadow-xl bg-white mx-auto justify-between py-2 px-8 items-center">
      <div class="w-6/12 flex h-full justify-star items-center">
        <div class="w-3/12 h-full items-center flex">
          <h1 class="text-xl lg:text-2xl font-bold text-blue-600 my-auto mx-2">LinkUp</h1>
        </div>
        <div class="w-9/12 hidden lg:block h-full space-x-4 px-2 items-center">
          <div class="flex h-full items-center space-x-2 ml-4">
            <span class="text-xl text-gray-800">FAQ</span>
            <span class="text-xl text-gray-800">Help</span>
          </div>
        </div>
      </div>
      <div class="w-6/12 h-full hidden lg:block space-x-4 px-2">
        <div class="flex h-full items-center space-x-2 ml-4 justify-end">
          <span class="text-xl text-gray-800 my-auto ">Login</span>
          <span class="text-xl text-white  py-2 px-4 rounded-full text-center my-auto bg-black">Singup</span>
        </div>
      </div>
      <div class="w-8/12 h-full lg:hidden space-x-4 px-2">
        <div class="flex h-full items-center space-x-2 ml-4 justify-end">
          <span class="text-2xl text-gray-800 my-auto font-semibold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="#2E3A59"></path></svg>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="w-screen pt-20 lg:pt-24 flex items-center">
    <div class="row my-12 mx-auto items-center">
      <!-- <h1 class="text-black font-bold mx-auto text-center text-5xl lg:heading-font">Masih Proses Pembuatan Sabar Ya</h1> -->
      <h1 class="text-black font-bold mx-auto text-center text-6xl md:text-7xl lg:text-9xl">All In One Link</h1>
      <div class="text-xl font-semibold md:text-3xl lg:text-5xl text-center">
        We make sure your followes can quickly
      </div>
      <div class="text-xl font-semibold md:text-3xl lg:text-5xl text-center">
         find what they're looking for
      </div>
    </div>
  </div>
  <div class="px-4 md:w-7/12 lg:w-4/12 mx-auto items-center pt-8">
    <div class="h-14 w-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-lg mx-auto px-1 flex">
      <div class="w-full h-12 my-auto flex bg-white rounded-l">
        <div class="h-full rounded-l hidden md:block row items-center py-3">
          <span class="h-full font-bold bg-white text-black py-auto my-auto text-center pl-3 lg:pl-1">linkup.my.id/</span>
        </div>
        <div class="h-full w-full rounded-r text-center items-center">
          <input type="text" class="w-full h-full pl-1 lg:pl-0 pr-1 my-auto items-center text-black font-medium rounded outline-none focus:outline-none">
        </div>
      </div>
      <div class="w-4/12 flex h-full items-center">
        <button class="hidden lg:block h-12 rounded-r mx-auto my-auto text-white font-semibold">claim my link</button>
        <button class="lg:hidden h-12 rounded-r mx-auto my-auto text-white font-semibold">claim link</button>
      </div>
    </div>
  </div>
  <div class="flex py-4 items-center">
    <h2 class="mx-auto text-lg">It’s free, and takes less than a minute</h2>
  </div>
  <div class="hidden lg:block lg:flex h-20 w-10/12 mx-auto mt-28 items-center">
    <div class="flex w-3/12 h-full items-center">
      <div class="justify-center flex items-center mx-auto space-x-2">
        <svg class="h-5 w-5 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/></svg>
        <span class="mx-auto text-xl">Free Forever</span>
      </div>
    </div>
    <div class="flex w-3/12 h-full items-center">
      <div class="justify-center flex items-center mx-auto space-x-2">
        <svg class="h-5 w-5 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z"/></svg>
        <span class="mx-auto text-xl">Analytics</span>
      </div>
    </div>
    <div class="flex w-3/12 h-full items-center">
      <div class="justify-center flex items-center mx-auto space-x-2">
        <svg class="h-5 w-5 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
        <span class="mx-auto text-xl">iOS & Android</span>
      </div>
    </div>
    <div class="flex w-3/12 h-full items-center">
      <div class="justify-center flex items-center mx-auto space-x-2">
        <svg class="h-5 w-5 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM13 12V7.495L8 14h3v4.5l5-6.5h-3zM8 1h8v2H8V1z"/></svg>
        <span class="mx-auto text-xl">Lightning fast (200ms)</span>
      </div>
    </div>
  </div>
  <div class="block lg:hidden flex h-20 w-11/12 mx-auto mt-8 items-center">
    <div class="row w-6/12 items-center justify-end">
      <div class="flex w-full h-full items-center justify-end">
        <div class="justify-end flex items-center space-x-2">
          <span class="mx-auto">Free Forever</span>
          <svg class="h-5 w-5 text-red-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M20.243 4.757c2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236C5.515 3 8.093 2.56 10.261 3.44L6.343 7.358l1.414 1.415L12 4.53l-.013-.014.014.013c2.349-2.109 5.979-2.039 8.242.228z"/></svg>

        </div>
      </div>
      <div class="flex w-full h-full items-center justify-end">
        <div class="justify-end flex items-center space-x-2">
          <span class="mx-auto">Analytics</span>
          <svg class="h-5 w-5 text-green-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M5 3v16h16v2H3V3h2zm14.94 2.94l2.12 2.12L16 14.122l-3-3-3.94 3.94-2.12-2.122L13 6.88l3 3 3.94-3.94z"/></svg>

        </div>
      </div>
    </div>
    <div class="row w-6/12 justify-end">
      <div class="flex w-full h-full items-center">
        <div class="justify-end flex items-center space-x-2">
          <svg class="h-5 w-5 text-blue-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M7 4v16h10V4H7zM6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm6 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
          <span class="mx-auto">iOS & Android</span>
        </div>
      </div>
      <div class="flex w-full h-full items-center">
        <div class="justify-end flex items-center space-x-2">
          <svg class="h-5 w-5 text-yellow-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453a9 9 0 1 1-14.064 0L3.515 5.93l1.414-1.414 1.453 1.453zM13 12V7.495L8 14h3v4.5l5-6.5h-3zM8 1h8v2H8V1z"/></svg>
          <span class="mx-auto">Lightning fast</span>
        </div>
      </div>
    </div>
  </div>
  <div :class="{'w-screen animate-fadeIn': !view.atTopOfPage }" class="w-10/12 mx-auto h-screen rounded mt-8 bg-gradient-to-t from-blue-400 via-blue-500 to-indigo-500">
    <div class="mx-auto items-center pt-14">
      <h1 class="mx-auto text-center text-2xl lg:text-5xl font-semibold text-gray-200">HOW IT WORKS</h1>
    </div>
    <div class="mx-auto pt-8">
      <div class="mx-4 flex space-x-2">
        <div class="w-4/12 h-20 bg-yellow-200"></div>
        <div class="w-4/12 h-20 bg-blue-200"></div>
        <div class="w-4/12 h-20 bg-red-200"></div>
      </div>
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
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(){
      // console.log('run')
      // when the user scrolls, check the pageYOffset
      if(window.pageYOffset>50){
        // user is scrolled
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
      }else{
        // user is at top of page
        if(!this.view.atTopOfPage) this.view.atTopOfPage = true
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
</style>
