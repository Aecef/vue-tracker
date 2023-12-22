<script>
import anime from 'animejs';

export default{
    name: 'Home',
    data() {
        return {
            homeElement: -1,
        }
    },
}

</script>


<template>
    <div class="home" id="home">
        <div class="row">
            <div class="col-md col-image pl-"></div>
            <a href="/#/experience" class="col-md" id="col-exp">
                <p class="grid-font">EXPERIENCE</p>    
            </a>
            <div class="col-md col-image"></div>
        </div>
        <div class="row">
            <a href="/#/education" class="col-md" id="col-iowa">
                    <p class="grid-font">EDUCATION</p>    
            </a>
            <div class="col-md align-items-middle" id="col-title">
                <h2 class="font-weight-bold grid-title text-light"> Alec Cleofe </h2>
                <p class="text-light">Made by a <i>real</i> <b>go getter.</b> </p>
            </div>
            <a href="/#/hobbies" class="col-md" id="col-printer">
                <p class="grid-font">LEARNING</p>    
            </a>
        </div>
        <div class="row">
            <div class="col-md col-image"></div>
            <a href="/#/projects" class="col-md" id="col-p">
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

.col-image, #col-p, #col-exp, #col-printer, #col-iowa {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

#col-p { background-image: url('@images/hitbox.jpg'); }
#col-exp { background-image: url('@images/exp.jpg'); }
#col-printer { background-image: url('@images/printer.jpg'); }
#col-iowa { background-image: url('@images/iowa.jpg'); }

#col-title, .col-image {
    z-index: 1;
    backdrop-filter: blur(10px);
}

.col-md {
    height: 30vh;
    display: grid;
    place-items: center;
    padding-left: 0%;
    padding-right: 0%;
    transition: 0.5s;
}

#col-p:hover, #col-exp:hover, #col-printer:hover, #col-iowa:hover {
    transform: scale(1.1);
    z-index: 5;
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