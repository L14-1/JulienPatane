<template>
  <div class="home">
    <div class="right">
      <img src="../assets/aaa.jpg" alt="" class="ju_pic">
    </div>
    <div class="left">
      <img src="../assets/bb-bis.jpg" alt="" class="ju_foot">
    </div>
    <div class="title">
      <div class="sport">
        <h3>SPORT &<br>COHERENCE CARDIAQUE</h3>
        <div class="infos">+ d'infos</div>
      </div>
      <div class="kinesiologie">
        <h3>KINESIOLOGIE &<br>REFLEXOLOGIE</h3>
        <div class="infos">+ d'infos</div>
      </div>
    </div>
    <h4>Qui je suis</h4>
    <div class="qui-je-suis">
      <img src="../assets/Photo-profil-Julien.jpg" alt="">
      <p>Micro entrepreneur dans le domaine du <i class="orangeAccent">sport</i> et <i class="orangeAccent">des médecines douces</i> Kinésiologie, Réflexologie et Educateur sportif de formation, j'accompagne les personnes dans la pratique d'une activité régulière pour favoriser l'équilibre du corps physique et mental.</p>
    </div>
    <div class="button"><router-link to="/mon-parcours">Découvrez mon parcours</router-link></div>
    <h4>Mes prestations</h4>
    <h5>Sport</h5>
    <div class="box" @click="individuelBoxSwitch">
      <p class="the-title">Coaching individuel<i :class="[ individuelBox ? 'leftArrow' : 'down', 'arrow' ]"></i></p>
      <p class="the-text" v-if="individuelBox">1 à 2 personnes. Séance d’une heure personnalisée selon vos objectifs.</p>
      <div class="button" v-if="individuelBox"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="box" @click="collectifBoxSwitch">
      <p class="the-title">Coaching collectif<i :class="[ collectifBox ? 'leftArrow' : 'down', 'arrow' ]"></i></p>
      <p class="the-text" v-if="collectifBox">3 à 10 personnes. Reunissez vos forces et donnez le maximum de vous.</p>
      <div class="button" v-if="collectifBox"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="box" @click="cardiaqueBoxSwitch">
      <p class="the-title">Cohérence cardiaque<i :class="[ cardiaqueBox  ? 'leftArrow' : 'down', 'arrow' ]"></i></p>
      <p class="the-text" v-if="cardiaqueBox">Apprenez à apaiser vos émotions et gérer votre stress.</p>
      <div class="button" v-if="cardiaqueBox"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="button"><router-link to="/les-bienfaits-du-sport">Decouvrez les bienfaits<br>du sport sur la santé !</router-link></div>
    <div class="break-line"></div>
    <h4>Mes prestations</h4>
    <h5>Bien-être</h5>
    <div class="box" @click="kinesiologieBoxSwitch">
      <p class="the-title">Kinésiologie<i :class="[ kinesiologieBox ? 'leftArrow' : 'down', 'arrow' ]"></i></p>
      <p class="the-text" v-if="kinesiologieBox">Favorisez un état d’équilibre et de bien-être grâce à la kinésiologie.</p>
      <div class="button" v-if="kinesiologieBox"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="box" @click="ReflexologieBoxSwitch">
      <p class="the-title">Réflexologie<i :class="[ ReflexologieBox ? 'leftArrow' : 'down', 'arrow' ]"></i></p>
      <p class="the-text" v-if="ReflexologieBox">Douleurs chroniques, migraines, acouphènes, vertiges ? La reflexologie est faite pour vous.</p>
      <div class="button" v-if="ReflexologieBox"><router-link to="/prestations">En savoir plus</router-link></div>
    </div>
    <div class="button"><router-link to="/les-bienfaits-du-sport">Réflexologie, Kinésiologie<br>Pourquoi ? Pour qui ?</router-link></div>
    <div class="break-line"></div>
    <h4>Ils me font confiance</h4>
    <div class="confiance-pics">
      <img src="../assets/logo 3.png" alt="">
      <img src="../assets/kisspng-logo-services-la-personne-en-france-chque-emp-5b59512bc6c5e4.0972898015325801398142.png" alt="">
      <img src="../assets/HH.png" alt="">
      <img src="../assets/logo 6.png" alt="">
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  data: function () {
    return {
      individuelBox: false,
      collectifBox: false,
      cardiaqueBox: false,
      kinesiologieBox: false,
      ReflexologieBox: false,
    };
  },
  methods: {
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
  .right, .left, .title {
    @include tablet {
      display: none;
    }
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
    border : 2px black solid;
    height : calc(100vh - 5rem);
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 0 100%);
    .ju_pic {
      height : calc(100vh - 5rem);
      width : 100%;
      object-fit: cover;
      filter: blur(3px);
    }
  }
  .left {
    z-index : 0;
    position : absolute;
    top : 5rem;
    height : calc(100vh - 5rem);
    width : 100vw;
    clip-path: polygon(0 0, 99% 0, 0 99%, 0 100%);
    .ju_foot {
      height : calc(100vh - 5rem);
      width : 100%;
      object-fit: cover;
      filter: blur(3px);
    }
  }
  .title {
    position : absolute;
    top : 5rem;
    width : 100vw;
    height : calc(100vh - 5rem);
    background: rgba(255, 255, 255, 0.5);
    .kinesiologie, .sport {
      display: flex;
      flex-direction: column;
      align-items : center;
    }
    .kinesiologie { 
      position : absolute;
      bottom : 10rem;
      right : 7vw;
    }
    .sport {
      position : absolute;
      top : 4rem;
      left : 5vw;
    }
    h3 {
      color : #1E3D59;
      text-align: center;
      width : fit-content;
      margin-bottom : 1rem;
      line-height: 2rem;
    }
    .infos {
      color : #FF6E40;
      text-align: center;
      font-weight : 600;
      border-bottom: 1px solid #FF6E40;
    }
  }
  .qui-je-suis {
    display : flex;
    justify-content: space-around;
    align-items: center;
    margin : 1rem 0 4rem 0;
    img {
      width : 40vw;
      max-width : 10rem;
    }
    p {
      width : 40vw;
      font-weight: 500;
    }
  }
  .button {
    cursor: pointer;
    margin : auto;
    background : #1E3D59;
    width : fit-content;
    padding : 0.8rem 1.3rem;
    border-radius: 1rem;
    text-align : center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    a {
      color : #F5F0E1;
      text-decoration: none;
    }
  }
  .box {
    cursor : pointer;
    margin : 2rem 1.5rem;
    padding : 0.2rem 0.5rem;
    box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.1);
    .the-title {
      position: relative;
      margin-bottom : 1.2rem;
      padding-right : 3rem;
      font-weight: 600;
      text-align: center;
      color : #1E3D59;
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
      font-weight : 500;
      text-align: center;
      margin-bottom : 1rem;
      margin-top : 2rem;
    }
    .button {
      margin-bottom : 1rem;
    }
  }
  .confiance-pics {
    display : flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items : center;
    margin-bottom : 3rem;
    img {
      width : 35vw;
      max-width : 13rem;
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
