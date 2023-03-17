import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAt, faEnvelope, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons'
// import { faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faAt, faEnvelope, faPhone, faAddressBook, faLinkedin, faTwitter, faGithub)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
