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
axios.defaults.baseURL = import.meta.env.VITE_API_URL


app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.use(VueSweetalert2);

app.use(store);
app.use(router);



app.mount("#app");