import { createApp } from 'vue'
import './index.css'
import App from '@/App.vue'
import router from '@/plugins/router'
import FlagIcon from 'vue-flag-icon'


createApp(App).use(router).use(FlagIcon).mount('#app')
