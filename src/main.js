import { createApp } from 'vue'

// Import FontSource
import '@fontsource-variable/montserrat';

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue'


// Import Font Awsome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faChevronDown, faArrowRight, faEye, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser, faUser, faFileLines, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
    faMagnifyingGlass,
    faChevronDown,
    faCircleUser,
    faUser,
    faFileLines,
    faArrowRight,
    faCalendar,
    faEye,
    faSquareFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faDownload
);

createApp(App)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
