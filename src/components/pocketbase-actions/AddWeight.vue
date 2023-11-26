<script>
import pb from '@components/Pocketbase';
import { isLoggedIn } from '@authorization/LoginOptions';
import { ref } from 'vue';

export default{
    name: 'AddWeight',
    props: {
        userID: String,
    },
    emits: ['submitWeight'],
    data() {
        return {
            date: new Date(),
            weight: null,
            etc: null,
            submitted: ref(false),
        }
    },
    setup(props, context) {
        if (!isLoggedIn()) {
            this.$router.push('/Login');
        }
        console.log("AddWeight Setup");

        const submitWeight = () => {
            context.emit('submitWeight');
        }
        return { submitWeight };
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
            this.submitWeight();
        },
    },
}

</script>

<template>
    <!-- Add input fields to submit weight -->
    <div class="AddWeight input-group mb-3">
        <input type="number" class="form-control" placeholder="Weight" v-model="weight">
    </div>
    <div class="AddWeight input-group mb-3">
        <input type="date" class="form-control" placeholder="Date" v-model="date">
    </div>
    <button class="btn btn-outline-primary col" @click="submitWeight">Submit</button>    
    
    <!-- <h1 v-if="submitted">Weight Added</h1> -->
</template>