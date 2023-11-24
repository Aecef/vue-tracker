<script>
import pb from '@components/Pocketbase';
import { isLoggedIn } from '@authorization/LoginOptions';
import { ref } from 'vue';

export default{
    name: 'AddWeight',
    props: {
        userID: String,
    },
    data() {
        return {
            date: new Date(),
            weight: null,
            etc: null,
            submitted: ref(false),
        }
    },
    setup() {
        if (!isLoggedIn()) {
            this.$router.push('/Login');
        }
        console.log("AddWeight Setup");
    },
    methods: {
        async submitWeight(){
            console.log("Submitting Weight");
            await pb.collection('weights').create({
                weight: this.weight,
                date: this.date,
                etc: null,
                user: this.userID,
            }).catch(err => {
            console.log(err);
            });
            this.submitted = true;
            console.log("Weight Submitted");
        },
    },
}

</script>

<template>
    <div class="AddWeight">
        <!-- Add input fields to submit weight -->
        <input type="number" placeholder="Weight" v-model="weight">
        <input type="date" placeholder="Date" v-model="date">
        <button @click="submitWeight">Submit</button>    
        <h1 v-if="submitted">Weight Added</h1>
    </div>
</template>