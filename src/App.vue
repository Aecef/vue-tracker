<script>
import LinePlot from '@components/LinePlot.vue';
import StaggeredGrid from '@components/StaggeredGrid.vue';
import { collapseHamburger } from '@util/Bootstrap-Util';


    //.authWithPassword(import.meta.env.VITE_ADMIN_EMAIL, import.meta.env.VITE_ADMIN_PASSWORD);

export default {
  name: 'App',
  components: {
    LinePlot,
    StaggeredGrid
  },
  data() {
    return {
      landing: {
        path: '/',
      },
      navPages: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Login', path: '/dogsfed' },
        { name: 'Decide', path: '/decide' }
      ],
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand bg-light">
    <div class="container-fluid">
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#nav_Header" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav_Header">
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





