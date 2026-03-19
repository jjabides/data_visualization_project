import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify styles
import 'vuetify/styles' // Global Vuetify CSS
import { createVuetify } from 'vuetify'

// Vuetify components & directives
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Create vuetify instance
const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(vuetify).mount('#app')
