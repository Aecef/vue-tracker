<script>
import Login from '@components/authorization/Login.vue';
import {queuePostFlushCb, ref, watch} from 'vue';
import pb from '@components/Pocketbase';

export default {
    name: 'DogsFed',
    data() {
        return {
            auth: ref(false)
        }
    },
    methods: {
        clickLogin() {
            console.log('clicked login');
            console.log(this.auth);
            this.auth = this.$refs.login.isLoggedIn();
            console.log(this.auth);
        }
    },
    components: {
        Login
    },
}

</script>

<template>
    <div class="dogsfed">
        <h1>Dogs Fed</h1>
        <Login @click="clickLogin" ref="login"/>
        <h2>

            {{ this.auth }}

        </h2>
    </div>
</template>