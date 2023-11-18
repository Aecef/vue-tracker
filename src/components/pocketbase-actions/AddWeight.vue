<script>
import pb from '@components/Pocketbase';
import { isLoggedIn } from '@authorization/LoginOptions';

export default{
    name: 'AddWeight',
    props: {
        userID: String,
        date: Date,
        weight: Number,
        etc: Object,
    },
    setup() {
        if (!isLoggedIn()) {
            this.$router.push('/Login');
        }
        console.log("AddWeight Setup");
    },
    mounted() {
        console.log("AddWeight Mounted");
        const data = {
            weight: this.weight,
            date: this.date,
            etc: null,
            user: this.userID,
        }
        this.submitWeight(data);
    },
    methods: {
        async submitWeight(data){
            console.log("Submitting Weight");
            console.log(data);
            await pb.collection('weights').create(data);
            console.log("Submitted");
        },
    },
}

</script>

<template>
    <div class="AddWeight">
        <h1>Weight Added</h1>
    </div>
</template>