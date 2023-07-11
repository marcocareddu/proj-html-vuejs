import { createApp } from 'vue'

// Import FontSource
import '@fontsource-variable/montserrat';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'


// Import Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

library.add(
    faMagnifyingGlass,
    faChevronDown,
    faCircleUser
);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
