<template>
<div class="row items-center h-screen bg-white">
      <div class="h-1/2 bg-cover" style="background-image: url('https://gbckelxngttdredvrsfh.supabase.co/storage/v1/object/public/assets/design/5580884.jpg');">
        <div class="h-full relative">
          <div class="px-4 py-4">
            <nuxt-link to="/auth" class="">
              <div class="h-8 w-8">
                <svg class="text-white" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="arrow-left"><rect width="24" height="24" opacity="0"/><path d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26 1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59 2.23 2.23 0 0 1-.91.2zm-4.86-6l4.82 4V8.09z"/></g></g></svg>
              </div>
            </nuxt-link>
          </div>
          <div class="my-28 text-left">
            <h1 class="py-auto mx-4 text-3xl font-bold text-white dark:text-gray-200">Create Account</h1>
          </div>
          <div class="absolute bottom-0 items-center">
            <div class="flex block md:hidden">
              <svg viewBox="0 0 1428 174" class="w-screen mx-auto text-center" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                  </g>
                  <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="flex hidden md:block" style="width:1000px">
              <svg viewBox="0 0 1428 174" class="w-full mx-auto text-center" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                    <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                    <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                  </g>
                  <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="h-1/2 mx-auto">
        <div class="max-w-md row mx-auto my-10">
          <div class="px-4 flex items-center">
            <span class="mx-auto font-medium text-sm text-red-400">{{errorMessage}}</span>
          </div>
          <div v-if="prosesSingUp" class="mx-4 flex items-center h-56">
            <div class="flex items-center justify-center w-full h-full">
	            <div class="row justify-center items-center space-x-1 text-sm text-gray-700">
				        <svg fill='none' class="w-8 h-8 mx-auto animate-spin" viewBox="0 0 32 32" xmlns='http://www.w3.org/2000/svg'>
                  <path clip-rule='evenodd' d='M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z'	fill='currentColor' fill-rule='evenodd' />
                </svg>
                <div class="text-gray-600 font-medium text-lg">Singup ...</div>
              </div>
            </div>
          </div>
          <div v-if="!prosesSingUp" class="mx-4">
            <form action="">
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm text-gray-600 font-bold">Email Address</label>
                <input type="email" v-model="email" name="email" id="email" placeholder="you@company.com" class="w-full px-3 py-2 placeholder-gray-300 border-t-0 border-l-0 border-r-0 border-b-2 outline-none focus:border-green-400" v-bind:class="{ 'border-red-300': errorEmail!=null, 'border-green-300': errorEmail==null}"/>
                <span class="text-xs text-red-500">{{errorEmail}}</span>
              </div>
              <div class="mb-2">
                <div class="flex mb-2">
                  <label for="password" class="text-sm text-gray-600 font-bold">Password</label>
                </div>
                <input type="password" v-model="password" name="thispassword" id="thispassword" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-t-0 border-l-0 border-r-0 border-b-2 border-blue-300 outline-none focus:border-green-400" v-bind:class="{ 'border-red-300': errorPassword!=null, 'border-green-300': errorPassword==null}"/>
                <span class="text-xs text-red-500">{{errorPassword}}</span>
              </div>
              <div class="mb-4">
                <div class="flex mb-2">
                  <label for="password" class="text-sm text-gray-600 font-bold">Re Password</label>
                </div>
                <input type="password" v-model="rePassword" name="repassword" id="repassword" placeholder="Your Password" class="w-full px-3 py-2 placeholder-gray-300 border border-t-0 border-l-0 border-r-0 border-b-2 border-blue-300 outline-none focus:border-green-400" v-bind:class="{ 'border-red-300': errorRePassword!=null, 'border-green-300': errorRePassword==null}"/>
                <span class="text-xs text-red-500">{{errorRePassword}}</span>
              </div>
              <div class="mb-4 pb-4 row space-y-2">
                <button @click="singup()" type="button" class="w-full px-3 py-2 text-white bg-blue-800 rounded-md focus:bg-blue-500 focus:outline-none">Sign up</button>
                <div class="flex justify-between">
                  <garis><span>or</span></garis>
                </div>
                <nuxt-link to="/auth/login" type="button" class="w-full px-3 py-2 text-black bg-white rounded-md border-2 border-gray-600 focus:bg-gray-400 focus:outline-none text-center">Login</nuxt-link>
              </div>
            </form>
          </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  // layout: 'Auth',
  layout(context) {
    return 'Auth'
  },
  data() {
    return {
      prosesSingUp      : false,
      email             : null,
      password          : null,
      rePassword        : null,
      errorMessage      : null,
      errorEmail        : null,
      errorPassword     : null,
      errorRePassword   : null,
    }
  },
  methods: {
    async singup(){
      // if(this.uname == null){
      //   return this.errorUname = "Name should be input"
      // }
      this.errorEmail       = null
      this.errorPassword    = null
      this.errorRePassword  = null
      this.errorMessage  = null
      if(this.email == null){
        return this.errorEmail = "email can't null"
      }
      if(!this.validEmail(this.email)){
          return this.errorEmail = "input valid email"
      }
      if(this.password == null){
        return this.errorPassword = "password can't null"
      }
      if(this.password.length < 6){
        return this.errorPassword = "Password should be at least 6 characters"
      }
      if(this.rePassword == null){
        return this.errorRePassword = "re-password can't null"
      }
      if(this.password != null && this.password != this.rePassword){
        return this.errorRePassword = "check your re-password must same as password"
      }
      // return console.log('benar');

      const email     = this.email
      const password  = this.password
      this.prosesSingUp = true
      this.$supabase.auth
        .signUp({ email, password })
        .then((response) => {
          this.prosesSingUp = false
          console.log(response);
          if(response.error!= null){
            console.log('Ada Error')
            return this.errorMessage = response.error.message
          }
          // return console.log('Di Sini');
          this.$router.push('/auth/confirm-email');
        })
        .catch((err) => {
          alert(err)
      })
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },

}
</script>

<style>
garis {
   width: 100%;
   text-align: center;
   border-bottom: 1px solid #000;
   line-height: 0.1em;
   margin: 10px 0 20px;
}
garis span {
    background:#fff;
    padding:0 10px;
}
.wave-bawah{
  width:1000px;
}
.gradient {
  background: #a8c0ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #a8c0ff, #3f2b96); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
</style>
