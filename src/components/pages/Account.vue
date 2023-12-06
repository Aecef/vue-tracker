<script>
import pb from '@components/Pocketbase';
import { timeout } from '@util/Timing';
import { isLoggedIn } from '@authorization/LoginOptions';
import { ref, getCurrentInstance } from 'vue';
import AddWeight from '../pocketbase-actions/AddWeight.vue';

// Accessed by /Account/:id

export default {
    name: 'Account',
    data() {
        return {
            validAccount: ref(false),
            weights: ref([]),
            accountInfo: {},
            authUser: {},
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
    setup() {
        if (!isLoggedIn()) {
            this.$router.push('/DogsFed');
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
            this.authUser = authData.record;
            const account = this.id == authData.record.id ? true : false;
            this.accountInfo = authData.record;
            this.validAccount = account;
            console.log("Account Checked");
        },
        // Get the weights from the database and store them in this.weights related to the current user
        async getWeights() {
            this.weights = [];
            const userData = await pb.collection('weights').getFullList();
            userData.forEach(entry => {
                this.weights.push({weight: entry.weight, date: new Date(entry.date).toDateString()});
            });

            // reorganize the weights by date
            this.weights.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
            
            console.log("Weights Retrieved");
        },
        async logout() {
            pb.authStore.clear();
            this.$router.push('/DogsFed');
        },
    }
}
</script>

<template>
    <div class="Account text-center">
        <h1>Account {{ this.accountInfo.username }}</h1>
        <br/>
        <h2 v-if="validAccount">Valid Account</h2>
        <!-- For Each element in this.weights create a div -->
        <div class="row" v-for="weight in weights" :key="weight.date">
            <div class="col">{{ weight.date }}</div>
            <div class="col">{{ weight.weight }}</div>
        </div>

        <!-- Create add weight component -->
        <div class="flex-nowrap m-2">
            <AddWeight :userID="this.id" @submitWeight="getWeights"/>
        </div>
        
        <!-- Create log out button -->
        <button class="btn btn-outline-primary " @click="logout"  v-if="loggedIn">Logout</button>
        
    </div>
</template>