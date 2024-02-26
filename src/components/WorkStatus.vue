<script setup>

import { Mail, Linkedin, Facebook } from 'lucide-vue-next';

const WORK_STATUS = true;

const WORK_STATUS_OBJ_FALSE = [
    {
        status: false,
        headline: 'Currently, I am not actively seeking employment opportunities.',
        desc: "However, if you have a project in mind where you believe my assistance could be valuable. Don't hesitate to reach out to me through these platforms."
    }
]
const WORK_STATUS_OBJ_TRUE = [
    {
        status: true,
        headline: 'Currently, I am actively seeking employment opportunities!',
        desc: "If my background aligns with your job offer, please feel free to contact me using the provided information below. Thank you."
    }
]

</script>

<template>
    <div class="text-white bg-primary rounded-lg p-8 lg:p-14 font-manrope mt-40 mb-11 lg:flex justify-between gap-5 items-center">
        <div>
            <div class="flex flex-col gap-3 lg:max-w-xl">
                <span class="font-bold font-leagueSpartan text-xl lg:text-[40px] leading-tight">Currently, I am not actively
                    seeking employment opportunities.</span>
                <span class="font-bold text-sm lg:text-base">However, if you have a project in mind where you believe my assistance could be
                    valuable.
                    Don't hesitate to reach out to me through these platforms.</span>
            </div>
            <div class="flex gap-5 text-xs mt-7 flex-wrap">
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
        <img src="../assets/ic_outline-work-off.png" class="lg:block hidden">
    </div>
</template>


<style scoped></style>