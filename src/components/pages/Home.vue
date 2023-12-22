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
        <div class="row p-lr">
            <div class="col-md col-image pl-"></div>
            <a href="/#/experience" class="col-md col-exp col-choice">
                <p class="grid-font">EXPERIENCE</p>    
            </a>
            <div class="col-md col-image"></div>
        </div>
        <div class="row p-lr">
            <a href="/#/education" class="col-md col-iowa col-choice">
                    <p class="grid-font">EDUCATION</p>    
            </a>
            <div class="col-md align-items-middle" id="col-title">
                <h2 class="font-weight-bold grid-title text-light"> Alec Cleofe </h2>
                <p class="text-light">Made by a <i>real</i> <b>go getter.</b> </p>
            </div>
            <a href="/#/hobbies" class="col-md col-printer col-choice">
                <p class="grid-font">LEARNING</p>    
            </a>
        </div>
        <div class="row p-lr">
            <div class="col-md col-image"></div>
            <a href="/#/projects" class="col-md col-choice col-p">
                <p class="grid-font">PROJECTS</p>    
            </a>
            <div class="col-md col-image"></div>
        </div>
    </div>
</template>

<style scoped>
 /* Tags */
 p {
    font-size: 1.5rem;
 }
 /* Classes */

.grid-font {
    font-size: 4rem;
    font-weight: bold;
    color: white;
    background-color: black;
    border: 1px;
    border-radius: 2%;
    box-shadow: ghostwhite 0px 0px 10px 0px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

}
.grid-title {
    font-size: 5rem;
    font-weight: bold;
}

.grid-title:hover {
    color: #ff0000;
    transition: 0.5s;
}

.col-image{
    background-image: url('@images/UoI.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
}

.col-p{
    background-image: url('@images/hitbox.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
}
.col-exp{
    background-image: url('@images/exp.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
}
.col-printer{
    background-image: url('@images/printer.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
}
.col-iowa {
    background-image: url('@images/iowa.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
}

#col-title {
    border: 10px solid rgb(209, 209, 209) !important;
    z-index: 1;
    border-radius: 3%;
    background-color: rgba(240, 248, 255, 0.329);
    backdrop-filter: blur(10px);
}


.col-md {
    border: 1px solid rgb(37, 37, 37);
    border-radius: 2%;
    height: 280px;
    display: grid;
    place-items: center;
    padding-left: 0%;
    padding-right: 0%;
    transition: 0.5s;
    margin: 5px 5px 5px 5px;
}
.col-choice:hover .col-image {
    background-size: cover;

    height: 500px;
    transition: .5s;
}

.p-lr {
    padding-right: 5%;
    padding-left: 5%;
}

 /* IDs */

 #home {
    z-index: 0;
    background-image: url('@images/desk.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
 }
 

</style>