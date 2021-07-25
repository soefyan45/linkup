<template>
<div>
  <div class="pt-8 pb-2">
    <div class="h-48 w-48 mx-auto pt-4 bg-blue-400 rounded-full bg-center bg-cover border-8 border-white shadow-xl" v-bind:style="{ backgroundImage: 'url(' + dataLink.heading_photo + ')' }">
    </div>
    <div class="row w-full items-center py-4">
      <div class="mx-auto text-center text-2xl font-medium" v-bind:style="{ color: dataLink.text_color }">{{ dataLink.title_link }}</div>
      <h1 class="mx-auto text-center text-md text-gray-500 font-medium">{{dataLink.description}}</h1>
    </div>
    <div class="w-full px-8 flex justify-between space-x-2">
      <button v-for="databtn of viewDataButton" :key="databtn.id" v-if="databtn.side_left" @click="toLink(`${databtn.href}`)" class="w-full h-12 flex px-2 my-1 rounded-full justify-start items-center text-center text-lg font-medium" v-bind:class="databtn.btn_color">
        <div class="w-1/12 justify-start items-center mr-1">
          <div v-html="databtn.icon_btn"></div>
        </div>
        <div class="w-11/12 justify-start items-center">
          <span class="text-white mx-auto">{{databtn.text_btn}}</span>
        </div>
      </button>
      <button v-for="databtn of viewDataButton" :key="databtn.id" v-if="databtn.side_right" @click="toLink(`${databtn.href}`)" class="w-full h-12 flex px-2 my-1 rounded-full justify-start items-center text-center text-lg font-medium" v-bind:class="databtn.btn_color">
        <div class="w-1/12 justify-start items-center mr-1">
          <div v-html="databtn.icon_btn"></div>
        </div>
        <div class="w-11/12 justify-start items-center">
          <span class="text-white mx-auto">{{databtn.text_btn}}</span>
        </div>
      </button>
      <!-- <button class="h-12 flex border-2 border-blue-500 rounded-full justify-between items-center text-center px-4 text-md font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z"/></svg>
        <span class="text-black">Email</span>
      </button> -->
    </div>
    <!-- {{ dataLink }} -->
    <!-- {{ viewDataButton }} -->
    <div class="w-full pt-4 px-8 space-y-2">
      <button v-for="databtn of viewDataButton" :key="databtn.id" @click="toLink(`${databtn.href}`)" class="w-full h-12 flex px-2 my-1 rounded-full justify-start items-center text-center text-lg font-medium" v-bind:class="databtn.btn_color">
        <div class="w-1/12 justify-start items-center mr-1">
          <div v-html="databtn.icon_btn"></div>
        </div>
        <div class="w-11/12 justify-start items-center">
          <span class="text-white mx-auto">{{databtn.text_btn}}</span>
        </div>
      </button>
    </div>
    <div class="w-full pt-4">
        <div class="flex items-center mx-auto text-center px-2 my-2">
          <span class="flex bg-gray-900  rounded-lg text-white text-lg font-bold text px-2 my-2 mx-auto items-center">Support By &nbsp<b class="text-blue-600">Vixer</b>&LinkUp <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto text-center text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></svg>
          </span>
        </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    dataLink: Object,
    viewDataButton: Array,
  },
  methods: {
    toLink(link){
      console.log(link)
      // window.location.href(link);
      window.location = link;
    }
  },
}
</script>

<style>

</style>
