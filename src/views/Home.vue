<script setup>
import ProjectKapedoko from "../components/Project/Kapedoko.vue";
import ProjectOTis from '../components/Project/OTis.vue'
import ProjectCinenest from '../components/Project/Cinenest.vue'
import Technologies from "../components/Technologies.vue";
import WorkStatus from "../components/WorkStatus.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <Header v-motion-fade-visible-once />
  <div class="bg-primary w-full text-white">
    <div class="xl:px-48 px-5 py-14 flex items-center sm:justify-between overflow-hidden relative h-full">
      <div class="z-0">
        <img
          src="../assets/Logo-Dark.png"
          alt=""
          width="300"
          class="grayscale opacity-15 absolute -top-10"
        />
      </div>
      <span class="font-bold text-3xl sm:text-4xl z-10 font-leagueSpartan">projects</span>
    </div>
  </div>
  <div>
    <ProjectKapedoko />
    <ProjectOTis />
    <ProjectCinenest />
  </div>
  <div class="xl:px-48 px-5 py-10">
    <!-- <Projects  v-motion-roll-visible-once-left/> -->
    <Technologies/>
    <WorkStatus />
  </div>
</template>

<style scoped></style>
