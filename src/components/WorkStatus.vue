<script setup>

import { Mail, Linkedin, Facebook } from 'lucide-vue-next';

</script>

<template>
    <div class="text-white bg-primary rounded-lg p-14 font-manrope mt-40 mb-11 lg:flex justify-between">
        <div>
            <div class="flex flex-col gap-3 lg:max-w-xl">
                <span class="font-bold font-leagueSpartan text-[40px] leading-tight">Currently, I am not actively
                    seeking employment opportunities.</span>
                <span class="font-bold">However, if you have a project in mind where you believe my assistance could be
                    valuable.
                    Don't hesitate to reach out to me through these platforms.</span>
            </div>
            <div class="flex gap-5 text-sm mt-7">
                <a href="" class="flex gap-2 items-center">
                    <Mail />Email
                </a>
                <a href="https://www.linkedin.com/in/somerajoncyrel/" target="_blank" class="flex gap-2 items-center">
                    <Linkedin />LinkedIn
                </a>
                <a href="https://www.facebook.com/cyguraffikusu/" target="_blank" class="flex gap-2 items-center">
                    <Facebook />Facebook
                </a>
            </div>
        </div>
        <img src="../assets/ic_outline-work-off.png" width="250" class="lg:block hidden">
    </div>
</template>


<style scoped></style>