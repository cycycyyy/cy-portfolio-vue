import { createApp } from 'vue'
import './index.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import FlagIcon from 'vue-flag-icon'
import { MotionPlugin } from '@vueuse/motion'


createApp(App).use(router).use(FlagIcon).use(MotionPlugin).mount('#app')
