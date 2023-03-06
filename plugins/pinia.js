import { createPinia } from 'pinia'

// https://pinia.vuejs.org/introduction.html
export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia();

  nuxtApp.vueApp.use(pinia);
});
