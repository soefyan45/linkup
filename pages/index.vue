<template>
<div class="min-h-screen flex flex-col w-full bg-gray-100 items-center font-poppins">
  <div :class="{ 'fixed': !view.atTopOfPage, 'py-2':!view.navWfull}"  class="h-20 row w-full items-center">
    <div :class="{ 'w-full lg:w-full': view.navWfull,'rounded-full lg:w-10/12':!view.navWfull }" class="h-20 lg:h-18 w-11/12  flex  shadow-xl bg-white mx-auto justify-between py-2 px-8 items-center">
      <div class="w-6/12 flex h-full justify-star items-center">
        <div class="w-full lg:w-3/12 h-full items-center flex">
          <!-- <h1 class="text-xl lg:text-2xl font-bold text-blue-600 my-auto mx-2">LinkUp</h1> -->
          <img src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/logo-LU.png" class="w-20 h-18 lg:w-28 lg:h-18 object-fit my-auto">
        </div>
        <div class="lg:w-9/12 hidden lg:block h-full space-x-4 px-2 items-center">
          <div class="flex h-full items-center space-x-2 ml-4">
            <span class="text-xl text-gray-800">FAQ</span>
            <span class="text-xl text-gray-800">Help</span>
          </div>
        </div>
      </div>
      <div class="w-6/12 h-full hidden lg:block space-x-4 px-2">
        <div class="flex h-full items-center space-x-2 ml-4 justify-end">
          <nuxt-link to="/auth/login" class="text-xl text-gray-800 my-auto ">Login</nuxt-link>
          <nuxt-link to="/auth/singup" class="text-xl text-white  py-2 px-4 rounded-full text-center my-auto bg-merah">Signup</nuxt-link>
        </div>
      </div>
      <div class="w-8/12 h-full lg:hidden space-x-4 px-2">
        <div class="flex h-full items-center space-x-2 ml-4 justify-end">
          <!-- <span class="text-2xl text-gray-800 my-auto font-semibold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 18H3V16H21V18ZM21 13H3V11H21V13ZM21 8H3V6H21V8Z" fill="#2E3A59"></path></svg>
          </span> -->
          <!-- <span class="text-lg text-gray-800">FAQ</span>
          <span class="text-lg text-gray-800">Help</span> -->
          <nuxt-link to="/auth/login" class="text-xl text-white  py-2 px-4 rounded-full text-center my-auto bg-black">Login</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full pt-20 lg:pt-24 flex items-center">
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
    <div class="h-14 w-full bg-biru rounded-lg mx-auto px-1 flex">
      <div class="w-full h-12 my-auto flex bg-white rounded-l">
        <div class="h-full rounded-l hidden md:block row items-center py-3">
          <span class="h-full font-bold bg-white text-black py-auto my-auto text-center pl-3 lg:pl-1">linkup.my.id/</span>
        </div>
        <div class="h-full w-full rounded-r text-center items-center">
          <input type="text" class="w-full h-full pl-1 lg:pl-0 pr-1 my-auto items-center text-black font-medium rounded outline-none focus:outline-none">
        </div>
      </div>
      <div class="w-4/12 flex h-full items-center">
        <nuxt-link to="/auth" class="hidden lg:block h-12 rounded-r mx-auto my-auto text-white font-semibold mt-4">claim my link</nuxt-link>
        <nuxt-link to="/auth" class="lg:hidden h-12 rounded-r mx-2 my-auto text-white font-semibold">claim link</nuxt-link>
      </div>
    </div>
  </div>
  <div class="flex py-4 items-center">
    <h2 class="mx-auto text-lg">It’s free, and takes less than a minute</h2>
  </div>
  <div class="hidden lg:block lg:flex h-20 w-7/12 mx-auto mt-28 items-center">
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
      <div class="flex w-full h-max items-center">
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
  <div :class="{'min-h-screen flex flex-col w-full  animate-fadeIn': !view.fillFull }" class="h-full w-10/12 mx-auto c-border mt-8 bg-biru">
    <div class="mx-auto items-center pt-14">
      <h1 class="mx-auto text-center text-2xl lg:text-5xl font-semibold text-white">HOW IT WORKS</h1>
    </div>
    <div class="mx-auto pt-8 pb-20 h-full">
      <div class="mx-4 row items-center lg:flex lg:space-x-2">
        <div class="mx-auto pt-4 w-10/12 lg:w-4/12 items-center">
          <div class="row w-full">
            <img class="mx-auto object-cover" src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/guide1.png">
            <div class="mx-auto text-center pt-4 font-bold text-2xl">Claim Your Link</div>
            <!-- <div class="mx-auto text-center pt-4 font-bold text-md flex justify-between">Choose your Link, design your own, and add as many links and socials as you like.</div> -->
          </div>
        </div>
        <div class="mx-auto pt-4 w-10/12 lg:w-4/12  items-center">
          <div class="row w-full">
            <img class="mx-auto object-cover" src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/guide3.png">
            <div class="mx-auto text-center pt-4 font-bold text-2xl">Manage Your Page</div>
            <!-- <div class="mx-auto text-center pt-4 font-bold text-md flex justify-between">Use your bio link on your Twitter bio, Instagram, emails, and wherever your audience is. They’ll love it.</div> -->
          </div>
        </div>
        <div class="mx-auto pt-4 w-10/12 lg:w-4/12  items-center">
          <div class="row w-full">
            <img class="mx-auto object-fit" src="https://gbckelxngttdredvrsfh.supabase.in/storage/v1/object/public/assets/design/guide2.png">
            <div class="mx-auto text-center pt-4 font-bold text-2xl">Use In Your Social Media</div>
            <!-- <div class="mx-auto text-center pt-4 font-bold text-md flex justify-between">We believe everyone should have an email list. Accept 1-click follow and send them emails anytime you like.</div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="flex h-20 w-screen bg-yellow-300"></div> -->
  </div>
  <div class="h-full w-10/12 mx-auto rounded-lg mt-8 bg-gray-100">
    <div class="mx-auto items-center pt-14">
      <h1 class="mx-auto text-center text-2xl lg:text-5xl font-semibold ">Frequently Asked Questions</h1>
    </div>
    <div class="flex mx-auto pt-8 pb-20 h-full">
      <div class="w-4/12 hidden lg:block h-20 bg-gradient-to-t from-blue-400 via-blue-500 to-indigo-500 rounded flex flex-col">
        <h2 class="text-4xl text-center pt-4 font-semibold">Have more questions?</h2>
        <div class="w-20 h-full">
          <button class="mx-4 py-2 px-4 text-xl text-white font-semibold bg-green-500 rounded">WhatsApp</button>
        </div>
      </div>
      <div class="w-full lg:w-8/12">
        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-blue-500 space-y-4">
			    <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">Why do I need a link up?</summary>
				    <div class="px-4 pb-4">
					    <p>Platforms like Instagram, Twitter, and TikTok only allow for one link in the bio. Using a bio link lets you link to all your pages — websites, shop, blog, social posts, videos, anything — making it easier for your audience to discover all your content.Bio Link is also incredibly fast, stunningly elegant, and optimized for clicks.</p>
				    </div>
			    </details>
          <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">Is it really 100% free?</summary>
				    <div class="px-4 pb-4">
					    <p>
                It is. All the features you enjoy — analytics, themes, embeds — will be free for you, forever.
                <br>You only pay if you want, you can donate.
              </p>
				    </div>
			    </details>
          <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">Why choose LinkUp over the alternatives?</summary>
				    <div class="px-4 pb-4">
					    <p>
                Link Up is designed for creators, not businesses. We obsessed over design, speed, and above all, giving complete control over your audience.<br>
                We also make it easy for you to build your email list. We believe everyone should have a direct relationship with their audience.
              </p>
				    </div>
			    </details>
          <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">Is my data safe?</summary>
				    <div class="px-4 pb-4">
					    <p>
                Link Up does not track any personal data of your visitors. We take privacy and security seriously. We run on the supabase.io infrastructure. We also force SSL encryption across the platform.
              </p>
				    </div>
			    </details>
          <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">I Love the product. How can I show my apprecation?</summary>
				    <div class="px-4 pb-4">
					    <p>
                # Tell your friends how much you love your bio link!<br>
                # Buy us a coffee. 100% of the proceeds will go towards caffeinating the team.
              </p>
				    </div>
			    </details>
          <details>
				    <summary class="py-2 outline-none cursor-pointer text-xl font-semibold focus:underline">I have a question. How do I contact you?</summary>
				    <div class="px-4 pb-4">
					    <p>
                Just click this button!<br>
              </p>
              <button class="mx-4 py-2 px-4 text-xl text-white font-semibold bg-green-500 rounded">WhatsApp</button>
				    </div>
			    </details>
		    </div>
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
        fillFull: true,
        atTopOfPage: true,
        navWfull : false,
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(){
      // console.log(window.pageYOffset)
      if(window.pageYOffset>50 ){
        if(this.view.atTopOfPage) this.view.atTopOfPage = false
        this.view.fillFull = false
        // this.view.navWfull = true
      }else{
        this.view.fillFull = true
        // this.view.navWfull = false
      }
      if(window.pageYOffset>50){
        this.view.navWfull = true
      }else{
        this.view.navWfull = false
      }
      // if(window.pageYOffset>50){
      //   if(this.view.atTopOfPage) this.view.atTopOfPage = false
      //   this.view.fillFull = false
      // }
      // if(window.pageYOffset<1300){
      //   if(this.view.atTopOfPage) this.view.atTopOfPage = false
      //   this.view.fillFull = false
      // }
      // if(window.pageYOffset<50 && window.pageYOffset>1300){
      //   this.view.fillFull = true
      // }
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
  border-radius: 25px;
}
.tab {
            overflow: hidden;
            }
            .tab-content {
            max-height: 0;
            transition: all 0.5s;
            }
            input:checked + .tab-label .test {
                background-color: #000;
            }
            input:checked + .tab-label .test svg {
                transform: rotate(180deg);
                stroke: #fff;
            }
            input:checked + .tab-label::after {
            transform: rotate(90deg);
            }
            input:checked ~ .tab-content {
            max-height: 100vh;
            }
</style>
