import './style.css'

import { createApp } from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

import App from './App.vue'
import router from "./router";

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import store from "./store";


const app = createApp(App);



app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.use(store);
app.use(router);
app.use(VueSweetalert2);



app.mount("#app");