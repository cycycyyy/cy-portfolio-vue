<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from "vue";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import ProjectCube from "../components/ProjectCube.vue";

interface Project {
  id: string;
  project_name: string;
  project_description: string;
  project_techs: string[];
  project_image: string;
  project_date: string;
  project_link: string;
}

const isLoading = ref(false);
const PROJECT_PORTFOLIO = ref<Project[]>([]);

const fetchProjects = async (): Promise<void> => {
  const snapshot = await new Promise<Project[]>((resolve, reject) => {
    onSnapshot(
      collection(db, "projects"),
      (querySnapshot: QuerySnapshot<DocumentData>) => {
        const projects: Project[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          project_name: doc.data().project_name,
          project_description: doc.data().project_description,
          project_techs: doc.data().project_techs,
          project_image: doc.data().project_image,
          project_date: doc.data().project_date,
          project_link: doc.data().project_link,
        }));

        // Sort projects by project_date in descending order
        projects.sort((a, b) => {
          return b.project_date.toDate().getTime() - a.project_date.toDate().getTime();
        });

        resolve(projects);
      },
      reject
    );
  });

  PROJECT_PORTFOLIO.value = snapshot;
};


onMounted(async () => {
  console.log("Data fetching");
  isLoading.value = true;
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  await fetchProjects();
  console.log("Data fetched");
  isLoading.value = false;
});
</script>

<template>
  <div class="flex flex-col items-center font-manrope">
    <div class="text-center mb-10">
      <h2
        class="text-5xl text-primary font-extrabold font-leagueSpartan drop-shadow-lg"
      >
        projects
      </h2>
      <p class="text-accent font-semibold">
        these are the projects I worked on
      </p>
    </div>

    <div id="skeleton" class="opacity-30 xl:px-48 px-5" v-if="isLoading">
      <div class="flex flex-col gap-14 flex-wrap justify-center">
        <div
          v-for="_ in 4"
          class="skeleton gap-8 py-5 w-[1000px] h-[250px]"
        ></div>
      </div>
    </div>

    <div class="xl:px-48 px-5" v-if="!isLoading">
      <ProjectCube :projects="PROJECT_PORTFOLIO" :showAll="true"/>
    </div>
  </div>
</template>

<style scoped></style>
