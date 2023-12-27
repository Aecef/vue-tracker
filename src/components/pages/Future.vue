
<script>
export default  {
    name: 'Future',
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
    <div id="future">
        <div class="alec-wrapper">
            <img class="frame" alt="Frame" src="/src/assets/images/home/alecHomeFrame.png"  />
            <img class="alec-BW" alt="Alec BW" src="/src/assets/images/alec_bw.png" />
        </div>
        <img id="chatB" src="/src/assets/svg/home/Chat_Black.svg" alt="Landing Page Description Background">
        <img id="chatW" src="/src/assets/svg/home/Chat_White.svg" alt="Landing Page Description Background Border">
        <img id="bRight" src="/src/assets/svg/home/Black_Right.svg" alt="Right Portion of the black cutout">
        <img id="projects" src="/src/assets/svg/home/Projects.svg" alt="Projects Container">

    </div>
</template>

<style scoped>

#app {
    background: #FF2323;
    width: 100%;

}

#future {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #FF2323;

}

#chatB {
    z-index: 1;
}

#chatB, #chatW, #projects, #bRight  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}


.alec-BW {
    height: 410px;
    left: 17.25%;
    top: 22%;
    object-fit: cover;
    position: absolute;
    width: 389px;
    
    transition: .5s;
  }

.frame {
    height: 366px;
    left: 16%;
    top: 29%;
    position: absolute;
    width: 435px;

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




</style>