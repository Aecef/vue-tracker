

<template>
    <div id="education" class="top-level">
      <div class="div" style="width: 100%;">
        <div class="overlap">
          <div class="rectangle"></div> 
          <p class="text-wrapper">Looking to be an asset to any creative,</p>
          <div class="creative-team"> driven team.</div>
          <div class="rectangle-2"></div>
          <div class="rectangle-3"> </div>
          <img class="polygon" alt="Polygon" />
          <img class="polygon-2" alt="Polygon" />
          <img class="polygon-3" alt="Polygon" />
          <img class="polygon-4" alt="Polygon" />
          <div class="text-wrapper-2">Alec Cleofe</div>
          <p class="a-curious-software">
            <span class="span">A curious </span>
            <span class="text-wrapper-3">Software Engineer</span>
            <span class="span"> equipped </span>
          </p>
          <p class="with-a-certification">
            <span class="span"> with a certification in</span>
            <span class="text-wrapper-4">&nbsp;</span>
            <span class="text-wrapper-3">project management.</span>
          </p>
          <div class="alec-wrapper">
            <img class="frame" alt="Frame" src="/src/assets/images/home/alecHomeFrame.png"  />
            <img class="alec-BW" alt="Alec BW" src="/src/assets/images/alec_bw.png" />
          </div>
        </div>
        <img class="rectangle-4" alt="Rectangle" />
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "Education",
  };
  </script>
  
  <style>



  .overlap {
    top: -135px !important;
  }
  .top-level {
    background-color: #000005;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  
  .top-level .div {
    background-color: #000005;
    height: 1024px;
    overflow: hidden;
    position: relative;
    /* width: inherit; */
  }
  
  .top-level .overlap {
    height: 100%;
    left: -550px;
    position: absolute;
    top: -135px !important;
  }

  @media screen and (min-width: 1100px) {
    .top-level .overlap {
      width: 150%;
    }    
  }

  @media screen and (min-width: 600) and (max-width: 1100px) {
    .top-level .overlap {
      width: 200%;
    }    
  }

  @media screen and (max-width: 600px) {
    .top-level .overlap {
      width: 300%;
    }    
  }
  
  .top-level .nav-instance {
    left: 701px !important;
    position: absolute !important;
    top: 0 !important;
  }
  
  .top-level .design-component-instance-node {
    background-image: url(./nav-bar.svg) !important;
  }
  
  .top-level .rectangle {
    background-color: #ff2323;
    height: 100%;
    width: 100%;
    position: absolute;
  }
  
  .top-level .text-wrapper {
    color: #ffffff;
    font-family: "Karantina", Helvetica;
    font-size: 48px;
    font-weight: 300;
    left: 1004px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 618px;
    width: 556px;
  }
  
  .top-level .creative-team {
    color: #ffffff;
    font-family: "Karantina", Helvetica;
    font-size: 48px;
    font-weight: 300;
    left: 1072px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 668px;
    width: 556px;
  }
  
  .top-level .rectangle-2 {
    background-color: #0a0a0a;
    border: 9px solid;
    border-color: #000000;
    height: 643px;
    left: 1509px;
    position: absolute;
    top: 741px;
    transform: rotate(-25.48deg);
    width: 1455px;
  }
  
  .top-level .rectangle-3 {
    background-color: #0a0a0a;
    border: 9px solid;
    border-color: #000000;
    height: 643px;
    left: 56px;
    position: absolute;
    top: 588px;
    transform: rotate(33.93deg);
    width: 1455px;
  }
  
  .top-level .polygon {
    height: 917px;
    left: 701px;
    position: absolute;
    top: 32px;
    width: 662px;
  }
  
  .top-level .polygon-2 {
    height: 831px;
    left: 701px;
    position: absolute;
    top: 193px;
    width: 576px;
  }
  
  .top-level .polygon-3 {
    height: 918px;
    left: 701px;
    position: absolute;
    top: 100px;
    width: 628px;
  }
  
  .top-level .polygon-4 {
    height: 455px;
    left: 1723px;
    position: absolute;
    top: 569px;
    width: 418px;
  }
  
  .top-level .frame {
    height: 366px;
    left: 1494px;
    position: absolute;
    top: 383px;
    width: 435px;

    transition: .5s;
  }
  
  .top-level .text-wrapper-2 {
    color: #ffffff;
    font-family: "Karantina", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    width: fit-content;
    top: 261px;
  }
  /* Change text-wrapper-2 to a smaller font if the screen is bigger than 400px */
  @media screen and (min-width: 400px) {
    .text-wrapper-2 {
      left: 25%;
      /* left: 846px;
      top: 261px; */
      font-size: 193PX;
      transition: .25s;
    }
  }

    @media screen and (max-width: 400px) {
    .text-wrapper-2 {
      left: 50%;
      font-size: 5rem;
      /* left: 600px;
      top: 261px; */
      transition: .25s;
    }
  }
  
  .top-level .a-curious-software {
    color: #ffffff;
    font-family: "Karantina", Helvetica;
    font-size: 48px;
    font-weight: 400;
    left: 865px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 511px;
    width: 556px;
  }
  
  .top-level .span {
    font-weight: 300;
  }
  
  .top-level .text-wrapper-3 {
    font-family: "Karantina", Helvetica;
    font-weight: 700;
  }
  
  .top-level .with-a-certification {
    color: #ffffff;
    font-family: "Karantina", Helvetica;
    font-size: 48px;
    font-weight: 400;
    left: 925px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 565px;
    width: 617px;
  }
  
  .top-level .text-wrapper-4 {
    font-family: "Karantina", Helvetica;
  }
  
  .top-level .alec-BW {
    height: 410px;
    left: 1518px;
    object-fit: cover;
    position: absolute;
    top: 318px;
    width: 389px;
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
  
  .top-level .rectangle-4 {
    height: 410px;
    left: -1696px;
    position: absolute;
    top: 830px;
    width: 389px;
  }
  
  </style>
  