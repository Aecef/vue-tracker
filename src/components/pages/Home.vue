<script>
import anime from 'animejs';

export default{
    name: 'Home',
    data() {
        return {
            homeElement: -1,
        }
    },
    mounted() {
        this.createBlock();
    },
    methods: {
        createBlock() {
            
            while (this.homeElement == -1) {
                this.homeElement = document.getElementById('home');
                console.log("Waiting for home element to load");
            }
            console.log(this.homeElement);
            const block = document.createElement('div')
            block.classList.add('block');
            block.style.width = '100px';
            block.style.height = '100px';
            // Turn the square into a circle
            block.style.borderRadius = '50%';
            block.style.backgroundColor = 'red';
            this.homeElement.appendChild(block);

            anime ({
                targets: block,
                background: '#b6b6b6',
                duration: 1000,
                easing: 'easeInOutQuad'
            })
        }
    }
}

</script>


<template>
    <div class="home" id="home">
        <h1>Home Brew</h1>
    </div>
</template>

<style scoped>

.block {
    /* Create a square block */
    width: 100px;
    height: 100px;
    background-color: red;
    
}

</style>