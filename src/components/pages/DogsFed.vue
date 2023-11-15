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
        timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async clickLogin() {
            await this.timeout(100);
            //wait for login to be processed
            this.auth = this.$refs.login.isLoggedIn();
            console.log(this.auth);
            
            //reroute to home page if logged in
            if (this.auth) {
                const authData = await pb.collection('users').authRefresh();
                console.log(authData);
                this.$router.push('/Account/' + authData.record.id);
            }

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