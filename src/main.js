import { createApp } from 'vue'

// Import FontSource
import '@fontsource-variable/montserrat';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'


// Import Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

library.add(
    faMagnifyingGlass,

);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
