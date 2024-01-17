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

  <div class="bg-neutral py-8 font-manrope">
    <div class="flex flex-col justify-between items-center xl:px-48 px-10 text-sm">
      <img src="/Logo-Green.png" width="80" class="">
      <ul class="pt-5 flex gap-7 rounded-lg text-primary">
        <router-link :to="{ name: 'Home' }">
          <li class="hover:bg-secondary hover:text-neutral text-primary btn btn-neutral">Home</li>
        </router-link>
        <router-link :to="{ name: 'About' }">
          <li class="hover:bg-secondary hover:text-neutral text-primary btn btn-neutral">About</li>
        </router-link>
        <router-link :to="{ name: 'Projects' }">
          <li class="hover:bg-secondary hover:text-neutral text-primary btn btn-neutral">Projects</li>
        </router-link>
      </ul>
    </div>
  </div>

  <div>
    <router-view></router-view>
</div></template>

<style scoped></style>
