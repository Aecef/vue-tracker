<script>
import pb from '@components/Pocketbase';
import { timeout } from '@util/Timing';
import { isLoggedIn } from '@authorization/LoginOptions';
import { ref } from 'vue';
import AddWeight from '../pocketbase-actions/AddWeight.vue';

// Accessed by /Account/:id

export default {
    name: 'Account',
    data() {
        return {
            validAccount: ref(false),
            weights: [],
            accountInfo: {},
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
        loggedIn() {
            return isLoggedIn();
        }
    },
    mounted() {
        try{
            this.checkAccount();
            timeout(100);
            this.getWeights();
        } catch (err) {
            console.log("rerouting to error page");
            this.$router.push('/Error/' + err.replace(/\s+/g, ''));
        }
    },
    components: {
        AddWeight,
    },
    methods: {
        // Check if the account is valid and the page corresponds to the current auth user
        async checkAccount() {
            const authData = await pb.collection('users').authRefresh();
            const account = this.id == authData.record.id ? true : false;
            this.accountInfo = authData.record;
            this.validAccount = account;
        },
        // Get the weights from the database and store them in this.weights related to the current user
        async getWeights() {
            const userData = await pb.collection('weights').getFullList();
            userData.forEach(entry => {
                this.weights.push({weight: entry.weight, date: entry.date});
            });
            console.log(this.weights);
            }
        },
        async logout() {
            pb.authStore.clear();
            this.$router.push('/DogsFed');
        }
}
</script>

<template>
    <div class="Account">
        <h1>Account {{ this.accountInfo.username }}</h1>
        <br/>
        <h2 v-if="validAccount">Valid Account</h2>
        <!-- For Each element in this.weights create a div -->
        <div v-for="weight in weights" :key="weight.date">
            <p>{{ weight.weight }}</p>
            <p>{{ weight.date }}</p>
        </div>
        <!-- Create log out button -->
        <button v-if="loggedIn" @click="logout">Logout</button>

        <!-- Add a weight with random props -->
        <AddWeight :userID="this.id" :date="new Date()" :weight="350" :etc="null"/>
    </div>
</template>