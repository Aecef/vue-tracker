<script>
import pb from '@components/Pocketbase';
import { isLoggedIn } from '@authorization/LoginOptions';

export default{
    name: 'AddWeight',
    props: {
        id: String,
        weight: Number,
        date: Date,
    },
    mounted() {
        if (!isLoggedIn()) {
            this.$router.push('/Login');
        }
    },
    methods: {
        async getCollection() {
            const userData = await pb.collection('weights').getFullList();
            userData.forEach(entry => {
                this.weights.push({weight: entry.weight, date: entry.date});
            });
            console.log(this.weights);
        },
    },
}

</script>

<template>
    <div class="AddWeight">
        <h1>Add Weight</h1>
    </div>
</template>