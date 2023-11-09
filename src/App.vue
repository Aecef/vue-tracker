<script setup>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import PocketBase from 'pocketbase'

let pb = null

onMounted (async () => {
  pb = new PocketBase('https://pocketbase-chh.fly.dev');

  const authData = await pb.admins
    .authWithPassword('aleccleofe@gmail.com', '4rweqmdd4849!');
  const data = await pb.collection('users').getFullList().catch((err) => { console.log(err); });

  console.log(pb.authStore.isValid);
  console.log(data);
  pb.authStore.clear();
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
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
