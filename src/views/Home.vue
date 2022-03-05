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
    <div class="squared-container">
      <div class="inside-container">
        <p class="inside-title">Coaching individuel</p>
        <p class="inside-subtitle">1-2 personnes</p>
        <div class="buttons">
          <div class="button buttonHome"><router-link to="/">Plus d'infos</router-link></div>
          <div class="button buttonHome"><router-link to="/tarifs">Tarifs</router-link></div>
        </div>
      </div>
      <div class="inside-container">
        <p class="inside-title">Coaching collectif</p>
        <p class="inside-subtitle">3-10 personnes</p>
        <div class="buttons">
          <div class="button buttonHome"><router-link to="/">Plus d'infos</router-link></div>
          <div class="button buttonHome"><router-link to="/tarifs">Tarifs</router-link></div>
        </div>
      </div>
      <div class="inside-container">
        <p class="inside-title">Séance Cohérence cardiaque</p>
        <div class="buttons">
          <div class="button buttonHome"><router-link to="/">Plus d'infos</router-link></div>
          <div class="button buttonHome"><router-link to="/tarifs">Tarifs</router-link></div>
        </div>
      </div>
    </div>
    <div class="button"><router-link to="/les-bienfaits-du-sport">Decouvrez les bienfaits<br>du sport sur la santé !</router-link></div>
    <div class="break-line"></div>
    <h4>Mes prestations</h4>
    <h5>Bien-être</h5>
    <div class="squared-container">
      <div class="inside-container">
        <p class="inside-title">Séance de réfléxologie</p>
        <div class="buttons">
          <div class="button buttonHome"><router-link to="/">Plus d'infos</router-link></div>
          <div class="button buttonHome"><router-link to="/tarifs">Tarifs</router-link></div>
        </div>
      </div>
      <div class="inside-container">
        <p class="inside-title">Séance de kinésiologie</p>
        <div class="buttons">
          <div class="button buttonHome"><router-link to="/">Plus d'infos</router-link></div>
          <div class="button buttonHome"><router-link to="/tarifs">Tarifs</router-link></div>
        </div>
      </div>
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
  
}
</script>

<style lang="scss">

.home {
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
    .kinesiologie { 
      position : absolute;
      bottom : 4rem;
      right : 7vw;
    }
    .sport {
      position : absolute;
      top : 4rem;
      left : 5vw;
      .infos {
        margin-left : 6rem;
      }
    }
    h3 {
      color : #1E3D59;
      text-align: center;
      width : fit-content;
      margin-bottom : 4rem;
      line-height: 2rem;
    }
    .infos {
      background : #FF6E40;
      color : #F5F0E1;
      text-align: center;
      width : 5.5rem;
      padding : 0.5rem 0;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    }
  }
  .qui-je-suis {
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin : 1rem 6vw 4rem 6vw;
    img {
      width : 40vw;
      // margin : 1rem 0;
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
  .squared-container {
    position: relative;
    z-index : 3;
    margin : 4rem 0;
    .inside-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: white;
      box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.13);
      width : 80vw;
      margin : 2rem 10vw;
      .inside-title {
        margin-top : 1rem;
        font-size: 1.3rem;
        font-weight: 600;
      }
      .inside-subtitle {
        font-weight: 600;
      }
      .buttons {
        margin : 3rem 0 1rem 0;
        display: flex;
      }
      .buttonHome {
        width : 8rem;
        margin : 0 1rem;
      }
    }
    &::after, &::before {
      z-index : -1;
      content : "";
      position: absolute;
      background : #FF6E40;
      width : 60vw;
      height : 6.5rem;
    }
    &::before {
      top : -0.5rem;
      left : calc(10vw - 0.5rem);
    }
    &::after {
      bottom : -0.5rem;
      right : calc(10vw - 0.5rem);
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
