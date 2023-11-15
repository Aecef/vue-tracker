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
            //wait for login to be processed
            setTimeout(() => {
                this.auth = this.$refs.login.isLoggedIn();
                console.log(this.auth);
                
                //reroute to home page if logged in
                if (this.auth) {
                    console.log('logged in');
                    this.$router.push('/Home');
                }
            }, 100);
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
        <Login @change="clickLogin" ref="login"/>
        <h2>

            {{ this.auth }}

        </h2>
    </div>
</template>