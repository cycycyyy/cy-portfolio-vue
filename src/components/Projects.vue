<script setup>

import { ref, onMounted, onBeforeMount } from 'vue'
import { db } from '../firebase'
import { collection, onSnapshot } from "firebase/firestore"
import ProjectCube from './ProjectCube.vue';

const PROJECT_PORTFOLIO = ref([])



onMounted(() => {
    const skeletonElement = document.getElementById('skeleton');

    const fetchProjects = async () => {
        onSnapshot(collection(db, 'projects'), (querySnapshot) => {
            const projects = []
            querySnapshot.forEach((doc) => {
                const project = {
                    id: doc.id,
                    project_name: doc.data().project_name,
                    project_description: doc.data().project_description,
                    project_techs: doc.data().project_techs,
                    project_image: doc.data().project_image,
                    project_date: doc.data().project_date
                }
                projects.push(project)
            })
            PROJECT_PORTFOLIO.value = projects
            skeletonElement.style.display = 'none';
        })
    };

    setTimeout(fetchProjects, 3000);
})

</script>

<template>
    <div class="py-10 font-manrope">
        <div class="text-center">
            <h2 class="text-5xl text-primary font-extrabold font-leagueSpartan"> projects</h2>
            <p class="text-accent font-semibold">these are the projects I worked on</p>
        </div>
        <div id="skeleton">
            <!-- <div class="lg:flex gap-6 py-10">
                <div class="skeleton w-[500px] h-[270px]"></div>
                <div class="gap-3">
                    <div class="flex flex-col">
                        <div class="skeleton h-10 w-72"></div>
                        <div class="flex py-3 gap-4">
                            <div class="skeleton h-4 w-16"></div>
                            <div class="skeleton h-4 w-16"></div>
                            <div class="skeleton h-4 w-16"></div>
                        </div>
                        <div class="flex flex-col py-3 gap-2">
                            <div class="skeleton h-4 w-96"></div>
                            <div class="skeleton h-4 w-96"></div>
                        </div>
                        <div class="skeleton h-7 w-32"></div>
                    </div>
                </div>
            </div> -->
            
            <div class="skeleton w-full h-[270px] my-10"></div>
            <div class="skeleton w-full h-[270px] my-10"></div>
            <div class="skeleton w-full h-[270px] my-10"></div>
        </div>

        <ProjectCube :projects="PROJECT_PORTFOLIO" />
    </div>
</template>


<style scoped></style>