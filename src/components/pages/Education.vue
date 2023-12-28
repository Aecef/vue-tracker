
<script>

import PageLoader from '@components/pages/transition/PageLoader.vue';

export default  {
    name: 'Education',
    components: {
        PageLoader,
    },
    data() {
        return {
            futureElement: -1,
            }
        }
    }
</script>

<template>
    <!-- <PageLoader /> -->
    <div id="future">
      <div class="row ">
        <div class="col-sm-2"></div>
        <div id="chat-frame" class="col-sm-auto">
            <img class="frame" alt="Frame" src="/src/assets/images/home/alecHomeFrame.png"  />
            <img class="alec-BW" alt="Alec BW" src="/src/assets/images/alec_bw.png" />
        </div>

        <div class="alec-wrapper col-sm-auto" >
            <!-- <h1 id="alec-cleofe">Alec Cleofe</h1> -->
            <!-- <img id="nameChatBox" src="/src/assets/svg/home/Name_Chat.svg" alt="Chat Box With 'Alec Cleofe' placed inside'"> -->
        </div>

        <div id="chat-wrapper" class="col-sm-auto">
            <h2 id="chatTXT">A curious <b>Software Engineer</b> equipped with a certification in <b>project management</b>. Looking to be an asset to creative, driven teams.</h2>
            <img id="chatB" src="/src/assets/svg/home/Chat_Black.svg" alt="Landing Page Description Background">
            <img id="chatW" src="/src/assets/svg/home/Chat_White.svg" alt="Landing Page Description Background Border">
        </div>
        <div class="col-sm-2"></div>

      </div>


        <div id="bottom-menu" class="row">
          <div class="col">
            <img id="bLeft"  src="/src/assets/svg/home/Back_Left.svg" alt="Left Portion of the black cutout">
            <img id="boltLeft" src="/src/assets/svg/home/Bolt_Left.svg" alt="Left Portion of the bolt background">
          </div>
          <div class="col">
            <img id="bRight" src="/src/assets/svg/home/Back_Right.svg" alt="Right Portion of the black cutout">
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

          </div>


            <svg id="svg-rect">
                <rect id="bottom-rect" />
            </svg> 
        </div>


        
    </div>
</template>


<style scoped>

@media screen and (max-width: 1000px) {

  #chatB, #chatW {
   visibility: hidden;
   transition: .25s;
  }  
}

@media screen and (min-width: 1000px) {
  .frame {
    top: 10%;
    left: 4%;
    transition: .25s;
  }

  .alec-BW {
    top: -3.5%;
    left: 7.25%;
    transition: .25s;
  }

  #chatTXT {
    padding-right: 6%;
    padding-top: 27.5%;
    transition: .25s;
  }
  
}


.d-block, .d-inline {
    z-index: 5;
    border: 5px solid blue;
}


#bottom-rect {
    position: relative;
    width: inherit;
    height: 30px;
    top: 1000px;
    fill: black;
    stroke-width: 0;
}
#svg-rect {
    position: relative;
    width: inherit;
    height: 30px;
    top: 926px;
    left: 0;
    z-index: 0;
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
    color: rgb(0, 0, 0);
}

#nameChatBox {
    position: relative;
    z-index: 2;

}

#chatTXT {
    font-family: "Karantina", Helvetica;
    font-size: 2.8rem;
    font-weight: 300;
    font-style: italic;
    letter-spacing: .02em;
    position: absolute;

    display: grid;
    place-items: center;

    padding-left: 11%;
    padding-top: 6.5%;

    color: white;
    z-index: 4;
}


#projects, #education, #experience, #boltLeft {
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
  top: -32.5px;
  left: 20px;
  scale: .95;
  width: 110%;
}

#bLeft {
  top: -80px;
  left: 5%;
  scale: 1.25;
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
    left: 42%;
    z-index: 1;
}

#chatW {
    left: 42.5%;
    z-index: 0;
}
#chatB, #chatW {
  top: -20%;
}


.alec-BW {
    height: 410px;
    left: 21.25%;
    top: 4.5%;
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
    position: relative;
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