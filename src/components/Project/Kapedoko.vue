<template>
  <div
    class="bg-[rgb(55,45,37)] text-white font-manrope px-5 py-16 space-y-6 relative"
  >
    <div class="flex flex-col items-start xl:px-48 relative gap-10">
      <div class="h-[150px] lg:mb-0 mb-8">
        <img
          src="/src/assets/kapedoko/Kapedoko-White-Logo.png"
          class="w-full h-full object-contain"
        />
      </div>
      <div class="space-y-3 flex-1">
        <div>
          <span class="font-leagueSpartan text-3xl font-bold"
            >Kapedoko: Coffee Shop Locator App</span
          >
          <div class="flex flex-wrap gap-4 font-semibold">
            <span>Figma</span>
            <span>Nuxt</span>
            <span>Mapbox</span>
            <span>Nuxt UI</span>
            <span>Ionic</span>
            <span>Capacitor</span>
          </div>
        </div>
        <div class="drop-shadow-lg space-y-2">
          <p>
            KapéDoko is a user-friendly coffee shop locator app designed to
            simplify the search for work-friendly cafés. The app helps users
            find coffee shops equipped with essential amenities like Wi-Fi and
            power sockets, making it ideal for remote work or study sessions.
          </p>
          <p>
            With features such as interactive maps, detailed café information,
            and user reviews, KapéDoko ensures a seamless experience for
            discovering cozy and productive spaces to enjoy coffee.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            class="border-white border-2 p-2 text-sm font-semibold hover:text-[#372D25] hover:bg-white transition-all"
            @click="show('screens')"
          >
            View Screens
          </button>
          <button
            class="border-white border-2 p-2 text-sm font-semibold hover:text-[#372D25] hover:bg-white transition-all"
            @click="show('brand-guide')"
          >
            Brand Guide
          </button>
        </div>
      </div>
    </div>
    <div class="h-[80vh] hidden lg:flex" v-motion-slide-visible-bottom>
      <img
        src="/src/assets/kapedoko/Kapedoko-Phone.png"
        class="w-full h-full drop-shadow-xl object-contain"
      />
    </div>
    <!-- <div class="w-full h-full lg:flex items-center relative">
      <div
        class="h-[550px] absolute -rotate-6 -translate-x-40 -translate-y-10"
      >
        <img
          src="/src/assets/kapedoko/Home.png"
          class="w-full h-full drop-shadow-xl"
        />
      </div>
      <div class="h-[550px] absolute rotate-12 translate-y-10">
        <img
          src="/src/assets/kapedoko/Loading.png"
          class="w-full h-full drop-shadow-xl"
        />
      </div>
    </div> -->
    <!-- <div class="xl:px-48 flex z-30 relative">
      <div
        class="space-y-5 w-full font-bold font-leagueSpartan text-lg text-white"
      >
        <div
          class="max-w-[100vw] lg:w-2/3 h-[150px] p-10 rounded-lg drop-shadow-lg relative overflow-hidden backdrop-blur-sm"
        >
          <div
            class="w-full h-full left-0 top-0 absolute bg-gradient-to-r from-slate-50/0 to-[#5e4c3d] z-10"
          ></div>
          <div
            class="w-full h-full left-0 top-0 absolute bg-[url(/src/assets/kapedoko/Kapedoko-Collage.jpg)] bg-cover bg-center z-0 blur-sm opacity-50"
          ></div>
          <div class="flex items-center justify-end gap-2 h-full relative z-10">
            <span>Screens</span>
            <ArrowRight />
          </div>
        </div>
        <div
          class="max-w-[100vw] lg:w-2/3 h-[150px] p-10 rounded-lg drop-shadow-lg relative overflow-hidden backdrop-blur-sm"
        >
          <div
            class="w-full h-full left-0 top-0 absolute bg-gradient-to-r from-slate-50/0 to-[#5e4c3d] z-10"
          ></div>
          <div
            class="w-full h-full left-0 top-0 absolute bg-[url(/src/assets/kapedoko/Kapedoko-BrandGuide.jpg)] bg-cover bg-center z-0 blur-sm opacity-50"
          ></div>
          <div class="flex items-center justify-end gap-2 h-full relative z-10">
            <span>Brand Guide</span>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "lucide-vue-next";
import { api as viewerApi } from "v-viewer";

// Create an alert that says it is not available yet
const alertNotAvailable = () => {
  alert("This feature is not available yet.");
};

const show = (collection: string) => {
  if (collection === "screens") {
    viewerApi({
      images: [
        "/kapedoko/Kapedoko-Collage.jpg",
        "/kapedoko/screens/1.png",
        "/kapedoko/screens/2.png",
        "/kapedoko/screens/3.png",
        "/kapedoko/screens/4.png",
        "/kapedoko/screens/5.png",
        "/kapedoko/screens/6.png",
        "/kapedoko/screens/7.png",
        "/kapedoko/screens/8.png",
        "/kapedoko/screens/9.png",
        "/kapedoko/screens/10.png",
      ],
    });
  } else {
    viewerApi({
      images: ["/src/assets/kapedoko/Kapedoko-BrandGuide.jpg"],
    });
  }
};
</script>

<style></style>
