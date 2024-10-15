<script setup>

import Projects from '../components/Projects.vue'
import Technologies from '../components/Technologies.vue'
import WorkStatus from '../components/WorkStatus.vue'
import Header from '../components/Header.vue'

</script>

<template>
    <Header v-motion-fade-visible-once/>
    <div class="xl:px-48 px-10">
        <Projects  v-motion-roll-visible-once-left/>
        <Technologies />
        <WorkStatus />
    </div>
</template>


<style scoped></style>