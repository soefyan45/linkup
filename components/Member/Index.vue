<template>
<div>
  <div class="flex items-center justify-end" v-if="toggleTopMenu">
    <div class="absolute w-48 bg-gray-300 rounded-md overflow-hidden shadow-xl top-20 right-6 z-20 items-center mx-auto">
      <button @click="logOut()" class="w-48 text-center px-4 py-2 font-bold bg-white border-2 border-red-600 text-red-600 hover:bg-red-400 hover:text-white">LogOut</button>
    </div>
  </div>
  <div class="row h-60 w-full px-4 py-2">
    <input ref="imageProfile" type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/gif, image/jpeg" id="imgSource" @change.prevent="ImageProfile($event.target.files)">
    <div class="flex items-center justify-between">
      <!-- <div class="w-3/5 items-center">
        <div class="rounded-full mx-auto my-4 h-36 w-36 bg-green-300 flex items-center justify-center font-bold border-4 border-green-600 bg-center bg-cover" style="background-image: url('https://img.freepik.com/free-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?size=626&ext=jpg');"></div>
      </div> -->
      <!-- <img id="profilePhoto" class="h-full w-full object-cover object-top hidden" alt="image preview"/> -->
      <div class="flex w-3/5 items-center justify-center pt-6 mb-2">
        <div class="flex relative h-40 w-40 rounded-full bg-white items-center my-auto border-dashed border-4 border-green-400">
          <div v-if="uploadPhoto==false && dataProfile.photo==''" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <span class="flex mx-auto py-auto text-center text-white icon-name pb-4">
              LU
            </span>
          </div>
          <div v-if="uploadPhoto==true" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <img id="profilePhoto" class="h-full w-full object-cover object-top rounded-full" alt="image preview"/>
          </div>
          <div v-if="dataProfile['photo']!='' && uploadPhoto==false" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <img :src="dataProfile['photo']" class="h-full w-full object-cover object-top rounded-full" alt="image preview"/>
          </div>
          <div @click="photoProfile()" class="h-8 w-8 flex items-center bg-indigo-500 rounded-full absolute top-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/><path d="M12 10.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>
          </div>
        </div>
      </div>
      <div class="w-1 h-28 border-l-2 border-green-600 justify-center text-center ">
      </div>
      <div class="w-2/5 row justify-center">
        <div class="w-full  my-20 text-center">
          <div class="font-bold text-3xl">{{countLink}}</div>
          <div class="font-bold text-xl">Link Created</div>
        </div>
      </div>
    </div>
    <div v-if="dataProfile['name']!='' || dataProfile['handphone']!=''" class="row h-10 w-full">
      <h2 class="font-bold text-gray-800 text-lg">Hy</h2>
      <div class="flex">
        <h2 class="font-bold text-gray-800 text-2xl -mt-2">{{dataProfile['name']}}</h2><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="award"><rect width="24" height="24" opacity="0"/><path d="M19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8 6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13 5.68 3.14A.91.91 0 0 0 18 22a1 1 0 0 0 1-1.25zM12 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19z"/></g></g></svg>
      </div>
      <!-- <button onclick="openModal()" class='bg-blue-500 text-white p-2 rounded text-2xl font-bold'>Open Modal</button> -->
    </div>
    <div v-if="dataProfile['name']=='' || dataProfile['handphone']==''" class="row h-24 w-full space-y-2 mb-4">
      <div class="w-full h-10 items-center">
        <input type="text" v-model="nameProfile" class="h-full w-full border-2 rounded-lg px-2" placeholder="Type your name">
      </div>
      <div class="w-full h-10 items-center">
        <input v-model="phoneNumberProfile" class="h-full w-full border-2 rounded-lg px-2" placeholder="Type your phone number">
      </div>
      <div class="w-full flex h-10 justify-end">
        <button @click="updateProfile()" class="my-2 px-4 bg-green-400 rounded text-white font-bold">Submit</button>
      </div>
      <!-- <div class="w-9/12 h-full items-center">
        <input class="h-full w-full border-2 rounded-l-lg px-2" placeholder="Type your name">
      </div>
      <div class="w-3/12 h-full">

      </div> -->
    </div>
    <div class="row w-ful">
      <div class="mx-auto py-10 flex justify-center h-full">
        <div class="w-full">
          <div class="flex py-2 justify-between">
            <div class="text-sm text-gray-600 outline-none font-bold ">
              Your Link's
            </div>
            <div class="text-sm font-bold ">
              <button @click="createLink()" class="flex space-x-2 bg-blue-600 text-center font-medium text-white py-1 px-4 rounded-lg">Create Link	&nbsp;<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-center text-white font-bold" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g></svg></button>
            </div>
          </div>
          <div class="w-full h-full overflow-auto bg-white" id="journal-scroll">
            <div v-for="listLink of dataLink" :key="listLink.id" class="flex px-2 justify-between relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default bg-green-500 rounded-md">
              <div class="flex justify-between space-x-2">
                <div class="whitespace-no-wrap items-center my-auto">
                  <div class="h-8 w-8 text-center my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-green-100 font-bold" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g></svg>
                  </div>
                </div>
                <div class="px-2 py-2 whitespace-no-wrap">
                  <div class="leading-5 text-white font-semibold">{{listLink.link}}</div>
                    <div class="leading-5 font-bold text-gray-900">
                      https://linkup.sn/{{listLink.link}}
                    </div>
                  <div class="leading-5 flex font-medium"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white font-medium" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="trending-up"><rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"/><path d="M21 7a.78.78 0 0 0 0-.21.64.64 0 0 0-.05-.17 1.1 1.1 0 0 0-.09-.14.75.75 0 0 0-.14-.17l-.12-.07a.69.69 0 0 0-.19-.1h-.2A.7.7 0 0 0 20 6h-5a1 1 0 0 0 0 2h2.83l-4 4.71-4.32-2.57a1 1 0 0 0-1.28.22l-5 6a1 1 0 0 0 .13 1.41A1 1 0 0 0 4 18a1 1 0 0 0 .77-.36l4.45-5.34 4.27 2.56a1 1 0 0 0 1.27-.21L19 9.7V12a1 1 0 0 0 2 0V7z"/></g></g></svg> {{listLink.hit}}</div>
                </div>
              </div>
              <div class="flex h-10 space-x-1 justify-center pl-5 my-auto">
                <div @click="openLink(listLink.link)" target="_blank" class="py-2 px-2 w-8 text-center my-auto text-white bg-blue-600 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="eye"><rect width="24" height="24" opacity="0"/><path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z"/><path d="M12 8.5a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 8.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>
                </div>
                <nuxt-link :to="`${'members/create/'+listLink.link}`" class="py-2 px-2 w-8 text-center my-auto text-white bg-yellow-600 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g></svg>
                </nuxt-link>
                <div class="py-2 px-2 w-8 text-center my-auto text-white bg-red-600 rounded">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- {{ dataLink }} -->
  </div>
  <div v-if="modalCreateLink" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
		style="background: rgba(0,0,0,.7);">
    <div class="row w-full">
      <div class="mx-8 flex items-center">
        <span class="mx-auto font-bold text-red-500">{{alertLinkCreate}}</span>
      </div>
      <div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto  bg-blue-500 rounded-full shadow-lg z-50 overflow-y-auto">
			<div class="flex h-12 w-full bg-blue-500 rounded-full items-center justify-between">
        <div class="relative pl-2 w-8/12 items-center">
          <div class="absolute text-gray-800 mr-1">link.ns/</div>
          <input type="text" v-model="valueLinkCreate" class="w-full bg-blue-500 font-medium pl-16 -ml-2 focus:outline-none" placeholder="link">
        </div>
        <div class="flex items-center justify-end w-4/12">
          <button @click="storeLink()" class="px-2 py-1 px-auto mx-2 my-auto items-center bg-white font-medium text-blue-500 shadow-lg rounded-full">Claim &#8594;</button>
        </div>
      </div>
		</div>
    <div class="flex modal-container bg-white w-11/12 md:max-w-md mx-auto justify-end" style="background: rgba(0,0,0,.0);">
      <div class="h-6 w-6 bg-red-400 rounded-full text-center items-center" @click="unCreateLink()">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-white font-bold" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="close-circle"><rect width="24" height="24" opacity="0"/><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M14.71 9.29a1 1 0 0 0-1.42 0L12 10.59l-1.29-1.3a1 1 0 0 0-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l1.29-1.3 1.29 1.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L13.41 12l1.3-1.29a1 1 0 0 0 0-1.42z"/></g></g></svg>
      </div>
    </div>
    </div>
	</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      urlAsset            : process.env.URL_ASSETS,
      urlLink             : '',
      user                : this.$supabase.auth.user(),
      countLink           : 0,
      modalCreateLink     : false,
      valueLinkCreate     : '',
      alertLinkCreate     : '',
      uploadPhoto         : false,
      previewPhoto        : '',
      nameProfile         : '',
      phoneNumberProfile  : '',
      filePhotoProfile    : '',
      urlPhotoProfile     : '',
      // dataLink            : {
      //   'nameLink'  : '',
      //   'id'        : '',
      //   'link'      : '',
      //   'hit'       : '',
      // },
      dataLink            : [],
      dataProfile         : {
        'name'        : '',
        'handphone'   : '',
        'photo'       : '',
      },
    }
  },
  props: {
    toggleTopMenu: Boolean,
  },
  watch: {
    valueLinkCreate: function () {
      this.alertLinkCreate = ''
    }
  },
  mounted() {
    console.log(process.env.URL_LINK)
    this.urlLink = process.env.URL_LINK
    this.getProfile()
    this.getLink()
  },
  methods: {
    photoProfile () {
      this.$refs.imageProfile.click(".photo")
    },
    createLink(){
      this.modalCreateLink = true;
    },
    unCreateLink(){
      this.modalCreateLink = false;
    },
    logOut(){
      // this.modalCreateLink = true;
      this.$supabase.auth.signOut()
      this.$router.push('/auth');
    },
    openLink(param){
      window.location.replace(this.urlLink+param);
    },
    async getProfile(){
      await this.$supabase.from('profile_user').select('*', { count: 'exact' }).eq('user_id', this.user.id).then((res)=>{
        console.log(res);
        if(res.count==0){
          this.$supabase
          .from('profile_user')
          .insert([
          {
            user_id: this.$supabase.auth.user().id,
            name: this.nameProfile,
            handphone: this.phoneNumberProfile,
            photo: this.urlPhotoProfile,
          }
          ]).then((r)=>{
            console.log(r)
          })
        }else{
          this.dataProfile = res.data[0]
          if(res.data[0].photo!=''){
            this.dataProfile.photo = this.urlAsset+'/'+res.data[0].photo
            console.log(this.dataProfile.photo)
          }
        }
      })
    },
    async getLink(){
      // link_up
      await this.$supabase.from('link_up').select('*', { count: 'exact' }).eq('user_id', this.user.id).then((res)=>{
        // console.log(res)
        this.countLink = res.count
        if(res.count>0){
          // const {}
          this.dataLink = res.data
        }
        // console.log(this.dataLink)

      })
    },
    // async cekLink()
    async storeLink(){
      // createLink
      // valueLinkCreate
      if(this.valueLinkCreate=='' || this.valueLinkCreate==null){
        return this.alertLinkCreate = 'please type something !!!';
      }
      this.$supabase.from('link_up').select('*', { count: 'exact' }).eq('link', this.valueLinkCreate).then((res)=>{
        // console.log(res)
        if(res.count==0){
          return this.$supabase.from('link_up').insert([{
            user_id: this.$supabase.auth.user().id,
            link : this.valueLinkCreate,
          }]).then((r)=>{
            console.log(r)
            if(r.error==null){
              this.$router.push('/members/create/'+this.valueLinkCreate);
            }
          })
        }
        // return console.log('link alredy exist')
        return this.alertLinkCreate = 'link alredy exist';
      })

    },
    ImageProfile(files){
      if(files[0]){
        this.filePhotoProfile = files[0]
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("imgSource").files[0]);
        console.log(files[0])
        oFReader.onload = function(oFREvent) {
          document.getElementById("profilePhoto").src = oFREvent.target.result;
          this.previewPhoto = oFREvent.target.result;
        };
        this.doUploadPhoto()
        this.uploadPhoto = true
      }
    },
    async updateProfile(){
      this.$supabase
      .from('profile_user')
      .update([
        {
          user_id: this.user.id,
          name: this.nameProfile,
          handphone: this.phoneNumberProfile,
          // photo: this.urlPhotoProfile,
        }
      ]).match({ user_id: this.user.id}).then((res)=>{
        console.log(res)
        if(res.error==null){
          this.dataProfile = res.data[0]
          if(res.data[0].photo!=''){
            this.dataProfile.photo = this.urlAsset+'/'+res.data[0].photo
            console.log(this.dataProfile.photo)
          }
        }
      })
    },
    async doUploadPhoto(){
      let namePhoto = 'photoProfile/'+this.user.id+'_'+this.makeid(10)+'.JPG'
      this.$supabase.storage
      .from('assets')
      .upload(namePhoto, this.filePhotoProfile, {
        cacheControl: 3600,
        upsert: false
      }).then((res)=>{
        console.log(res.data)
        if(res.data.error == null){
          console.log(res.data['Key'])
          this.$supabase
          .from('profile_user')
          .update([
          {
            photo: res.data['Key'],
          }
          ]).match({ user_id: this.$supabase.auth.user().id}).then((res)=>{
            console.log(res)
          })
          return this.urlPhotoProfile = res.data['Key']
        }
        return this.urlPhotoProfile = '';
      })
    },
    makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
      }
      return result;
    }
  },
}
</script>

<style>
garis {
   width: 100%;
   text-align: center;
   border-bottom: 1px solid rgb(9, 108, 189);
   line-height: 0.1em;
   margin: 10px 0 20px;
}
garis span {
    background:#fff;
    padding:0 10px;
}
.icon-name {
  font-size: 256%;
}
.animated {
	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
}
.animated.faster {
	-webkit-animation-duration: 500ms;
	animation-duration: 500ms;
}
.fadeIn {
	-webkit-animation-name: fadeIn;
	animation-name: fadeIn;
}
.fadeOut {
	-webkit-animation-name: fadeOut;
	animation-name: fadeOut;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
  to {
		opacity: 1;
		}
	}
@keyframes fadeOut {
	from {
		opacity: 1;
	}
  to {
		opacity: 0;
	}
}
</style>
