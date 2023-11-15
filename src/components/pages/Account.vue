<script>
import pb from '@components/Pocketbase';
import { timeout } from '@util/Timing';

export default {
    name: 'Account',
    data() {
        return {
            validAccount: false,
            weights: [],
            accountInfo: {}
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    mounted() {
        try{
            this.checkAccount();
            timeout(100);
            this.getWeights();
        } catch (err) {
            console.log("rerouting to error page");
            this.$router.push('/Error/' + err);
        }
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
    </div>
</template>