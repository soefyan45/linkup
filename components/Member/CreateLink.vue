<template>
  <div>
    <div class="mx-4 min-h-screen">
      <h1 class="font-bold text-gray-600 text-2xl pt-2">Short Url</h1>
      <div class="row">
        <div class="flex w-full h-10 border-2 border-blue-300 rounded-lg items-center">
          <div class="w-5/12 h-full bg-gray-200 rounded-l flex items-center justify-center">
            <span class="font-bold text-gray-400 items-center">https://linkup.sn</span>
          </div>
          <div class="w-7/12 bg-white rounded-r text-center items-center">
            <input type="text" v-model="link" readonly class="w-full px-2 my-auto items-center text-gray-800 font-medium rounded outline-none focus:outline-none">
          </div>
        </div>
        <!-- <span class="mx-2 text-gray-300 font-medium text-sm">Leave empty for a random generated one</span> -->
      </div>
      <input ref="imageHeader" type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/gif, image/jpeg" id="imgSource" @change.prevent="ImageHeader($event.target.files)">
      <div class="flex items-center justify-center pt-6 mb-2">
        <div class="flex relative h-40 w-40 rounded-full bg-white items-center my-auto border-dashed border-4 border-green-400">
          <div v-if="dataProfile['photo']==''" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <span class="flex mx-auto py-auto text-center text-white icon-name pb-4">
              H
            </span>
          </div>
          <div v-if="dataProfile['photo']!='' && uploadPhoto==false" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <img :src="dataProfile['photo']" class="h-full w-full object-cover object-top rounded-full" alt="image preview"/>
          </div>
          <div v-if="uploadPhoto==true" class="flex mx-auto h-32 w-32 rounded-full bg-blue-300 items-center my-auto">
            <img id="headerPhoto" class="h-full w-full object-cover object-top rounded-full" alt="image preview"/>
          </div>
          <div class="h-8 w-8 flex items-center bg-indigo-500 rounded-full absolute top-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" @click="photoHeader()" class="h-5 w-5 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="camera"><rect width="24" height="24" opacity="0"/><path d="M19 7h-3V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-9-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h-4zM20 18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z"/><path d="M12 10.5a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></g></g></svg>
          </div>
        </div>
      </div>
      <div class="row h-full space-y-4">
        <div class="space-y-2">
          <label class="space-x-4 flex font-bold text-gray-600"><svg id="Layer_1" class="h-5 w-5" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m451.41 12.691c-.067-.083-.136-.164-.205-.244-2.883-3.326-7.053-5.946-12.395-7.788-4.156-1.434-9.425-2.491-17.056-3.425-6.547-.819-14.878-1.234-24.761-1.234-10.122 0-18.696.413-25.482 1.228-6.658.798-12.157 1.889-16.812 3.334-.134.042-.267.086-.398.133-5.107 1.824-9.156 4.432-12.033 7.751-.068.08-.137.16-.203.242-3.063 3.769-4.683 8.306-4.683 13.12v169.294h-36.379c-5.522 0-10 4.477-10 10s4.478 10 10 10h46.379c5.522 0 10-4.477 10-10v-179.293c0-.141 0-.22.104-.374.329-.327 1.238-1.058 3.353-1.836 3.407-1.038 7.798-1.883 13.057-2.514 5.999-.72 13.771-1.085 23.099-1.085 9.057 0 16.552.363 22.306 1.083 6.124.75 10.252 1.539 12.992 2.484 2.438.84 3.423 1.621 3.707 1.886.093.143.093.221.093.356v460.382c0 .135 0 .213-.092.356-.279.259-1.231 1.015-3.566 1.836-2.345.716-6.494 1.721-13.16 2.537-5.728.716-13.223 1.08-22.279 1.08-9.328 0-17.1-.365-23.1-1.085-5.255-.63-9.646-1.476-13.056-2.513-2.114-.779-3.023-1.51-3.353-1.836-.104-.154-.104-.233-.104-.374v-197.032c0-5.523-4.478-10-10-10h-182.766c-5.523 0-10 4.477-10 10v197.031c0 .185-.021.394-.255.731-.214.171-1.047.768-3.016 1.461-2.345.716-6.495 1.721-13.161 2.537-5.728.716-13.354 1.08-22.665 1.08-9.072 0-16.714-.365-22.715-1.085-5.341-.641-9.914-1.515-13.24-2.531-2.333-.822-3.286-1.578-3.564-1.836-.092-.142-.092-.221-.092-.356v-460.383c0-.135 0-.214.092-.356.285-.265 1.27-1.045 3.706-1.886 2.761-.952 6.924-1.741 13.099-2.481 6-.72 13.642-1.085 22.714-1.085 9.312 0 16.937.363 22.69 1.083 6.645.813 10.793 1.818 13.136 2.534 1.968.693 2.802 1.29 3.015 1.46.234.338.255.547.255.732v179.294c0 5.523 4.477 10 10 10h46.386c5.523 0 10-4.477 10-10s-4.477-10-10-10h-36.386v-169.295c0-4.603-1.481-9.019-4.284-12.773-2.65-3.587-6.892-6.405-12.61-8.376-.097-.034-.195-.065-.294-.096-4.504-1.398-10.152-2.52-16.762-3.329-6.547-.82-15.008-1.235-25.146-1.235-9.866 0-18.31.413-25.098 1.228-7.725.927-13.04 1.985-17.235 3.431-5.341 1.842-9.51 4.462-12.393 7.788-.069.08-.137.161-.204.243-3.063 3.769-4.681 8.305-4.681 13.119v460.382c0 4.814 1.619 9.35 4.681 13.119.067.082.135.163.204.243 2.882 3.325 7.051 5.945 12.392 7.787.099.034.198.067.298.098 4.539 1.409 10.238 2.53 16.938 3.334 6.788.814 15.232 1.228 25.098 1.228 10.138 0 18.599-.415 25.121-1.231 6.632-.812 12.28-1.933 16.787-3.331.099-.031.198-.063.296-.097 5.717-1.972 9.959-4.79 12.608-8.376 2.803-3.754 4.284-8.17 4.284-12.773v-187.032h162.765v187.031c0 4.814 1.619 9.352 4.683 13.12.066.082.135.162.203.242 2.877 3.318 6.925 5.926 12.032 7.751.133.047.266.092.4.134 4.657 1.445 10.156 2.536 16.81 3.334 6.787.815 15.361 1.228 25.483 1.228 9.883 0 18.214-.415 24.735-1.231 6.634-.812 12.281-1.933 16.787-3.331.099-.031.197-.063.296-.097 5.342-1.842 9.512-4.462 12.394-7.788.069-.081.138-.162.205-.244 3.063-3.77 4.681-8.305 4.681-13.118v-460.382c.001-4.813-1.617-9.349-4.68-13.118z"/><path d="m256.007 215.103c5.522 0 10-4.477 10-10s-4.478-10-10-10h-.007c-5.523 0-9.996 4.477-9.996 10s4.48 10 10.003 10z"/></g></g></svg>&nbsp;Title</label>
          <input v-model="dataLink.title_link" class="w-full h-8 items-center border-2 rounded px-1 border-gray-400" placeholder="Your own header">
        </div>
        <div class="space-y-2">
          <label class="space-x-4 flex font-bold text-gray-600"><svg id="_x31_" class="h-5 w-5" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m11.894 24c-.131 0-.259-.052-.354-.146-.118-.118-.17-.288-.137-.451l.707-3.535c.02-.098.066-.187.137-.256l7.778-7.778c.584-.584 1.537-.584 2.121 0l1.414 1.414c.585.585.585 1.536 0 2.121l-7.778 7.778c-.069.07-.158.117-.256.137l-3.535.707c-.032.006-.065.009-.097.009zm1.168-3.789-.53 2.651 2.651-.53 7.671-7.671c.195-.195.195-.512 0-.707l-1.414-1.414c-.195-.195-.512-.195-.707 0zm2.367 2.582h.01z"/><path d="m9.5 21h-7c-1.379 0-2.5-1.121-2.5-2.5v-13c0-1.379 1.121-2.5 2.5-2.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h7c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m16.5 12c-.276 0-.5-.224-.5-.5v-6c0-.827-.673-1.5-1.5-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c1.379 0 2.5 1.121 2.5 2.5v6c0 .276-.224.5-.5.5z"/><path d="m11.5 6h-6c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5h1.55c.232-1.14 1.243-2 2.45-2s2.218.86 2.45 2h1.55c.276 0 .5.224.5.5v2c0 .827-.673 1.5-1.5 1.5zm-6.5-3v1.5c0 .275.225.5.5.5h6c.275 0 .5-.225.5-.5v-1.5h-1.5c-.276 0-.5-.224-.5-.5 0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5c0 .276-.224.5-.5.5z"/><path d="m13.5 9h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 12h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path d="m13.5 15h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"/></svg>&nbsp;Description</label>
          <input v-model="dataLink.description" class="w-full h-8 items-center border-2 rounded px-1 border-gray-400" placeholder="This is just a test description">
        </div>
        <div class="flex space-x-2">
          <label class="space-x-4 flex font-bold text-gray-600"><svg id="Capa_1" class="h-5 w-5" enable-background="new 0 0 510 510" height="512" viewBox="0 0 510 510" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m108.649 194.85c-30.425 0-55.177 24.752-55.177 55.177s24.752 55.177 55.177 55.177 55.177-24.752 55.177-55.177-24.752-55.177-55.177-55.177zm0 80.356c-13.883 0-25.179-11.295-25.179-25.179s11.296-25.179 25.179-25.179 25.179 11.295 25.179 25.179-11.296 25.179-25.179 25.179z"/><path d="m206.358 325.171c-30.424 0-55.176 24.752-55.176 55.177 0 30.424 24.752 55.176 55.176 55.176 30.425 0 55.177-24.752 55.177-55.176 0-30.425-24.752-55.177-55.177-55.177zm0 80.355c-13.883 0-25.178-11.295-25.178-25.179s11.295-25.179 25.178-25.179c13.884 0 25.179 11.295 25.179 25.179.001 13.884-11.295 25.179-25.179 25.179z"/><path d="m496.18 324.693c-.099-.098-.198-.194-.299-.29l-51.938-49.011c29.074-21.984 42.208-60.897 30.264-96.895-56.309-169.883-272.685-223.779-401.614-96.798-96.561 95.102-95.66 248.445-4.044 342.874 82.305 84.831 211.993 96.745 307.711 34.089 44.824-29.332 24.217-99.152-29.421-99.152-40.06 0-46.792-56.011-8.951-65.602l91.503 96.974c.096.101.192.201.291.3 18.343 18.385 48.139 18.434 66.53.042 18.389-18.388 18.389-48.152-.032-66.531zm-193.801 47.105c12.051 11.42 27.84 17.709 44.461 17.709 23.956 0 32.988 30.972 12.993 44.056-83.775 54.84-197.555 44.538-269.754-29.878-80.978-83.463-80.501-217.407 3.896-300.423 113.093-111.242 302.248-64.702 351.759 84.677 8.389 25.283-2.094 52.756-24.082 66.419l-83.314-78.619c5.044-24.218-1.942-49.749-20.246-68.052-22.973-22.974-95.346-34.425-126.711-37.832-9.513-1.036-17.568 7.006-16.533 16.533 3.435 31.487 14.819 103.696 37.833 126.711 18.316 18.314 43.86 25.286 68.059 20.243l35.094 37.192c-37.37 20.287-44.958 71.41-13.455 101.264zm-68.487-179.911c-11.303-11.303-21.402-54.292-26.734-89.723 35.432 5.331 78.421 15.431 89.723 26.734 17.404 17.404 17.407 45.58 0 62.989-17.365 17.367-45.547 17.442-62.989 0zm241.11 178.126c-6.61 6.61-17.308 6.64-23.957.107-7.678-8.137-134.279-142.308-141.333-149.783 5.918-4.395 11.222-9.699 15.623-15.623l149.784 141.343c6.539 6.656 6.503 17.335-.117 23.956z"/></svg>&nbsp;Text Color</label>
          <div class="flex space-x-2 items-center justify-center">
            <div @click="setTextColor('#fff')" class="h-6 w-6 rounded-lg bg-white border-2 border-black">
              <svg v-if="colorText=='#fff'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#000000')" class="h-6 w-6 rounded-lg bg-black items-center">
              <svg v-if="colorText=='#000000'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#4b5563')" class="h-6 w-6 rounded-lg bg-gray-600 border">
              <svg v-if="colorText=='#4b5563'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#374151')" class="h-6 w-6 rounded-lg bg-gray-700 border">
              <svg v-if="colorText=='#374151'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#1f2937')" class="h-6 w-6 rounded-lg bg-gray-800 border">
              <svg v-if="colorText=='#1f2937'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#1e3a8a')" class="h-6 w-6 rounded-lg bg-blue-900 border">
              <svg v-if="colorText=='#1e3a8a'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#b45309')" class="h-6 w-6 rounded-lg bg-yellow-700 border">
              <svg v-if="colorText=='#b45309'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setTextColor('#92400e')" class="h-6 w-6 rounded-lg bg-yellow-800 border">
              <svg v-if="colorText=='#92400e'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
          </div>
        </div>
        <input ref="imageBackground" type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/gif, image/jpeg" id="imgBgSource" @change.prevent="ImageBg($event.target.files)">
        <div class="space-y-2">
          <label class="space-x-4 flex font-bold text-gray-600"><svg version="1.1" id="Capa_1" class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M488.474,239.615L325.232,76.951l42.849-42.802c7.814-7.806,7.821-20.47,0.015-28.284c-7.805-7.815-20.468-7.821-28.284-0.016L98.47,246.928c-33.716,9.407-58.524,40.397-58.524,77.073c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20c0-15.522,8.887-29.007,21.839-35.635l169.196,168.616c15.594,15.578,36.068,23.364,56.545,23.363c20.48-0.001,40.963-7.794,56.544-23.375l104.445-104.175c15.113-15.114,23.435-35.209,23.431-56.584C511.942,274.835,503.613,254.743,488.474,239.615z M460.249,324.491L355.804,428.668c-15.587,15.588-40.959,15.594-56.569-0.002L154.072,284.001h221.875c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H158l138.932-138.78l163.288,162.71c7.56,7.554,11.725,17.6,11.727,28.288C471.948,306.905,467.788,316.952,460.249,324.491z"/></g></g><g><g><path d="M95.171,399.293c-10.177-15.195-20.241-27.475-20.665-27.991c-3.799-4.623-9.469-7.302-15.452-7.302c-5.983,0-11.653,2.679-15.452,7.302c-0.424,0.516-10.488,12.796-20.665,27.991C2.426,429.918,0.054,444.611,0.054,453.001c0,32.533,26.468,59,59,59c32.532,0,59-26.467,59-59C118.054,444.611,115.682,429.918,95.171,399.293z M59.054,472.001c-10.477,0-19-8.523-19.001-18.952c0.004-0.08,0.526-8.269,16.288-31.75c0.907-1.35,1.813-2.677,2.713-3.971c0.899,1.294,1.806,2.621,2.713,3.971c15.488,23.074,16.262,31.381,16.287,31.738C78.034,463.496,69.518,472.001,59.054,472.001z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>&nbsp;Background Type</label>
          <!-- <input type="text" v-model="dataLink.background_type" class="w-full h-8 items-center border-2 rounded px-1 border-gray-400"> -->
          <div class="flex space-x-2">
            <div @click="setBg('color','bg-gradient-to-b from-pink-300 to-purple-400')" class="h-24 w-24 flex bg-gradient-to-b from-pink-300 to-purple-400 rounded-lg items-center">
              <svg v-if="colorBg =='bg-gradient-to-b from-pink-300 to-purple-400'" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setBg('color','bg-gradient-to-b from-purple-400 to-blue-500')" class="h-24 w-24 flex items-center bg-gradient-to-b from-purple-400 to-blue-500 rounded-lg">
              <svg v-if="colorBg =='bg-gradient-to-b from-purple-400 to-blue-500'" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setBg('color','bg-gradient-to-b from-blue-400 to-blue-500')" class="h-24 w-24 flex items-center bg-gradient-to-b from-blue-400 to-blue-500 rounded-lg">
              <svg v-if="colorBg =='bg-gradient-to-b from-blue-400 to-blue-500'" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white text-center mx-auto" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="checkmark"><rect width="24" height="24" opacity="0"/><path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z"/></g></g></svg>
            </div>
            <div @click="setBg('img','image')" class="flex h-24 w-24 flex items-center rounded-lg border-gray-400 border-4 items-center">
              <img v-if="imgBg" id="bgPhoto" :src="imgBg" class="h-full w-full object-cover object-top rounded-md" alt="image preview"/>
              <!-- <img v-if="imgBg && dataLink.background_type==''" id="bgPhoto" class="h-full w-full object-cover object-top rounded-md" alt="image preview"/>
              <img v-if="imgBg!='' && dataLink.background_type!=''" :src="imgBg" class="h-full w-full object-cover object-top rounded-md" alt="image preview"/> -->
              <svg v-if="!imgBg" xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto py-auto items-center text-center" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="image"><rect width="24" height="24" opacity="0"/><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM6 5h12a1 1 0 0 1 1 1v8.36l-3.2-2.73a2.77 2.77 0 0 0-3.52 0L5 17.7V6a1 1 0 0 1 1-1zm12 14H6.56l7-5.84a.78.78 0 0 1 .93 0L19 17v1a1 1 0 0 1-1 1z"/><circle cx="8" cy="8.5" r="1.5"/></g></g></svg>
            </div>
          </div>
        </div>
        <div class="space-y-2">
          <button v-for="databtn of viewDataButton" :key="databtn.id" class="w-full h-12 flex px-2 my-1 rounded-full justify-start items-center text-center text-lg font-medium" v-bind:class="databtn.btn_color">
            <div class="w-1/12 justify-start items-center mr-1">
              <div v-html="databtn.icon_btn"></div>
            </div>
            <div class="w-9/12 justify-start items-center">
              <span class="text-white mx-auto">{{databtn.text_btn}}</span>
            </div>
            <div class="w-2/12 flex justify-end items-center text-white space-x-2">
              <svg @click="removeBTNlink(databtn.id)" xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g></svg>
              <!-- <svg @click="editBTNlink(databtn.id)" xmlns="http://www.w3.org/2000/svg" class="text-white h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="edit-2"><rect width="24" height="24" opacity="0"/><path d="M19 20H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2z"/><path d="M5 18h.09l4.17-.38a2 2 0 0 0 1.21-.57l9-9a1.92 1.92 0 0 0-.07-2.71L16.66 2.6A2 2 0 0 0 14 2.53l-9 9a2 2 0 0 0-.57 1.21L4 16.91a1 1 0 0 0 .29.8A1 1 0 0 0 5 18zM15.27 4L18 6.73l-2 1.95L13.32 6zm-8.9 8.91L12 7.32l2.7 2.7-5.6 5.6-3 .28z"/></g></g></svg> -->
            </div>
          </button>
        </div>
        <div class="w-full h-12 flex bg-green-400 rounded" @click="addLink()">
          <div class="w-2/12 flex h-full bg-blue-400 rounded items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white font-bold h-6 w-6 mx-auto font-bold" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"/></g></g></svg>
          </div>
          <div class="w-2/12 flex h-full rounded items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-white font-bold h-6 w-6 mx-auto font-bold" fill="currentColor" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="link"><rect width="24" height="24" opacity="0"/><path d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1z"/><path d="M9 16H7.21A4.13 4.13 0 0 1 3 12.37 4 4 0 0 1 7 8h2a1 1 0 0 0 0-2H7.21a6.15 6.15 0 0 0-6.16 5.21A6 6 0 0 0 7 18h2a1 1 0 0 0 0-2z"/><path d="M23 11.24A6.16 6.16 0 0 0 16.76 6h-1.51C14.44 6 14 6.45 14 7a1 1 0 0 0 1 1h1.79A4.13 4.13 0 0 1 21 11.63 4 4 0 0 1 17 16h-2a1 1 0 0 0 0 2h2a6 6 0 0 0 6-6.76z"/></g></g></svg>
          </div>
          <div class="w-8/12 flex h-full rounded items-center">
            <div class="row mx-2 -space-y-2">
              <h2 class="text-md font-semibold -mb-2 text-gray-800">Add Link</h2>
              <span class="text-xs font-lg text-gray-600">Click for add new link</span>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <button @click="submitCreateLink()" class="px-6 my-2 rounded bg-blue-400 text-lg font-bold text-white">Submit</button>
        </div>
      </div>
    </div>
    <div v-if="modalAddLink" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-y-hidden flex justify-center items-center animated fadeIn faster"
		  style="background: rgba(0,0,0,.7);">
      <div class="row w-full">
        <div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto  rounded-lg shadow-lg z-50 overflow-y-auto">
			    <div class="flex h-12 w-full bg-blue-300 items-center justify-between rounded-lg">
            <div class="relative pl-2 w-8/12 items-center">
              <h4 class="text-gray-600 font-bold">Add Link</h4>
            </div>
            <div class="flex items-center justify-end w-4/12">
              <button @click="unAddLink()" class="px-2 py-1 px-auto mx-2 my-auto items-center font-medium text-gray-800 fomt-medium">&#10005;</button>
            </div>
          </div>
          <div class="w-full flex h-12 px-2 my-4 space-x-2 justify-center items-center text-center">
            <div @click="typeLink('wa')" class="w-2/12 h-full flex items-center bg-green-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='wa' }">
              <!-- WA -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
            </div>
            <div @click="typeLink('fb')" class="w-2/12 h-full flex items-center bg-blue-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='fb' }">
              <!-- FB -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </div>
            <div @click="typeLink('twitter')" class="w-2/12 h-full flex items-center bg-blue-400 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='twitter' }">
              <!-- Twitter -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
            </div>
            <div @click="typeLink('yt')" class="w-2/12 h-full flex items-center bg-red-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='yt' }">
              <!-- YT -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
            </div>
            <div @click="typeLink('link')" class="w-4/12 h-full flex items-center bg-gray-800 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='link' }">
              <div class="flex mx-auto items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
                <span class="text-center text-white mx-auto py-auto font-medium text-xs">Link</span>
              </div>
            </div>
          </div>
          <div v-if="!typeBTN" class="w-full px-2 pb-4 space-y-2 items-center">
            <h4 class="text-red-400 font-medium text-lg text-center">select the button type above</h4>
          </div>
          <div v-if="typeBTN" class="w-full px-2 pb-4 space-y-2">
            <div class="w-full">
              <label>Your Link Full</label>
              <input v-model="dataButton.href" class="w-full h-8 items-center border-2 rounded border-gray-400 px-1" placeholder="your link">
            </div>
            <div class="w-full">
              <label>Your Text</label>
              <input v-model="dataButton.text_btn" class="w-full h-8 items-center border-2 rounded border-gray-400 px-1" placeholder="your text">
            </div>
            <div v-if="sideLeft==true || sideRigth==true" class="w-full row">
              <label>Slot Top Button</label>
              <!-- v-bind:class="{ 'justify-end': sideLeft==false, 'justify-start': sideRigth==false}" -->
              <div class="space-x-2 flex w-full">
                <div v-bind:class="{'rounded-lg border-2 border-green-300 text-green-400':sideLeft==false,'bg-green-300 rounded-lg':sideLeft==true}" class="w-6/12 items-center">
                  <button @click="setLotPosition('l')" class="w-full text-center mx-auto py-2 font-semibold">Left</button>
                </div>
                <div v-bind:class="{'rounded-lg border-2 border-blue-300 text-blue-400':sideRigth==false,'bg-blue-300 rounded-lg':sideRigth==true}" class="w-6/12 items-center">
                  <button @click="setLotPosition('r')" class="w-full text-center mx-auto mx-2 py-2 font-semibold">Right</button>
                </div>
              </div>
            </div>
            <div class="w-full row">
              <button @click="seletIcon('t')" v-if="!iconList" class="h-8 px-2 my-1 bg-blue-400 rounded text-white text-center font-bold">Choose Icon</button>
              <button @click="seletIcon('f')" v-if="iconList" class="h-8 px-2 my-1 bg-blue-400 rounded text-center font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.52 5.934L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066zm10.237 10.238l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.974 3.761z"/></svg>
              </button>
              <div v-if="iconList" class="w-full h-32 bg-blue-200 px-2 py-2 rounded shadow-2xl shadow-inner ">
                <div class="h-full grid grid-flow-row grid-cols-8 gap-2 overflow-y-auto no-scrollbar">
                  <div v-for="svg of svgList" :key="svg.id" @click="customIcon(svg.svg)" class="items-center justify-center rounded bg-black h-10 flex" v-bind:class="{ 'border-4 border-blue-400': dataButton.icon_btn==svg.svg }">
                    <div v-html="svg.svg"></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="typeBTN" class="w-full space-y-2">
              <label>Preview Button Link</label>
              <button v-if="typeBTN=='wa'" class="w-full h-12 flex px-2 my-1 bg-green-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <div v-html="dataButton.icon_btn"></div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg> -->
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='fb'" class="w-full h-12 flex px-2 my-1 bg-blue-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                <div v-html="dataButton.icon_btn"></div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white pr-2" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg> -->
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='twitter'" class="w-full h-12 flex px-2 my-1 bg-blue-400 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <div v-html="dataButton.icon_btn"></div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg> -->
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='yt'" class="w-full h-12 flex px-2 my-1 bg-red-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <div v-html="dataButton.icon_btn"></div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg> -->
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='link'" class="w-full h-12 flex px-2 my-1 bg-gray-800 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <div v-html="dataButton.icon_btn"></div>
                  <!-- <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg> -->
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
            </div>
            <div v-if="typeBTN" class="w-full space-y-2">
              <button @click="addBTNlink()" class="w-full h-12 flex px-2 my-1 border-2 border-blue-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-blue-600 font-bold mx-auto">Submit +</span>
                </div>
              </button>
            </div>
          </div>
		    </div>
      </div>
	  </div>
    <div v-if="modalEditLink" class="main-modal fixed w-full h-100 inset-0 z-50 overflow-y-hidden flex justify-center items-center animated fadeIn faster"
		  style="background: rgba(0,0,0,.7);">
      <div class="row w-full">
        <div class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto  rounded-lg shadow-lg z-50 overflow-y-auto">
			    <div class="flex h-12 w-full bg-blue-300 items-center justify-between rounded-lg">
            <div class="relative pl-2 w-8/12 items-center">
              <h4 class="text-gray-600 font-bold">Edits Link</h4>
            </div>
            <div class="flex items-center justify-end w-4/12">
              <button @click="unEditLink()" class="px-2 py-1 px-auto mx-2 my-auto items-center font-medium text-gray-800 fomt-medium">&#10005;</button>
            </div>
          </div>
          <div class="w-full flex h-12 px-2 my-4 space-x-2 justify-center items-center text-center">
            <div @click="typeLink('wa')" class="w-2/12 h-full flex items-center bg-green-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='wa' }">
              <!-- WA -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
            </div>
            <div @click="typeLink('fb')" class="w-2/12 h-full flex items-center bg-blue-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='fb' }">
              <!-- FB -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </div>
            <div @click="typeLink('twitter')" class="w-2/12 h-full flex items-center bg-blue-400 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='twitter' }">
              <!-- Twitter -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
            </div>
            <div @click="typeLink('yt')" class="w-2/12 h-full flex items-center bg-red-600 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='yt' }">
              <!-- YT -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
            </div>
            <div @click="typeLink('link')" class="w-4/12 h-full flex items-center bg-gray-800 rounded-lg" v-bind:class="{ 'border-4 border-dotted border-white': typeBTN=='link' }">
              <div class="flex mx-auto items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
                <span class="text-center text-white mx-auto py-auto font-medium text-xs">Link</span>
              </div>
            </div>
          </div>
          <div v-if="!typeBTN" class="w-full px-2 pb-4 space-y-2 items-center">
            <h4 class="text-red-400 font-medium text-lg text-center">select the button type above</h4>
          </div>
          <div v-if="typeBTN" class="w-full px-2 pb-4 space-y-2">
            <div class="w-full">
              <label>Your Link Full</label>
              <input v-model="dataButton.href" class="w-full h-8 items-center border-2 rounded border-gray-400 px-1" placeholder="your link">
            </div>
            <div class="w-full">
              <label>Your Text</label>
              <input v-model="dataButton.text_btn" class="w-full h-8 items-center border-2 rounded border-gray-400 px-1" placeholder="your text">
            </div>
            <div class="w-full row">
              <label>Slot Top Button</label>
              <div class="space-x-2 flex w-full">
                <div class="w-6/12 items-center">
                  <button class="w-full text-center mx-auto py-2 bg-green-300 rounded-lg font-semibold">Left</button>
                </div>
                <div class="w-6/12 items-center">
                  <button class="w-full text-center mx-auto mx-2 py-2 bg-blue-300 rounded-lg font-semibold">Right</button>
                </div>
              </div>
            </div>
            <div class="w-full flex">
              <!-- Next Pengembangan -->
              <!-- <button class="h-8 px-2 my-1 bg-green-300 rounded text-center font-bold">Choose Icon</button> -->
            </div>
            <div v-if="typeBTN" class="w-full space-y-2">
              <label>Preview Button Link</label>
              <button v-if="typeBTN=='wa'" class="w-full h-12 flex px-2 my-1 bg-green-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='fb'" class="w-full h-12 flex px-2 my-1 bg-blue-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white pr-2" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='twitter'" class="w-full h-12 flex px-2 my-1 bg-blue-400 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='yt'" class="w-full h-12 flex px-2 my-1 bg-red-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
              <button v-if="typeBTN=='link'" class="w-full h-12 flex px-2 my-1 bg-gray-800 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-white mx-auto">{{dataButton.text_btn}}</span>
                </div>
              </button>
            </div>
            <div v-if="typeBTN" class="w-full space-y-2">
              <button @click="addBTNlink()" class="w-full h-12 flex px-2 my-1 border-2 border-blue-600 rounded-full justify-start items-center text-center text-lg font-medium">
                <div class="w-1/12 justify-start items-center mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>
                </div>
                <div class="w-11/12 justify-start items-center">
                  <span class="text-blue-600 font-bold mx-auto">Submit +</span>
                </div>
              </button>
            </div>
          </div>
		    </div>
      </div>
	  </div>
  </div>
</template>

<script>
import Index from '../Auth/Index.vue'
export default {
  components: { Index },
  data() {
    return {
      link                : `${this.$route.params.id}`,
      urlAsset            : process.env.URL_ASSETS,
      user                : this.$supabase.auth.user(),
      previewPhoto        : '',
      filePhotoHeader     : '',
      filePhotoBg         : '',
      urlPhotoHeader     : '',
      uploadPhoto         : false,
      colorText           : '',
      colorBg             : '',
      imgBg               : '',
      idLink              : '',
      dataProfile         : {
        'name'        : '',
        'handphone'   : '',
        'photo'       : '',
      },
      dataLink        : {
        'title_link'      : '',
        'text_color'      : '',
        'heading_photo'   : '',
        'description'     : '',
        'background_type'  : '',
        'background_color' : '',
        'background_img'   : '',
      },
      modalAddLink    : false,
      modalEditLink   : false,
      dataButton : {
        'href'            : '',
        'text_btn'        : '',
        'text_btn_color'  : 'text-white',
        'btn_color'       : '',
        'icon_btn'        : '',
        'side_left'       : '',
        'side_right'      : '',
      },
      sideRigth           : true,
      sideLeft            : true,
      Sideleft            : true,
      Siderigth           : true,
      viewDataButton      : [],
      typeBTN             : '',
      iconList            : false,
      svgList             : [],
      iconCustom          : '',
      valueLinkAdd        : '',
    }
  },
  watch: {
    typeBTN: function (value) {
      if(value=='wa'){
        this.dataButton.href        = 'https://wa.me/send/?phone=62000000'
        this.dataButton.btn_color   = 'bg-green-600'
        this.dataButton.icon_btn    = '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"/></svg>'
      }
      if(value=='fb'){
        this.dataButton.href        = 'https://fb.com/username'
        this.dataButton.btn_color   = 'bg-blue-600'
        this.dataButton.icon_btn    = '<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white pr-2" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>'
      }
      if(value=='twitter'){
        this.dataButton.href        = 'https://twitter.com/username'
        this.dataButton.btn_color   = 'bg-blue-400'
        this.dataButton.icon_btn    = '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/></svg>'
      }
      if(value=='yt'){
        this.dataButton.href        = 'https://www.youtube.com/channel/yourchanel'
        this.dataButton.btn_color   = 'bg-red-600'
        this.dataButton.icon_btn    = '<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white mx-auto" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>'
      }
      if(value=='link'){
        this.dataButton.href = ''
        this.dataButton.btn_color   = 'bg-gray-800'
        this.dataButton.icon_btn    = '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>'
      }
    },
    // text_btn: function(value){

    // }
    idLink: function(value){
      // console.log(value.length)
      if(value!=''){
        this.getListBTN()
      }
    }
  },
  mounted() {
    this.getSVG()
    this.getProfile()
    this.getDataLink()
    // this.getListBTN()
  },
  methods: {
    async getSVG(){
      await this.$supabase.from('svg_list').select().then((svg)=>{
        // console.log('ss')
        // console.log(svg)
        if(svg.error==null){
          console.log(svg.data)
          this.svgList = svg.data
        }
      })
    },
    async getProfile(){
      await this.$supabase.from('profile_user').select().eq('user_id', this.user.id).then((r)=>{
        if(r.error == null){
          // console.log(r.data)
          this.dataProfile = r.data[0]
          this.dataProfile.photo = this.urlAsset+'/'+r.data[0].photo
          // console.log(this.dataProfile.photo)
        }
      })
    },
    async getDataLink(){
      await this.$supabase.from('link_up').select().eq('link', this.link).then((res)=>{
        if(res.error == null){
          console.log(res.data)
          this.idLink = res.data[0].id
          // console.log(this.idLink)
          this.dataLink = res.data[0]
          if(res.data[0].text_color.length != 0 && res.data[0].text_color != '' && res.data[0].text_color != null){
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
              // document.getElementById("bgPhoto").src = this.imgBg
            }
          }
          if(res.data[0].heading_photo.length != 0 && res.data[0].heading_photo != '' && res.data[0].heading_photo != null){
            console.log(res.data[0].heading_photo.length)
            this.dataLink.heading_photo = this.urlAsset+'/'+res.data[0].heading_photo
            this.dataProfile.photo = res.data[0].heading_photo
          }
          console.log(this.dataLink)
        }
      })
    },
    async getListBTN(){
      // console.log(this.idLink)
      await this.$supabase.from('btn_link').select().eq('link_up_id',this.idLink).eq('user_id',this.user.id).order('id', { ascending: true }).then((r)=>{
        console.log('kliked')
        console.log(r)
        if(r.error == null){
          console.log(r.data.length)
          console.log(r.data)
          this.viewDataButton = r.data
        }
      });
      this.$supabase.from('btn_link').select('*',{ count: 'exact' }).eq('link_up_id',this.idLink).eq('user_id',this.user.id).eq('side_left',1).then((lf)=>{
        console.log('kri')
        console.log(lf)
        if(lf.count==1){
          this.sideLeft = false
          return this.Sideleft = false
        }
      })
      this.$supabase.from('btn_link').select('*',{ count: 'exact' }).eq('link_up_id',this.idLink).eq('user_id',this.user.id).eq('side_right',1).then((rg)=>{
        console.log('knan')
        console.log(rg)
        if(rg.count==1){
          this.sideRigth = false
          return this.Siderigth = false
        }
      })
    },
    async submitCreateLink(){
      await this.$supabase
      .from('link_up')
      .update([
        {
          title_link        : this.dataLink.title_link,
          text_color        : this.dataLink.text_color,
          description       : this.dataLink.description,
          background_type   : this.dataLink.background_type,
          background_color  : this.dataLink.background_color,
          background_img    : this.dataLink.background_img,
        }
      ])
      .match({ user_id: this.$supabase.auth.user().id, id: this.idLink}).then((res)=>{
        console.log(res)
      })
    },
    async setTextColor(color){
      this.colorText = color
      this.dataLink.text_color = color
      console.log(color)
    },
    async setBg(type,value){
      if(type=="color"){
        this.dataLink.background_type = 'color'
        this.dataLink.background_color = value
        this.colorBg = value
        this.imgBg = ''
      }else{
        this.dataLink.background_type = 'img'
        this.colorBg = ''
        this.dataLink.background_img = value
        this.imageBack()
      }
      console.log(this.dataLink.background_type)
    },
    async imageBack(){
      this.$refs.imageBackground.click(".photo")
    },
    photoHeader () {
      this.$refs.imageHeader.click(".photo")
    },
    ImageBg(files){
      if(files[0]){
        this.filePhotoBg = files[0]
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("imgBgSource").files[0]);
        console.log(files[0])
        this.imgBg = 'img'
        // this.imgBg = 'img'
        // this.dataLink.background_type = 'img'
        oFReader.onload = function(oFREvent) {
          document.getElementById("bgPhoto").src = oFREvent.target.result;
          this.previewPhoto = oFREvent.target.result;
        };
        this.doUploadBg()
      }
    },
    ImageHeader(files){
      if(files[0]){
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("imgSource").files[0]);
        oFReader.onload = function(oFREvent) {
          document.getElementById("headerPhoto").src = oFREvent.target.result;
          this.previewPhoto = oFREvent.target.result;
        };
        this.filePhotoHeader = files[0]
        this.doUploadPhoto()
        this.uploadPhoto = true
      }
    },
    async doUploadPhoto(){
      let namePhoto = 'photoHeader/'+this.user.id+'_'+this.makeid(10)+'.JPG'
      this.$supabase.storage
      .from('assets')
      .upload(namePhoto, this.filePhotoHeader, {
        cacheControl: 3600,
        upsert: false
      }).then((res)=>{
        console.log(res.data)
        if(res.data.error == null){
          console.log(res.data['Key'])
          this.$supabase
          .from('link_up')
          .update([
          {
            heading_photo: res.data['Key'],
          }
          ]).match({ user_id: this.$supabase.auth.user().id,id:this.idLink}).then((res)=>{
            console.log(res)
          })
          return this.urlPhotoHeader = res.data['Key']
        }
        return this.urlPhotoHeader = '';
      })
    },
    async doUploadBg(){
      let namePhoto = 'photoBackground/'+this.user.id+'_'+this.makeid(10)+'.JPG'
      this.$supabase.storage
      .from('assets')
      .upload(namePhoto, this.filePhotoBg, {
        cacheControl: 3600,
        upsert: false
      }).then((res)=>{
        console.log(res.data)
        if(res.data.error == null){
          console.log(res.data['Key'])
          this.$supabase
          .from('link_up')
          .update([
          {
            background_type: 'img',
            background_img: res.data['Key'],
          }
          ]).match({ user_id: this.$supabase.auth.user().id, id: this.idLink}).then((res)=>{
            console.log(res)
            this.dataLink.background_img = res.data['Key']
          })
        }
      })
    },
    seletIcon(v){
      if(v=='f'){
        this.iconList = false
      }
      if(v=='t'){
        this.iconList = true
      }
    },
    customIcon(svg){
      this.iconCustom = svg
      this.dataButton.icon_btn = svg
    },
    async typeLink(value){
      this.typeBTN = value
    },
    setLotPosition(p){
      if(p=='r' && this.Siderigth==true){
        if(this.Sideleft==false){
          this.sideRigth              = false
          this.dataButton.side_right  = 1
          return this.dataButton.side_left   = ''
        }
        this.sideLeft               = true
        this.sideRigth              = false
        this.dataButton.side_right  = 1
        this.dataButton.side_left   = ''
      }
      if(p=='l' && this.Sideleft==true){
        if(this.Siderigth==false){
          this.sideLeft               = false
          this.dataButton.side_right  = ''
          return this.dataButton.side_left   = 1
        }
        this.sideLeft               = false
        this.sideRigth              = true
        this.dataButton.side_right  = ''
        this.dataButton.side_left   = 1
      }
    },
    async addBTNlink(){
      console.log(this.dataButton)
      await this.$supabase
      .from('btn_link')
      .insert([
        {
          link_up_id      : this.idLink,
          href            : this.dataButton.href,
          text_btn        : this.dataButton.text_btn,
          text_btn_color  : this.dataButton.text_btn_color,
          btn_color       : this.dataButton.btn_color,
          icon_btn        : this.dataButton.icon_btn,
          side_left       : this.dataButton.side_left,
          side_right      : this.dataButton.side_right,
          user_id         : this.user.id,
        }
      ]).then((res)=>{
        console.log(res)
        if(res.error==null){
          this.typeBTN                    = ''
          this.dataButton.href            =''
          this.dataButton.text_btn        =''
          this.dataButton.text_btn_color  ='text-white'
          this.dataButton.btn_color       =''
          this.dataButton.icon_btn        =''
          this.dataButton.side_left       =''
          this.dataButton.side_right      =''
          this.getListBTN()
        }
      })
    },
    async removeBTNlink(idbtn){
      await this.$supabase.from('btn_link').delete().match({ id: idbtn }).then((r)=>{
        if(r.error==null){
          this.getListBTN()
        }
      })
    },
    async editBTNlink(idbtn){
      this.modalEditLink = true
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
    },
    addLink(){
      this.modalAddLink = true;
    },
    unAddLink(){
      this.modalAddLink = false;
      this.typeBTN                    = ''
      this.dataButton.href            =''
      this.dataButton.text_btn        =''
      this.dataButton.text_btn_color  ='text-white'
      this.dataButton.btn_color       =''
      this.dataButton.icon_btn        =''
      this.dataButton.side_left       =''
      this.dataButton.side_right      =''
    },
    unEditLink(){
      this.modalEditLink = false;
    }
  },
}
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
.icon-name {
  font-size: 512%;
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
