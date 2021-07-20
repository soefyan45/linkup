<template>
<div class="flex h-screen items-top justify-center bg-gray-100 items-center sm:pt-0 p">
  <button @click="getEvents()" class="py-4 px-4 bg-green-400 rounded mx-auto">Click</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      events: null,
    };
  },
  methods: {
    async getEvents() {
      // this.events = await this.$supabase.from("user").select("*");
      // console.log(this.events)
      console.log(this.$supabase.auth.user())
    },
  },

}
</script>

<style>

</style>
