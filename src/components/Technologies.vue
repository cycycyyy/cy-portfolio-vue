<script setup>

const DEVELOPMENT_LOGOS = ['Laravel', 'Vue', 'PHP', 'JS', 'HTML', 'CSS', 'Database', 'Github']
const DESIGNING_LOGOS = ['PS', 'AI', 'Premiere', 'Figma', 'Canva']

const LINK_LOGO = (LOGO) => {
    const link = '/tech_logos/';
    const asset_link = link + LOGO + '_Logo.png';

    return asset_link;
}

</script>

<template>
    <div class="py-10 font-manrope">
        <div class="text-center mb-10">
            <h2 class="text-5xl text-primary font-extrabold font-leagueSpartan"> technologies</h2>
            <p class="text-accent font-semibold">These are the tech I learned <span class="text-primary">(I still learn
                    some)</span> and currently use</p>
        </div>
    </div>
    <div class="lg:flex gap-14 justify-center text-center font-manrope font-bold">
        <div class="lg:max-w-lg mb-20 lg:mb-0">
            <span>development</span>
            <div class="my-3 flex gap-10 items-center flex-wrap justify-center opacity-90">
                <div v-for="(logo, index) in DEVELOPMENT_LOGOS" :key="index">
                    <div class="w-[60px] h-[60px]">
                        <img :src="LINK_LOGO(logo)" :alt="logo" class="w-full h-full object-scale-down brightness-150 hover:brightness-200 transition-all ease-linear">
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:max-w-lg">
            <span>designing</span>
            <div class="my-3 flex gap-10 items-center flex-wrap justify-center opacity-90">
                <div v-for="(logo, index) in DESIGNING_LOGOS" :key="index">
                    <div class="w-[60px] h-[60px]">
                        <img :src="LINK_LOGO(logo)" :alt="logo" class="w-full h-full object-scale-down brightness-150 hover:brightness-200 transition-all ease-linear">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>