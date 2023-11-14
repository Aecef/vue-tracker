<script>

import pb from '@components/Pocketbase';
import { ref } from 'vue';

export default {
    name: 'Login',
    data() {
        return {
            loggedIn: ref(false),
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const authData = await pb.collection('users')
                .authWithPassword(this.username, this.password)
                .catch((err) => { console.log(err); })
            if (pb.authStore.isValid){
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
            console.log(authData);
        },
        async logout() {
            pb.authStore.clear();
            this.loggedIn = false;
        }
    }
}


</script>

<template>
    <div class="login">
        <!--Create input fieds to submit login info -->
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Login</button>

        <!-- Create log out button -->
        <button v-if="loggedIn" @click="logout">Logout</button>

        <!-- Display login status -->
        <p v-if="loggedIn">Logged In</p>
        <p v-if="!loggedIn">Not Logged In</p>
    </div>
</template>