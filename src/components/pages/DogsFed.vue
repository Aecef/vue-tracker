<script>
import Login from '@components/authorization/Login.vue';
import {queuePostFlushCb, ref, watch} from 'vue';
import pb from '@components/Pocketbase';
import { timeout } from '@util/Timing';

export default {
    name: 'DogsFed',
    data() {
        return {
            auth: ref(false),
        }
    },
    methods: {
        async clickLogin() {
            await timeout(100);
            //wait for login to be processed
            this.auth = this.$refs.login.isLoggedIn();
                        
            //reroute to home page if logged in
            if (this.auth) {
                const authData = await pb.collection('users').authRefresh();
                //console.log(authData);
                this.$router.push('/Account/' + authData.record.id);
            }

        }
    },
    components: {
        Login,
    },
}

</script>

<template>
    <div class="dogsfed text-center">
        <h1>Login</h1>
        <Login @change="clickLogin" ref="login"/>
    </div>
</template>