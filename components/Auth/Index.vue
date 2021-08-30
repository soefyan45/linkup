<template>
<div class="row items-center h-screen bg-white">
  <div class="h-full bg-cover" style="background-image: url('https://gbckelxngttdredvrsfh.supabase.co/storage/v1/object/public/assets/design/5580884.jpg');">
    <div class="h-full relative">
      <div class="px-4 py-4">
        <h1 class="py-auto mx-4 text-3xl font-bold text-white dark:text-gray-200">LinkUp</h1>
      </div>
      <div class="absolute bottom-0 items-center mx-4">
        <div class="mx-auto w-full">
          <div class="my-10 text-left">
            <h1 class="py-auto text-3xl font-bold text-white">All in One Link</h1>
            <span class="font-bold text-lg text-white">We make sure your followes can quickly find what they're looking for</span>
          </div>
          <div class="mb-4 row space-y-2 mx-auto items-center">
            <nuxt-link to="/auth/login" type="button" class="mx-auto w-full px-3 py-2 text-white bg-blue-800 rounded-md focus:bg-blue-500 focus:outline-none text-center">Login</nuxt-link>
            <nuxt-link to="/auth/singup" type="button" class="mx-auto w-full px-3 py-2 text-black bg-white rounded-md border-2 border-gray-600 focus:bg-gray-400 focus:outline-none text-center">Sign up</nuxt-link>
          </div>
        </div>
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
  }

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
