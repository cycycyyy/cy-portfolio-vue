<script setup>

import { RouterView, RouterLink } from 'vue-router'

</script>

<template>
  <!-- <div>
    <ul>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
  </div> -->

  <div class="bg-neutral py-7 font-manrope">
    <div class="flex flex-col items-end xl:px-48 px-10">
      <img src="/Logo-Green.png" width="120" class="">
      <ul class="flex mt-8 gap-5 rounded-lg text-primary">
        <li :to="{ name: 'Home' }" class="hover:text-white transition-colors"><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li :to="{ name: 'About' }" class="ml-10 hover:text-white transition-colors"><router-link :to="{ name: 'About' }">About</router-link></li>
        <li class="ml-10">Projects</li>
      </ul>
    </div>
  </div>

  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
