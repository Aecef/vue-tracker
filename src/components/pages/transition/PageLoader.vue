<script>
import { ref } from 'vue';

export default {
    name: "PageLoader",
    data() {
        return {
            isLoaded: ref(false),
        }
    },
    mounted() {
        document.onreadystatechange = () => {
            if (document.readyState === 'complete') {
                this.isLoaded = true;
            }
        }
    }
}
</script>


<template>
    <div class="page-loader" v-if="!isLoaded">
        <rect class="cube"></rect>
    </div>
</template>



<style scoped>

.page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0 ;
    width: 100vw;
    height: 100vh;
    background-color: #333;
    z-index: 999;
}

/* Make a block that rotates in an animation */

.cube {
    width: 80px;
    height: 80px;
    margin-right: 10px ;
    background-color: red;

    animation: rotate 1s infinite linear;
}


@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(359deg);
    }
}

</style>