<template>
  <div
    class="bg-[#121212] text-white font-manrope px-5 py-16 space-y-6 relative"
  >
    <div class="lg:flex items-center justify-between xl:px-48 space-y-5 gap-10">
      <div class="flex flex-col items-start relative gap-10 lg:w-1/2">
        <div class="h-[25px] ">
          <img
            src="/src/assets/cinenest/Cinenest-Logo.png"
            class="w-full h-full object-contain"
          />
        </div>
        <div class="space-y-3 flex-1">
          <div>
            <span
              class="font-leagueSpartan text-[#FACC15] text-3xl font-bold flex items-center gap-2"
              ><span>Movie Directory</span>
              <ExternalLink
                class="cursor-pointer hover:opacity-50 transition-all"
                @click="redirectTo('https://movie-directory-chi.vercel.app/')"
            /></span>
            <div class="flex flex-wrap gap-4 font-semibold">
              <span>Nuxt 3</span>
              <span>Nuxt UI</span>
              <span>Vue Motion</span>
              <span>TMDB API</span>
            </div>
          </div>
          <div class="drop-shadow-lg space-y-2">
            <p>
              Uses the TMDB API to provide users with up-to-date information on
              the latest movie releases. Built with Nuxt 3, Nuxt UI, and Vue
              Motion.
            </p>
          </div>
        </div>
      </div>
      <div class="lg:flex hidden">
        <div class="h-[50vh]" v-motion-slide-visible-bottom>
          <img
            src="/src/assets/cinenest/Cinenest-Mockup.png"
            class="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ExternalLink } from "lucide-vue-next";

const redirectTo = (url: string) => {
  window.open(url, "_blank");
};
</script>
