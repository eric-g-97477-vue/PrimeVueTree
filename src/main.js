import Button from "primevue/button";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "./style.css";

const app = createApp(App);
app.use(PrimeVue, { theme: "none" });
app.mount("#app");
