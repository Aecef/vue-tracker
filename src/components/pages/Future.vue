
<script>

import PageLoader from '@components/pages/transition/PageLoader.vue';

export default  {
    name: 'Future',
    components: {
        PageLoader,
    },
    data() {
        return {
            futureElement: -1,
            pathsSVG: {
                chatBlack: "/src/assets/svg/home/Chat_Black.svg",
            }
        }
    },
}
</script>

<template>
    <!-- <PageLoader /> -->
    <div id="future">
        
        <div class="alec-wrapper d-block" >
            <h1 id="alec-cleofe">Alec Cleofe</h1>
            <img id="nameChatBox" src="/src/assets/svg/home/Name_Chat.svg" alt="Chat Box With 'Alec Cleofe' placed inside'">
            <img class="frame" alt="Frame" src="/src/assets/images/home/alecHomeFrame.png"  />
            <img class="alec-BW" alt="Alec BW" src="/src/assets/images/alec_bw.png" />
        </div>

        <div id="chat-wrapper" class="d-block">
            <h2 id="chatTXT">A curious <b>Software Engineer</b> equipped with a certification in <b>project management</b>. Looking to be an asset to creative, driven teams.</h2>
            <img id="chatB" src="/src/assets/svg/home/Chat_Black.svg" alt="Landing Page Description Background">
            <img id="chatW" src="/src/assets/svg/home/Chat_White.svg" alt="Landing Page Description Background Border">
        </div>

        <div id="bottom-menu" class="d-block">
            <img id="bRight" src="/src/assets/svg/home/Back_Right.svg" alt="Right Portion of the black cutout">
            <img id="bLeft" src="/src/assets/svg/home/Back_Left.svg" alt="Left Portion of the black cutout">
            <img id="boltLeft" src="/src/assets/svg/home/Bolt_Left.svg" alt="Left Portion of the bolt background">

            <div id="project-wrapper">
                <a href="/#/projects">
                    <h1 class="brother-txt" id="project-text">Projects</h1>
                    <!-- <img class="sister-txt" id="projects" src="/src/assets/svg/home/Projects.svg" alt="Projects Txt Box Holder"> -->
                    <object class="sister-txt" id="projects" type="image/svg+xml" data="/src/assets/svg/home/Projects.svg"></object>
                </a>
            </div>


            <div id="experience-wrapper">
                <a href="/#/experience">
                    <h1 class="brother-txt" id="experience-text">Experience</h1>
                    <!-- <img class="sister-txt" id="experience" src="/src/assets/svg/home/Experience.svg" alt="Experience Txt Box Holder"> -->
                    <object class="sister-txt" id="experience" type="image/svg+xml" data="/src/assets/svg/home/Experience.svg"></object>
                </a>
            </div>


            <div id="education-wrapper">
                <a href="/#/education">
                    <h1 class="brother-txt" id="education-text">Education</h1>
                    <!-- <img class="sister-txt" id="education" src="/src/assets/svg/home/Education.svg" alt="Education Txt Box Holder"> -->
                    <object class="sister-txt" id="education" type="image/svg+xml" data="/src/assets/svg/home/Experience.svg"></object>
                </a>
            </div>

            <svg id="svg-rect">
                <rect id="bottom-rect" />
            </svg> 
        </div>


        
    </div>
</template>


<style scoped>

@media screen and (min-width: 700px) {
    #future {
        /* overflow-y: hidden; */
    }
}

@media screen and (max-width: 700px) {
    #future {
        overflow-y: scroll;
    }
}


.d-block {
    z-index: 5;
    border: 5px solid blue;
}

#bottolm-menu {
    position: relative !important;
}

#bottom-rect {
    position: absolute;
    width: inherit;
    height: 30px;
    top: 1000px;
    fill: black;
    stroke-width: 0;
}
#svg-rect {
    position: absolute;
    width: inherit;
    height: 30px;
    top: 926px;
    left: 0;
    z-index: 0;
}

#app {
    background: #FF2323;
    width: 100%;

}




#future {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #FF2323;
    overflow-x: hidden;

}


#alec-cleofe {
    font-family: "Karantina", Helvetica;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: .04em;
    position: absolute;
    z-index: 3;
    left: 720px;
    top: 113px;
    color: rgb(0, 0, 0);
    transform: rotate(-23deg);
}

#nameChatBox {
    position: relative;
    z-index: 2;
    left: -149px;
    top: -547px;
    scale: .18;
}

#chatTXT {
    font-family: "Karantina", Helvetica;
    font-size: 3rem;
    font-weight: 300;
    font-style: italic;
    letter-spacing: .02em;
    position: absolute;
    width: 40%;
    left: 860px;
    top: 380px;
    color: white;
    z-index: 4;
}


#projects, #education, #experience, #bRight, #bLeft, #boltLeft {
    position: absolute;
    z-index: 0;
}
.brother-txt:hover + .sister-txt {
    cursor: pointer;
    scale: 1.1;
    transition: .15s; 
}

.brother-txt:hover {
    cursor: pointer;
    scale: 1.1;
    transition: .15s; 
}


#project-text, #education-text, #experience-text {
    font-family: "Karantina", Helvetica;
    font-weight: 700;
    color: white;
    position: absolute;
    z-index: 2;
}


#project-text {
    font-size: 56px;
    left: 1350px;
    top: 675px;
    transform: rotate(-23deg);
    letter-spacing: .5em;
}

#experience-text{
    font-size: 1.8rem;
    left: 1426px;
    top: 767px;
    transform: rotate(-20deg);
    letter-spacing: .4em;
}

#education-text {
    font-size: 1.7rem;
    left: 1470px;
    top: 820px;
    transform: rotate(-18deg);
    letter-spacing: .3em;
}

#bRight {
    top: 466px;
    left: 1046px;
    height: 50%;   
    bottom: 0px;
}

#bLeft {
    top: 280px;
    left: -215px;
    height: 70%;   
    bottom: 0px;
    z-index:0;
}

#boltLeft {
    top: 250px;
    left: -313px;
    height: 75%;   
    bottom: 0px;
    z-index:0;
}

#projects {
    top: 448px;
    left: 1043px;
    width: 50%;
    bottom: 0px;
}

#experience {
    top: 482px;
    left: 1348px;
    width: 50%;
    bottom: 0px;
    transform: rotate(.5deg);
}

#education {
    top: 531px;
    left: 1421px;
    width: 50%;
    /* width: 175.894px; */
    bottom: 0px;
    transform: rotate(3deg);
}

#chatB, #chatW {
    position: absolute;
    width: 50%;
    height: 100vh;
}

#chatB {
    left: 710px;
    z-index: 1;
    top: 0px;
}

#chatW {
    left: 725px;
    z-index: 0;
    top: 0px;
}


.alec-BW {
    height: 410px;
    left: 17.25%;
    top: 22%;
    object-fit: cover;
    position: absolute;
    width: 389px;
    z-index: 1;
    transition: .5s;
  }

.frame {
    height: 366px;
    left: 16%;
    top: 29%;
    position: absolute;
    width: 435px;
    z-index: 1;
    transition: .5s;
  }

  .alec-wrapper:hover .alec-BW {
    scale: 1.1;
    transition: .5s;
  }
  .alec-wrapper:hover .frame {
    scale: .8;
    transition: .5s;
  }

  .alec-wrapper {
    overflow-x: hidden;
  }






</style>