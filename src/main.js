import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';

import Dashboard from './components/views/Dashboard.vue';
import Project from './components/views/Project.vue';
import Contacts from './components/views/Contacts.vue';
import Error from './components/views/404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: Dashboard },
      { path: '/project', component: Project },
      { path: '/404', component: Error },
      { path: '/contacts', component: Contacts }
    ],
  });
  
  createApp(App).use(router).mount('#app');