<script setup lang="ts">
import { ExternalLink } from "lucide-vue-next";

type Project = {
  id: string;
  project_name: string;
  project_description: string;
  project_techs: string[];
  project_image: string;
  project_date: string;
  project_link: string;
};

// Define the props with the correct types
const props = defineProps<{
  projects: Project[]; // Using the Project type here
  showAll: boolean;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div
      v-for="(project, index) in props.showAll ? projects : projects.slice(0, 3)"
      :key="index"
      class="lg:flex gap-8 py-5 max-w-[1000px]"
    >
      <div
        class="lg:max-w-[450px] lg:max-h-[270px] mb-4 grayscale hover:grayscale-0 transition-all ease-in delay-150"
      >
        <img
          v-if="project.project_image !== 'null'"
          :src="project.project_image"
          class="h-full w-full object-cover rounded-lg"
          :alt="project.project_image"
        />
        <img
          v-else
          src="https://fl-1.cdn.flockler.com/embed/no-image.svg"
          class="h-full w-full object-cover rounded-lg"
          :alt="project.project_image"
        />
      </div>
      <div class="gap-3">
        <h2 class="text-primary font-leagueSpartan font-bold text-3xl">
          {{ project.project_name }}
        </h2>
        <div class="flex gap-4 text-xs lg:text-sm">
          <p
            v-for="(project_tech, index) in project.project_techs"
            :key="index"
          >
            {{ project_tech }}
          </p>
        </div>
        <h2
          class="font-semibold pt-3 lg:max-w-[40vw]"
          v-if="project.project_description !== 'null'"
        >
          <span>{{ project.project_description }}</span>
        </h2>
        <div class="pt-3">
          <a
            :href="project.project_link"
            target="_blank"
            v-if="project.project_link"
            ><button
              class="btn btn-sm btn-primary text-white flex items-center gap-1"
            >
              <ExternalLink class="size-4" /> Check me out!
            </button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
