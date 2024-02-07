<script setup>

const { projects } = defineProps(['projects']);

</script>

<template>
    <div v-for="(projects, project) in projects" :key="project" class="lg:flex gap-6 py-10">
        <img src="https://placehold.co/720x400" class="rounded-lg" width="500">
        <div class="gap-3">
            <h2 class="text-primary font-leagueSpartan font-bold text-3xl">{{ projects.project_name }}</h2>
            <div class="flex gap-4 text-xs lg:text-sm font-semibold">
                <p v-for="(project_techs, project_tech) in projects.project_techs" :key="project_tech">{{ project_techs
                }}
                </p>
            </div>
            <h2 class="font-semibold py-3">{{ projects.project_description }}</h2>
            <button class="btn btn-sm">Check me out!</button>
        </div>
    </div>
</template>


<style scoped></style>