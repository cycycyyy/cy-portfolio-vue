<script setup>
  const { projects } = defineProps(["projects"]);
  </script>
  
  <template>
    <div class="flex gap-14 flex-wrap justify-center">
      <div
        v-for="(projects, project) in projects"
        :key="project"
        class="gap-8 py-5 max-w-[400px]"
      >
        <div
          class="lg:max-w-[450px] lg:max-h-[270px] mb-4 grayscale hover:grayscale-0 transition-all ease-in delay-150"
        >
          <img
            v-if="projects.project_image !== 'null'"
            :src="projects.project_image"
            class="h-full w-full object-cover rounded-lg"
            :alt="projects.project_image"
          />
          <img
            v-else
            src="https://fl-1.cdn.flockler.com/embed/no-image.svg"
            class="h-full w-full object-cover rounded-lg"
            :alt="projects.project_image"
          />
        </div>
        <div class="gap-3">
          <h2 class="text-primary font-leagueSpartan font-bold text-3xl">
            {{ projects.project_name }}
          </h2>
          <div class="flex gap-4 text-xs lg:text-sm">
            <p
              v-for="(project_techs, project_tech) in projects.project_techs"
              :key="project_tech"
            >
              {{ project_techs }}
            </p>
          </div>
          <h2
            class="font-semibold pt-3"
            v-if="projects.project_description !== 'null'"
          >
            {{ projects.project_description }}
          </h2>
          <!-- <div class="pt-3">
                  <button class="btn btn-sm btn-primary text-white">Check me out!</button>
              </div> -->
        </div>
      </div>
    </div>
  </template>
  
  <style scoped></style>
  