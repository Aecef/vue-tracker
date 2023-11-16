<script>
export default {
    name: 'Error',
    data() {
        return {
            errorMessage: ""
        }
    },
    computed: {
        error() {
            return this.$route.params.error;
        }
    },
    mounted() {
        this.errorMessage = this.error;
    }
}
</script>

<template>
    <div class="error">
        <h1>{{ this.errorMessage }}</h1>
    </div>
</template>