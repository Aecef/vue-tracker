<script>

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
}

</script>

<template>
    <div class="AddWeight">
        <h1>Add Weight</h1>
    </div>
</template>