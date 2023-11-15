<script>
import pb from '@components/Pocketbase';

export default {
    name: 'Account',
    data() {
        return {
            validAccount: false,
            accountInfo: {}
        }
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    mounted() {
        this.checkAccount();
    },
    methods: {
        async checkAccount() {
            const authData = await pb.collection('users').authRefresh();
            const account = this.id == authData.record.id ? true : false;
            this.accountInfo = authData.record;
            this.validAccount = account;
        }
    },
}
</script>

<template>
    <div class="Account">
        <h1>Account {{ this.accountInfo.username }}</h1>
    </div>
</template>