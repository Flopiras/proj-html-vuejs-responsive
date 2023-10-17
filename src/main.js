import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { 
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterestP
 } from '@fortawesome/free-brands-svg-icons';

import { 
    faLocationDot, 
    faEnvelope, 
    faMagnifyingGlass,
    faCartShopping,
    faQuoteLeft,
    faUser
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
    faQuoteLeft
    library.add(faClock, faLocationDot, faEnvelope, faMagnifyingGlass, faCartShopping, faFacebookF, faTwitter, faInstagram, faPinterestP, faQuoteLeft, faUser);

createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
