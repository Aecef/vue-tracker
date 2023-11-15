<script>
export default {
    name: 'Error',
    data() {
        return {
            errorMessage: null
        }
    },
    computed: {
        error() {
            return this.$route.params.error;
        }
    },
    mounted() {
        this.errorMessage = error();
    }
}
</script>

<template>
    <div class="error">
        <h1>{{ this.errorMessage }}</h1>
    </div>
</template>