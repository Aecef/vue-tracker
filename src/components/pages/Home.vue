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
       // this.createBlock();
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
        <div class="row pr-0">
            <div class="col-md col-image">1</div>
            <div class="col-md col-image">
                <p class="grid-font">EXPERIENCE</p>    
            </div>
            <div class="col-md col-image">3</div>
        </div>
        <div class="row pr-0">
            <div class="col-md col-image">
                    <p class="grid-font">EDUCATION</p>    
            </div>
            <div class="col-md align-items-middle">
                <h2 class="font-weight-bold grid-title"> Alec Cleofe </h2>
                <p>The personal website of a <b>real</b> go getter.</p>
            </div>
            <div class="col-md col-image">
                <p class="grid-font">HOBBIES</p>    
            </div>
        </div>
        <div class="row pr-0">
            <div class="col-md col-image">7</div>
            <div class="col-md col-image">
                <p class="grid-font">GOALS</p>    
            </div>
            <div class="col-md col-image">9</div>
        </div>
    </div>
</template>

<style scoped>
 /* Tags */


 /* Classes */
.home {
    min-width: 776px;
}

.grid-font {
    font-size: 4rem;
    font-weight: bold;
    color: white;
    background-color: black;
    border: 1px;
    border-radius: .3%;
}
.grid-title {
    font-size: 5rem;
    font-weight: bold;
}

.col-image{
    background-image: url('@images/UoI.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
.col-md {
    border: 1px solid rgb(255, 255, 255);
    border-radius: 2%;
    height: 416px;
    display: grid;
    place-items: center;
    padding-left: 0%;
    padding-right: 0%;
}


 /* IDs */
 

</style>