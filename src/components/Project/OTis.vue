<template>
  <div
    class="bg-[#009DE6] text-white font-manrope px-5 py-16 space-y-6 relative shadow-lg"
  >
    <div class="flex items-center flex-col xl:px-48 z-30 relative gap-4">
      <div class="h-[150px] lg:mb-0 mb-8">
        <img
          src="/src/assets/otis-manila/OTis-Logo.png"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="flex flex-col items-center">
        <span
          class="font-leagueSpartan text-3xl font-bold flex items-center gap-2"
          ><span>OTis Manila Website</span>
          <ExternalLink
            class="cursor-pointer hover:opacity-50 transition-all"
            @click="redirectTo('https://www.otismanila.com/')"
        /></span>
        <div class="flex flex-wrap gap-4 font-semibold">
          <span>Figma</span>
          <span>Vue 3</span>
          <span>Tailwind CSS</span>
        </div>
      </div>
      <div class="drop-shadow-lg">
        <p></p>
      </div>
      <div class="flex gap-4">
        <button
          class="border-white border-2 p-2 text-sm font-semibold hover:text-[#009DE6] hover:bg-white transition-all"
          @click="show('screens')"
        >
          View Screens
        </button>
        <button
          class="border-white border-2 p-2 text-sm font-semibold hover:text-[#009DE6] hover:bg-white transition-all"
          @click="show('brand-guide')"
        >
          Brand Guide
        </button>
      </div>
      <div class="h-[70vh] hidden lg:flex" v-motion-slide-visible-bottom>
        <img
          src="/src/assets/otis-manila/OTis-Laptop.png"
          class="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ExternalLink } from "lucide-vue-next";
import { api as viewerApi } from "v-viewer";

// Create an alert that says it is not available yet
const alertNotAvailable = () => {
  alert("This feature is not available yet.");
};

// Redirect to a new page
const redirectTo = (url: string) => {
  window.open(url, "_blank");
};

const show = (collection: string) => {
  if (collection === "screens") {
    viewerApi({
      images: ["/src/assets/otis-manila/OTisManila-Screens.png"],
    });
  } else {
    viewerApi({
      images: ["/src/assets/otis-manila/BrandGuide-OTisManila.jpg"],
    });
  }
};
</script>

<style></style>
