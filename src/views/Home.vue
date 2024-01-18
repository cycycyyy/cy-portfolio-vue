<script setup>
import { Github } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';
import { Facebook } from 'lucide-vue-next';
</script>

<template>
    <div class="h-[90vh] lg:flex gap-12 xl:px-48 px-10 items-center">
        <img src="/Logo-Green.png" class="pb-10 lg:pb-0" width="400">
        <div class="flex flex-col gap-2 text-secondary">
            <p class="text-lg lg:text-xl font-bold font-manrope">Kumusta po, <span class="text-primary">I'm Jon Cyrel.</span></p>
            <h1 class="text-4xl lg:text-5xl font-extrabold font-leagueSpartan">A <span class="text-primary">Graphic
                    Sensei</span>, mastering the art of <span class="text-primary">product design,</span> and <span
                    class="text-primary">branding harmony.</span></h1>
            <div class="flex gap-4 text-primary pt-4">
                <a href="https://www.linkedin.com/in/somerajoncyrel/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://github.com/cycycyyy" target="_blank">
                    <Github />
                </a>
                <a href="https://www.facebook.com/cyguraffikusu/" target="_blank">
                    <Facebook />
                </a>
            </div>
        </div>
    </div>
</template>


<style scoped></style>