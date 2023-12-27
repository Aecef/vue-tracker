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
      landing: { name: 'Home', path: '/' },
      navPages: [
        { name: 'About', path: '/about' },
        { name: 'Login', path: '/dogsfed' },
        { name: 'Decide', path: '/decide' },
        
      ],
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand" id="nav-main">
    <div class="container-fluid" style="padding-left: 0px;padding-right: 0px;">
      <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#nav_Header" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="nav_Header">
        <ul class="navbar-nav">
          <li class="nav-item" id="home-link">
            <router-link :to="landing.path" class="nav-link" style="color: white;">{{ landing.name }}</router-link>
          </li>
          <li class="nav-item" v-for="page in navPages" :key="page.name" >
            <router-link :to="page.path" class="nav-link" style="color: white;">{{ page.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style>



nav {
  z-index: 5;
  box-shadow: 0px -10px 35px #343159;
}

#app {
  margin-left: 0px;
  margin-right: 0px;
}
#app-body {
  width: 100%;
}
#nav_Header {
  height: 10vh;
  /* box-shadow: 0px 0px 35px #343159; */
  /* z-index: 1; */
  /* padding-top: 10px; */
  padding-left: 25px;

}

#nav-main {
  background-color: black;
  padding-top: 0%;
  width: inherit;

}

.nav-item {

  font-family: "Jomhuria", Helvetica;
  font-size: 3rem;
  font-weight: 400;
}

#home-link {
  font-size: 3rem;
}
</style>





