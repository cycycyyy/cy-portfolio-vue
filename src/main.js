import { createApp } from 'vue'
import './index.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import FlagIcon from 'vue-flag-icon'
import { MotionPlugin } from '@vueuse/motion'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'


createApp(App).use(router).use(FlagIcon).use(MotionPlugin).use(VueViewer).mount('#app')
