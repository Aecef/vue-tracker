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
  <br>
  <div id="nav">
    <div class="row">
      <!-- Create a router link for each item in navPages -->
      <div class="col" v-for="page in navPages" :key="page.name">
        <router-link :to="page.path" class="">{{ page.name }}</router-link>
      </div>
      
    </div>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
