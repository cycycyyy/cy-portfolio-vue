<script setup>

import { Mail, Linkedin, Facebook } from 'lucide-vue-next';

const WORK_STATUS = false;

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
    <div
        class="transition-all rounded-lg p-8 lg:p-14 font-manrope mt-40 mb-11 flex justify-between lg:gap-5 items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden" :class="!WORK_STATUS ? 'text-secondary bg-gray-100' : 'text-white bg-primary'">

        <div class="z-0">
            <img src="../assets/Logo-Dark.png" alt="" width="300" class="grayscale opacity-15 absolute bottom-4 scale-150">
        </div>
        <div class="z-10">
            <div class="flex flex-col gap-3 lg:max-w-xl" v-if="WORK_STATUS">
                <span class="font-bold font-leagueSpartan text-xl lg:text-[40px] leading-tight">{{ WORK_STATUS_OBJ_TRUE[0].headline }}</span>
                <span class="font-bold text-sm lg:text-base">{{ WORK_STATUS_OBJ_TRUE[0].desc }}</span>
            </div>
            <div class="flex flex-col gap-3 lg:max-w-xl" v-else>
                <span class="font-bold font-leagueSpartan text-xl lg:text-[40px] leading-tight">{{ WORK_STATUS_OBJ_FALSE[0].headline }}</span>
                <span class="font-bold text-sm lg:text-base">{{ WORK_STATUS_OBJ_FALSE[0].desc }}</span>
            </div>
            <div class="flex gap-5 text-xs mt-7 flex-wrap justify-end sm:justify-start">
                <a href="mailto:somerajoncyrel1@gmail.com" class="">
                    <div class="flex gap-2 items-center p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md backdrop-blur-sm">
                        <Mail />Email
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/somerajoncyrel/" target="_blank" class="">
                    <div class="flex gap-2 items-center p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md backdrop-blur-sm">
                        <Linkedin />LinkedIn
                    </div>
                </a>
                <a href="https://www.facebook.com/cyguraffikusu/" target="_blank" class="">
                    <div class="flex gap-2 items-center p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-md backdrop-blur-sm">
                        <Facebook />Facebook
                    </div>
                </a>
            </div>
        </div>
        <!-- <img src="../assets/ic_outline-work-off.png" class="lg:block hidden"> -->
    </div>
</template>


<style scoped></style>