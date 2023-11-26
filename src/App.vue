<script>
import { onMounted } from 'vue';
import HelloWorld from '@components/HelloWorld.vue'
import TheWelcome from '@components/TheWelcome.vue'
import pb from '@components/PocketBase'
import LinePlot from '@components/LinePlot.vue';
import StaggeredGrid from '@components/StaggeredGrid.vue';


    //.authWithPassword(import.meta.env.VITE_ADMIN_EMAIL, import.meta.env.VITE_ADMIN_PASSWORD);

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheWelcome,
    LinePlot,
    StaggeredGrid
  },
  data() {
    return {
      landing: {
        path: '/home',
      },
      navPages: [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Dogs Fed', path: '/dogsfed' }
      ],
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link :to="landing.path"></router-link> 
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="page in navPages" :key="page.name">
            <router-link :to="page.path" class="nav-link">{{ page.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>



