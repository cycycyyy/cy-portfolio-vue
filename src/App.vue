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

  <div class="container">
    <router-view></router-view>
  </div>

</template>

<style scoped></style>
