<script>

import pb from '@components/Pocketbase';

export default {
    name: 'Login',
    data() {
        return {
            loggedIn: false,
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
                this.$emit('change');
            } else {
                this.loggedIn = false;
            }
        },
        async logout() {
            pb.authStore.clear();
            this.loggedIn = false;
            this.$emit('change');
        },
        isLoggedIn() {
            return this.loggedIn;
        }
    },
    mounted() {
        this.$refs.username.focus();
    }
}


</script>

<template>
    <div class="login">
        <!--Create input fieds to submit login info -->
        <input type="text" placeholder="Username" v-model="username" ref="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Login</button>
        <!-- Emit change after the login button was clicked -->
        


        <!-- Create log out button -->
        <button v-if="loggedIn" @click="logout">Logout</button>
        

        <!-- Display login status -->
        <p v-if="loggedIn">Logged In</p>
        <p v-if="!loggedIn">Not Logged In</p>
    </div>
</template>