<template>
  <div class="home">
    <div class="right">
      <img src="../assets/kinesio-home-paysage.jpg" alt="Photo de Julien en séance de kinésiologie avec un client" class="ju_pic ju_pic-paysage">
      <img src="../assets/kinesio-home-portrait.jpg" alt="Photo de Julien en séance de kinésiologie avec un client" class="ju_pic ju_pic-portrait">
    </div>
    <div class="left">
      <img src="../assets/basket-home-portrait.jpg" alt="Photo de Julien jouant au basket" class="ju_foot ju_foot-portrait">
      <img src="../assets/basket-home-paysage.jpg" alt="Photo de Julien jouant au basket" class="ju_foot ju_foot-paysage">
    </div>
    <font-awesome-icon icon="fa-solid fa-angles-down" class="icon-arrow"/>
    <div class="title">
      <router-link to="/#prestations-sport">
        <div class="sport">
          <h3>SPORT &<br>COHERENCE CARDIAQUE</h3>
          <div class="infos">+ d'infos</div>
        </div>
      </router-link>
      <router-link to="/#prestations-bien-etre">
        <div class="kinesiologie">
          <h3>KINESIOLOGIE &<br>REFLEXOLOGIE</h3>
          <div class="infos">+ d'infos</div>
        </div>
      </router-link>
    </div>
    <h4>Qui je suis</h4>
    <div class="qui-je-suis">
      <img src="../assets/Photo-profil-Julien.jpg" alt="Photo portrait de Julien" class="ju-profil-pic">
      <img src="../assets/Photo-profil-Julien-large.jpg" alt="Photo portrait de Julien" class="ju-profil-pic-large">
      <p>Micro entrepreneur dans le domaine du <i class="orangeAccent">sport</i> et des <i class="orangeAccent">médecines douces:</i> Kinésiologie, Réflexologie et Educateur sportif de formation, j'accompagne les personnes dans la pratique d'une activité régulière pour favoriser l'équilibre du corps physique et mental.</p>
    </div>
    <div class="button"><router-link to="/mon-parcours">Découvrez mon parcours</router-link></div>
    <div class="sport-container">
      <h4 id="prestations-sport">Mes prestations Sport</h4>
      <h5 v-if="windowWidth <= 1100">Sport</h5>
      <div class="sport-container-box">
      <div class="box" @click="individuelBoxSwitch">
        <div class="the-title">Coaching individuel<i :class="[ individuelBox ? 'leftArrow' : 'down', 'arrow' ]" v-if="windowWidth <= 1100"></i></div>
        <p class="the-text" v-if="individuelBox || windowWidth > 1100">1 à 2 personnes. Séance d’une heure personnalisée selon vos objectifs.</p>
        <div class="button" v-if="individuelBox || windowWidth > 1100"><router-link to="/prestations">En savoir plus</router-link></div>
      </div>
      <div class="box" @click="collectifBoxSwitch">
        <div class="the-title">Coaching collectif<i :class="[ collectifBox ? 'leftArrow' : 'down', 'arrow' ]" v-if="windowWidth <= 1100"></i></div>
        <p class="the-text" v-if="collectifBox || windowWidth > 1100">3 à 10 personnes. Reunissez vos forces et donnez le maximum de vous.</p>
        <div class="button" v-if="collectifBox || windowWidth > 1100"><router-link to="/prestations">En savoir plus</router-link></div>
      </div>
      <div class="box margin-bottom-4" @click="cardiaqueBoxSwitch">
        <div class="the-title">Cohérence cardiaque<i :class="[ cardiaqueBox  ? 'leftArrow' : 'down', 'arrow' ]" v-if="windowWidth <= 1100"></i></div>
        <p class="the-text" v-if="cardiaqueBox || windowWidth > 1100">Apprenez à apaiser vos émotions et gérer votre stress.</p>
        <div class="button" v-if="cardiaqueBox || windowWidth > 1100"><router-link to="/prestations">En savoir plus</router-link></div>
      </div>
      </div>
      <div class="button"><router-link to="/les-bienfaits-du-sport">Decouvrez les bienfaits<br>du sport sur la santé !</router-link></div>
    </div>
    <div class="break-line" v-if="windowWidth <= 1100"></div>
    <h4 id="prestations-bien-etre">Mes prestations Médecine douce</h4>
    <h5 v-if="windowWidth <= 1100">Bien-être</h5>
    <div class="medecine-container-box">
    <div class="box" @click="kinesiologieBoxSwitch">
      <div class="the-title">Kinésiologie<i :class="[ kinesiologieBox ? 'leftArrow' : 'down', 'arrow' ]" v-if="windowWidth <= 1100"></i></div>
      <p class="the-text" v-if="kinesiologieBox || windowWidth > 1100">Favorisez un état d’équilibre et<br> de bien-être grâce à la<br> kinésiologie.</p>
      <div class="button" v-if="kinesiologieBox || windowWidth > 1100"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="box" @click="ReflexologieBoxSwitch">
      <div class="the-title">Réflexologie<i :class="[ ReflexologieBox ? 'leftArrow' : 'down', 'arrow' ]" v-if="windowWidth <= 1100"></i></div>
      <p class="the-text" v-if="ReflexologieBox || windowWidth > 1100">Douleurs chroniques,<br> migraines, acouphènes,<br> vertiges ? La reflexologie est<br> faite pour vous.</p>
      <div class="button" v-if="ReflexologieBox || windowWidth > 1100"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    </div>
    <h4>Ils me font confiance</h4>
    <div class="confiance-pics">
      <img src="../assets/services-a-la-personne-logo.png" alt="logo du services à la personne">
      <div class="logo-container">
        <img src="../assets/bd-logo.svg" alt="logo de Becton Dickinson France">
        <img src="../assets/ASEL-logo.png" alt="logo de l'association sports et loisirs de Saint-Martin-d'Hères">
        <img src="../assets/iles-des-couleurs-logo.jpg" alt="logo de l'ile des couleurs">
        <img src="../assets/U-C-Eybens-logo.jpg" alt="logo de l'union des commercants d'eybens">
        <img src="../assets/murianette-logo.png" alt="logo de la commune de murianette">
        <img src="../assets/inclusion-sport-logo.png" alt="logo de l'écolde de l'inclusion par le sport">
        <img src="../assets/CSC-logo.jpg" alt="logo du chamrousse ski club">
        <img src="../assets/mare-nostrum-logo.jpg" alt="logo du groupe mare nostrum">
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  created()  {
    window.addEventListener("resize", this.resizeHandler);
  },
  destroyed()  {
    window.removeEventListener("resize", this.resizeHandler);
  },
  mounted: function () {
    this.windowWidth = window.innerWidth;
  },
  data: function () {
    return {
      individuelBox: false,
      collectifBox: false,
      cardiaqueBox: false,
      kinesiologieBox: false,
      ReflexologieBox: false,
      windowWidth: 0,
    };
  },
  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
    individuelBoxSwitch() {
      if (this.individuelBox == true) {
        this.individuelBox = false;
      } else {
        this.individuelBox = true;
        this.collectifBox = false;
        this.cardiaqueBox = false;
      }
    },
    collectifBoxSwitch() {
      if (this.collectifBox == true) {
        this.collectifBox = false;
      } else {
        this.individuelBox = false;
        this.collectifBox = true;
        this.cardiaqueBox = false;
      }
    },
    cardiaqueBoxSwitch() {
      if (this.cardiaqueBox == true) {
        this.cardiaqueBox = false;
      } else {
        this.individuelBox = false;
        this.collectifBox = false;
        this.cardiaqueBox = true;
      }
    },
    kinesiologieBoxSwitch() {
      if (this.kinesiologieBox == true) {
        this.kinesiologieBox = false;
      } else {
        this.kinesiologieBox = true;
        this.ReflexologieBox = false;
      }
    },
    ReflexologieBoxSwitch() {
      if (this.ReflexologieBox == true) {
        this.ReflexologieBox = false;
      } else {
        this.kinesiologieBox = false;
        this.ReflexologieBox = true;
      }
    },
  }
  
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';

.home {
  @keyframes iconArrow {
    from {opacity: 0;}
    to {opacity: 100%;}
  }
  .icon-arrow {
    z-index: 888;
    position: absolute;
    bottom : 5rem;
    left : 48%;
    animation: iconArrow 1.5s ease-in-out alternate infinite;
  }
  a {
    text-decoration: none;
  }
  h4 {
    font-size : 1.7rem;
    font-weight: 600;
    color : #1E3D59;
    text-align: center;
    padding : 3rem 0 1.5rem 0;
  }
  h5 {
    font-size : 1.3rem;
    font-weight: 500;
    color : #1E3D59;
    text-align: center;
  }
  .right {
    z-index : 2;
    height : calc(100vh - 5rem);
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 0 100%);
    @include pc {
      clip-path: polygon(70% 0, 100% 0%, 100% 100%, 30% 100%);
      display: flex;
      justify-content: right;
      -webkit-justify-content: right;
    }
    .ju_pic {
      opacity: 0.25;
      height : calc(100vh - 5rem);
      width : 100%;
      object-fit: cover;
      filter: blur(1px);
      @include pc {
        width : 85%;
      }
    }
    .ju_pic-paysage {
      display : none;
      @include pc {
        display : block;
      }
    }
    .ju_pic-portrait {
      @include pc {
        display : none;
      }
    }

  }
  .left {
    z-index : 0;
    position : absolute;
    top : 5rem;
    height : calc(100vh - 5rem);
    width : 100vw;
    clip-path: polygon(0 0, 99% 0, 0 99%, 0 100%);
    @include pc {
      clip-path: polygon(0 0, 69.3% 0, 29.5% 100%, 0 100%);
    }
    .ju_foot {
      opacity: 0.25;
      height : calc(100vh - 5rem);
      width : 100%;
      object-fit: cover;
      filter: blur(1px);
      @include pc {
        width : 71%;
      }
    }
    .ju_foot-paysage {
      display : none;
      @include pc {
        display : block;
      }
    }
    .ju_foot-portrait {
      @include pc {
        display : none;
      }
    }
  }
  .title {
    position : absolute;
    top : 5rem;
    width : 100vw;
    height : calc(100vh - 5rem);
    .kinesiologie, .sport {
      display: flex;
      flex-direction: column;
      align-items : center;
    }
    .kinesiologie { 
      position : absolute;
      bottom : 10rem;
      right : 15vw;
      @include pc {
        top : 50vh;
        right : 30vw;
      }
    }
    .sport {
      position : absolute;
      top : 15vh;
      left : 10vw;
      @include pc {
        top : 25vh;
        left : 30vw;
      }
    }
    h3 {
      color : #1E3D59;
      text-align: center;
      font-size: 17px;
      font-weight : 700;
      width : fit-content;
      margin-bottom : 10px;
      line-height: 27.51px;
      @include largeScreen {
        font-size: 20px;
      }
    }
    .infos {
      color : #FF6E40;
      text-align: center;
      font-weight : 600;
      border-bottom: 1px solid #FF6E40;
      @include largeScreen {
        font-size: 18px;
        padding-top : 0.5rem;
        cursor: pointer;
        &:hover {
          color : #fff;
          background-color: #FF6E40;
          padding : 0.5rem 0;
          width : 99px;
          border-bottom: none;
          transition: background-color 1s ease-out;
        }

      }
    }
  }
  .qui-je-suis {
    display : flex;
    justify-content: center;
    align-items: center;
    margin : 1rem 0 4rem 0;
    @include pc {
      margin : 1rem 10vw 4rem 10vw;
    }
    .ju-profil-pic {
      width : 45vw;
      max-width : 10rem;
      margin-right : 1rem;
      @include tablet {
        display: none;
      }
    }
    .ju-profil-pic-large {
      display: none;
      @include tablet {
        display : block;
        width : 40vw;
        max-width : 25rem;
        margin-right : 5rem;
      }
      @include largeScreen {
        margin-right : 15rem;
      }
    }
    p {
      width : 40vw;
      @include pc {
        width : 25rem;
      }
    }
  }
  .button {
    cursor: pointer;
    margin : auto;
    background-color : #1E3D59;
    transition : background-color 0.5s ease-out;
    width : fit-content;
    padding : 0.8rem 1.3rem;
    border-radius: 1rem;
    text-align : center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    a {
      color : #F5F0E1;
      text-decoration: none;
    }
    &:hover {
      background-color : #34628C;
      transition : background-color 0.5s ease-out;
    }
  }
  .box {
    cursor : pointer;
    margin : 1rem 2.5rem;
    padding : 1rem 0.5rem 0.2rem 0.5rem;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    background: rgba(30, 61, 89, 0.01);
    @include tablet {
      margin : 1rem 25vw;
    }
    .the-title {
      position: relative;
      margin-bottom : 1.2rem;
      padding-right : 3rem;
      font-size : 18px;
      text-align: center;
      color : #1E3D59;
      @include largeScreen {
        padding-right : 0;
        margin-bottom : 0.6rem;
        font-weight: 500;
      }
      .arrow {
        position: absolute;
        right : 1rem;
        top : 0.5rem;
        border: solid black;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 4px;
      }
      .leftArrow {
        transform: rotate(135deg);
        transition: transform 0.3s ease-out;
      }
      .down {
        transform: rotate(45deg);
        transition: transform 0.3s ease-out;
      }
    }
    .the-text {
      color : #1E3D59;
      text-align: center;
      margin : 2rem 1rem 1rem 1rem;
    }
    .button {
      margin-bottom : 1rem;
      font-size : 14px;
    }
  }
  .sport-container {
     @include largeScreen {
       background: rgba(30, 61, 89, 0.1);
       margin-top : 6rem;
       padding-bottom : 2rem;
       margin-bottom : 1rem;
       &-box {
         position : relative;
         display: flex;
         align-items : center;
         justify-content: center;
         margin : auto;
         margin-top : 3rem;
         margin-bottom : 5rem;
         width : fit-content;
         &::after, &::before {
          z-index : -1;
          content : "";
          position: absolute;
          background : #FF6E40;
          width : 50vw;
          max-width : 220px;
          height : 6.5rem;
        }
        &::before {
          top : -0.25rem;
          left : -0.25rem;
        }
        &::after {
          bottom : -0.25rem;
          right : -0.25rem;
        }
       }
       .box {
          background : #fff;
          margin : 0 1rem 0 0;
          width : 350px;
          height : 200px;
          &:last-child {
            margin-right : 0;
          }
       }
     }
  }
  @include largeScreen {
    .medecine-container-box {
      position : relative;
      display: flex;
      align-items : center;
      justify-content: center;
      margin : auto;
      margin-top : 5rem;
      margin-bottom : 5rem;
      width : fit-content;
      &::after, &::before {
        z-index : -1;
        content : "";
        position: absolute;
        background : #FF6E40;
        width : 50vw;
        max-width : 220px;
        height : 6.5rem;
      }
      &::before {
        top : -0.25rem;
        left : -0.25rem;
      }
      &::after {
        bottom : -0.25rem;
        right : -0.25rem;
      }
      .box {
        background : #fcfdfd;
        margin : 0 3rem 0 0;
        width : 350px;
        height : 200px;
        p {
          margin-top : 0;
        }
        &:last-child {
          margin-right : 0;
        }
      }
    }
  }
  .margin-bottom-4 {
    margin-bottom : 4rem;
  }
  .confiance-pics {
    display : flex;
    flex-direction: column;
    align-items: center;
    @include tablet {
      max-width : 60rem;
      margin : auto;
    }
    .logo-container {
      display : flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      align-items : center;
      // margin-bottom : 3rem;
      img {
        margin-bottom : 3rem;
        &:nth-child(3) {
          width : 8rem;
        }
        &:nth-child(5) {
          width : 9rem;
        }
        &:nth-child(6) {
          width : 10rem;
        }
        &:nth-child(7) {
          width : 6rem;
        }
        &:nth-child(8) {
          width : 8rem;
          height : 9rem;
          object-fit: cover;
        }
      }
      @include tablet {
        img {
          margin : 0 3rem;
        }
      }
    }
    img {
      width : 35vw;
      @include tablet {
        width : 8rem;
      }
    }
  }
  .break-line {
    width : 30vw;
    height : 1px;
    margin : 3rem 35vw 0 35vw;
    background: #1E3D59;
  }
}

</style>
