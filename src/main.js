import './style.css'

import { createApp } from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

import App from './App.vue'
import router from "./router";

import 'sweetalert2/dist/sweetalert2.min.css';
import Swal from "sweetalert2";
import store from "./store";

const Toast = Swal.mixin({
    timer: 2000,
    timerProgressBar: true,  })

const app = createApp(App);

app.provide("Swal", Toast);

app.use(store);
app.use(router);



app.mount("#app");