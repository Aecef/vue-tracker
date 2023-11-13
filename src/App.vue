<script setup>
import { onMounted } from 'vue';
import HelloWorld from '@components/HelloWorld.vue'
import TheWelcome from '@components/TheWelcome.vue'
import pb from '@components/PocketBase'
import LinePlot from '@components/LinePlot.vue';


onMounted (async () => {

  const authData = await pb.admins
    .authWithPassword(import.meta.env.VITE_ADMIN_EMAIL, import.meta.env.VITE_ADMIN_PASSWORD);

  const data = await pb.collection('users').getFullList().catch((err) => { console.log(err); });

  //console.log(pb.authStore.isValid);
  //console.log(data);
  
  pb.authStore.clear();
});
</script>

<template>
  <header>
  </header>

  <main>
    <LinePlot />  
  </main>
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
