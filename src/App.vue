<script setup>
import { RouterView, RouterLink } from "vue-router";

import Footer from "./components/Footer.vue";

/* console.log(useRouter().currentRoute.value.name); */

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
  </div>max-w-[1920px]  -->

  <div class="bg-[#f3f4f6] h-screen">
    <div id="container" class="bg-[#f3f4f6] m-auto" data-theme="light">
      <div class="h-[10vh] font-manrope">
        <div class="flex justify-between lg:items-center xl:px-48 px-5 py-5" v-motion-fade-visible-once>
          <router-link :to="{ name: 'Home' }">
            <img src="/Logo-Dark.png" width="80" />
          </router-link>
          <ul
            class="flex items-center gap-5 lg:gap-12 text-secondary font-bold"
          >
            <!-- <router-link :to="{ name: 'Home' }">
              <li class="hover:text-primary lg:block hidden ease-in transition-all">home</li>
            </router-link>
            <router-link :to="{ name: 'Home' }">
              <li class="hover:text-primary ease-in transition-all">about</li>
            </router-link> -->
            <!-- <router-link :to="{ name: 'Home' }">
              <li
                class="hover:text-primary lg:block hidden ease-in transition-all"
              >
                home
              </li>
            </router-link>
            <router-link :to="{ name: 'Projects' }">
              <li
                class="hover:text-primary lg:block hidden ease-in transition-all"
              >
                projects
              </li>
            </router-link> -->
            <!-- <li>
              <MoonStar class="hover:text-primary" />
            </li> -->
          </ul>
        </div>
      </div>

      <div>
        <router-view></router-view>
      </div>
      <div class="lg:flex gap-12 xl:px-48 px-5" v-motion-fade-visible-once>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
