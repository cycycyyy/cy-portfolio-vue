<script setup>

import { RouterView, RouterLink } from 'vue-router'
import { MoonStar } from 'lucide-vue-next';
import { Menu } from 'lucide-vue-next';

</script>

<template>

  <!-- FOR SIDEBAR -->


  <!-- <div>
    <ul>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'About' }">About</router-link></li>
    </ul>
  </div> -->
  <!-- <div class="drawer drawer-end">
    <input id="sidebar-nav" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
    </div>
    <div class="drawer-side">
      <label for="sidebar-nav" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-4 w-[100vw] min-h-full bg-primary text-base-content">
        <label for="sidebar-nav" class="drawer-button"><Menu class="text-secondary"/></label>
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div> -->

  <div class="h-[10vh] font-manrope">
    <div class="flex justify-between lg:items-center xl:px-48 px-10 py-5 ">
      <router-link :to="{ name: 'Home' }">
        <img src="/Logo-Dark.png" width="80">
      </router-link>
      <ul class="pt-5 lg:pt-0 lg:flex gap-12 text-secondary font-bold">
        <router-link :to="{ name: 'Home' }">
          <li class="hover:text-primary lg:block hidden">home</li>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <li class="hover:text-primary lg:block hidden">about</li>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <li class="hover:text-primary lg:block hidden">projects</li>
        </router-link>
        <MoonStar class="hover:text-primary" />
      </ul>
    </div>
  </div>

  <div>
    <router-view class=""></router-view>
  </div>
</template>

<style scoped></style>
