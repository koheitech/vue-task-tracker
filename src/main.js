import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// entrypoint of vue
createApp(App)
    .use(router)
    .mount('#app')
