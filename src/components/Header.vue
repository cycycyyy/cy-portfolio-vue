<script setup>
import { Github } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';
import { Facebook } from 'lucide-vue-next';
import { ArrowDown } from 'lucide-vue-next';
</script>

<template>
    <div class="h-[90vh] flex flex-col justify-around items-center relative overflow-hidden">
        <div class="z-0 opacity-45">
            <img src="../assets/Green-Circle.svg" width="120" class="absolute -left-8">
            <img src="../assets/Green-Circle.svg" width="300" class="absolute -right-44">
            <img src="../assets/Green-Circle.svg" width="90" class="absolute">
            <img src="../assets/Green-Circle.svg" width="150" class="absolute bottom-24 left-28">
        </div>
        <div class="lg:flex gap-12 xl:px-48 px-5 py-8 items-center z-10">
            <img src="/Logo-Green.png" class="pb-10 lg:pb-0 drop-shadow-xl" width="400">
            <div class="flex flex-col gap-2 text-secondary">
                <p class="text-lg lg:text-xl font-bold font-manrope">Kumusta po, <span class="text-primary">I'm Jon
                        Cyrel.</span></p>
                <h1 class="text-4xl lg:text-5xl font-extrabold font-leagueSpartan">A <span class="text-primary drop-shadow-lg">Graphic
                        Sensei,</span> mastering the art of <span class="text-primary drop-shadow-lg">product design,</span> and <span
                        class="text-primary drop-shadow-lg">branding harmony.</span></h1>
                <div class="flex gap-4 text-primary pt-4 items-center">
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
        <div class="flex flex-col items-center text-primary font-bold font-manrope">
            <p class="animate-bounce">Let's start?</p>
            <ArrowDown />
        </div>
    </div>
</template>