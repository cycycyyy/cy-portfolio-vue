<script setup>

import { ref } from 'vue'

const projects = ref([
    {
        project_name: 'BabyMo Website System',
        project_tools: [
            'PHP',
            'Bootstrap',
            'Laravel Blade',
            'Javascript',
            'CSS'
        ],
        project_description: "As the frontend developer and designer, it is my responsibility to assure that the user's experience will be hassle-free."
    },
    {
        project_name: 'BabyMo Website System',
        project_tools: [
            'PHP',
            'Bootstrap',
            'Laravel Blade',
            'Javascript',
            'CSS'
        ],
        project_description: "As the frontend developer and designer, it is my responsibility to assure that the user's experience will be hassle-free."
    },
    {
        project_name: 'BabyMo Website System',
        project_tools: [
            'PHP',
            'Bootstrap',
            'Laravel Blade',
            'Javascript',
            'CSS'
        ],
        project_description: "As the frontend developer and designer, it is my responsibility to assure that the user's experience will be hassle-free."
    }
])

</script>

<template>
    <div class="py-10 font-manrope">
        <div class="text-center">
            <h2 class="text-5xl text-primary font-extrabold font-leagueSpartan"> projects</h2>
            <p class="text-accent font-semibold">these are the projects I worked on</p>
        </div>

        <div class="columns-lg gap-12">
            <div v-for="(projects, project) in projects" :key="projectIndex" class="py-10">
                <img src="https://placehold.co/720x400" class="rounded-lg">
                <h2 class="text-primary font-leagueSpartan font-bold text-3xl pt-3">{{ projects.project_name }}</h2>
                <div class="flex gap-4 text-xs lg:text-sm font-semibold">
                    <p v-for="(project_tools, project_tool) in projects.project_tools" :key="toolIndex">{{ project_tools }}</p>
                </div>
                <h2 class="font-semibold pt-2">{{ projects.project_description }}</h2>
            </div>
        </div>
    </div>
</template>


<style scoped></style>