<template>
<div class="">
  <div v-if="!noData" class="row items-center min-h-screen bg-no-repeat bg-cover bg-center" v-bind:style="{ backgroundImage: 'url(' + dataLink.background_img + ')' }">
    <!-- {{ dataLink.background_img }} -->
    <div class="max-w-md mx-auto min-h-screen ">
      <linkView :dataLink="dataLink" :viewDataButton="viewDataButton"/>
    </div>
  </div>
  <!-- <div v-if="noData==false && loadingData==false" class="row items-center min-h-screen">
    <div class="max-w-md mx-auto min-h-screen">
      <div class="h-full">
        <h1 class="text-3xl mx-auto py-auto text-center">No Exist Data ; Claim This Link</h1>
      </div>
    </div>
  </div> -->
  <div v-if="noData" class="row items-center min-h-screen">
    <div v-if="loadingData==false" class="max-w-md mx-auto min-h-screen ">
      <div class="row w-full h-full items-center">
        <div class="flex justify-center mx-auto py-auto items-center pt-56">
          <div class="text-center mx-auto">
            <h1 class="text-3xl mx-auto py-auto text-center">No Exist Data ; Claim This Link</h1>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loadingData==true" class="max-w-md mx-auto min-h-screen ">
      <div class="row w-full h-full items-center">
        <div class="flex justify-center mx-auto py-auto items-center pt-56">
          <div class="text-center mx-auto">
            <svg width="24" height="24" class="h-56 w-56 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20V13H11L7.783 16.22C8.89296 17.355 10.4125 17.9964 12 18C14.5394 17.9962 16.8015 16.3942 17.648 14H17.666C17.7805 13.6746 17.8672 13.3401 17.925 13H19.937C19.4331 16.9999 16.0315 19.9999 12 20H11.99C9.86876 20.0063 7.83316 19.1637 6.337 17.66L4 20ZM6.074 11H4.062C4.56575 7.0016 7.965 4.00213 11.995 3.99995H12C14.1216 3.99316 16.1577 4.83583 17.654 6.33999L20 3.99995V11H13L16.222 7.77999C15.1109 6.64364 13.5893 6.00213 12 5.99999C9.46055 6.00374 7.19848 7.60577 6.352 9.99999H6.334C6.21856 10.3251 6.13189 10.6597 6.075 11H6.074Z" fill="#2E3A59"></path>
            </svg>
            <h1 class="text-3xl mx-auto py-auto text-center">Loading Data</h1>
            <!-- <img class="h-auto rounded-full animate-ping w-full object-cover object-center mb-6" src="data:image/png;base64,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" alt="content"> -->
            <!-- <h2 class="text-lg text-gray-900 font-medium title-font mb-4 mt-24">Ping</h2> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import linkView from '~/components/Link/Index.vue'
export default {
  components: { linkView },
  data() {
    return {
      loadingData         : true,
      noData              : true,
      link                : `${this.$route.params.link}`,
      urlAsset            : process.env.URL_ASSETS,
      idLink              : '',
      dataLink        : {
        'title_link'      : '',
        'text_color'      : '',
        'heading_photo'   : '',
        'description'     : '',
        'background_type'  : '',
        'background_color' : '',
        'background_img'   : '',
        // viewDataButton : [],
      },
      viewDataButton : [],
    }
  },
  watch: {
    idLink: function(value){
      // console.log(value.length)
      if(value!=''){
        this.getListBTN()
      }
    }
  },
  mounted() {
    this.getDataLink()
  },
  methods: {
    async getDataLink(){
      console.log('run')
      await this.$supabase.from('link_up').select().eq('link', this.link).then((res)=>{
        if(res.error == null){

          // console.log(res.data[0].id)
          console.log(res.data)
          if(res.data.length==0){
            this.loadingData = false
            return this.noData = true
          }
          this.idLink = res.data[0].id
          this.dataLink = res.data[0]
          if(res.data[0].text_color != null && res.data[0].text_color != '' && res.data[0].text_color.length != 0){
            this.colorText = res.data[0].text_color
          }
          if(res.data[0].background_type == 'color'){
            if(res.data[0].background_color.length != 0 && res.data[0].background_color != '' && res.data[0].background_color != null){
              this.colorBg = res.data[0].background_color
            }
          }
          if(res.data[0].background_type == 'img'){
            if(res.data[0].background_img.length != 0 && res.data[0].background_img != '' && res.data[0].background_img != null){
              this.imgBg = this.urlAsset+'/'+res.data[0].background_img
              this.dataLink.background_img = this.urlAsset+'/'+res.data[0].background_img
            }
          }
          if(res.data[0].heading_photo != null && res.data[0].heading_photo != '' && res.data[0].heading_photo.length != 0){
            // console.log(res.data[0].heading_photo.length)
            this.dataLink.heading_photo = this.urlAsset+'/'+res.data[0].heading_photo
            // this.dataProfile.photo = res.data[0].heading_photo
          }
          // console.log(this.dataLink)
          this.loadingData = false
          return this.noData = false
        }
        this.loadingData = false
        return this.noData = true
      })
    },
    async getListBTN(){
      await this.$supabase.from('btn_link').select().eq('link_up_id',this.idLink).order('id', { ascending: true }).then((r)=>{
        if(r.error == null){
          console.log(r.data)
          this.viewDataButton = r.data
        }
      })
    },
  },
}
</script>

<style>

</style>
