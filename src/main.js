import { createApp } from "vue";
import App from "./App.vue";
import VueAxios from 'vue-axios';
import Axios from 'axios';

const app = createApp(App);

app.use(VueAxios, Axios)

app.mount("#app");
