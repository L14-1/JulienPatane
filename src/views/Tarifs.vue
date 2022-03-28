<template>
  <div class="tarifs">
    <h1>Mes tarifs</h1>
    <div class="dual-container">
    <div class="container">
      <h4>Accompagnement personnalisé</h4>
      <h5>1 ou 2 personnes</h5>
      <div class="inside-container">
        <p class="price-container"><i class="price">40€</i> / séance</p>
        <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur.<br>Jusqu’à 2 personnes.</p>
        <div class="breakline"></div>
        <p class="price-container"><i class="price">20€</i> / séance</p>
        <div class="pics">
          <img src="../assets/services-a-la-personne-logo.png" alt="">
          <img src="../assets/Picto-reduction-impot-50-1.png" alt="">
        </div>
        <p>Vous êtes particulier ? <br>Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.</p>
        <p class="lowerCase">Plus d’informations:<br> https://www.servicesalapersonne.gouv.fr</p>
      </div>
    </div>
    <div class="container">
      <h4>Accompagnement collectif</h4>
      <h5>3 à 10 personnes</h5>
      <div class="inside-container">
        <p class="price-container"><i class="price">15€</i> / séance / personne</p>
        <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur.</p>
        <div class="breakline"></div>
        <p class="price-container"><i class="price">7€50</i> / séance / personne</p>
        <div class="pics">
          <img src="../assets/services-a-la-personne-logo.png" alt="">
          <img src="../assets/Picto-reduction-impot-50-1.png" alt="">
        </div>
        <p>Vous êtes particulier ? <br>Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.</p>
        <p class="lowerCase">Plus d’informations:<br> https://www.servicesalapersonne.gouv.fr</p>
      </div>
    </div>
    </div>
    <div class="container">
      <h4>Cohérence cardiaque</h4>
      <div class="inside-container">
        <p class="price-container"><i class="price">12€</i> / séance / personne</p>
        <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur. <br> <br>Elle est complémentaire avec l’accompagnement sportif , la reflexologie ou la kinésiologie</p>
      </div>
    </div>
    <!-- <div class="button"><router-link to="/les-bienfaits-du-sport">Réflexologie, Kinésiologie<br>Pourquoi ? Pour qui ?</router-link></div> -->
    <div class="dual-container">
    <div class="container">
      <h4>Réflexologie</h4>
      <div class="inside-container">
        <p class="price-container"><i class="price">55€</i> / séance</p>
        <p>La séance dure en moyenne 1h15 et se déroule à mon cabinet</p>
        <div class="adress"><p><font-awesome-icon icon="fa-solid fa-location-dot" />34 chemin de la reviree, 38240 Meylan</p></div>
      </div>
    </div>
    <div class="container">
      <h4>Kinésiologie</h4>
      <div class="inside-container">
        <p class="price-container"><i class="price">55€</i> / séance</p>
        <p>La séance dure en moyenne 1h15 et se déroule à mon cabinet</p>
        <div class="adress"><p><font-awesome-icon icon="fa-solid fa-location-dot" />34 chemin de la reviree, 38240 Meylan</p></div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tarifs',
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';

.tarifs {
  display : flex;
  flex-direction : column;
  align-items: center;
  .dual-container {
    @include pc {
      width : 900px;
      display : flex;
      justify-content: space-between;
    }
  }
  .container {
    padding : 1rem;
    position: relative;
    width : 85vw;
    max-width : 450px;
    @include pc {
      width : 400px;
    }
    background: white;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.13);
    margin-bottom : 4rem;
    h4 {
      font-size : 1.1rem;
      font-weight : 600;
      text-align: center;
    }
    h5 {
      font-weight : 600;
      // text-align: center;
    }
    h4, h5 {
      margin : 0 0.5rem;
    }
    .inside-container {
      margin : 0 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .price-container {
        margin: 2rem 0 1rem 0;
      }
      .price {
        font-size : 2.5rem;
        color : #FFC13B;
        font-style: normal;
      }
      .breakline {
        width : 25vw;
        max-width : 10rem;
        height : 1px;
        background: #1E3D59;
        margin-top : 1.5rem;
      }
      p {
        line-height : 1.5rem;
      }
      .pics {
        display : flex;
        align-items: center;
        justify-content: space-between;
        img {
          width : 30vw;
          max-width : 8rem;
          &:nth-child(2) {
            width : 20vw;
            height : 20vw;
            max-width : 5rem;
            max-height : 5rem;
          }
        }
      }
      .lowerCase {
        line-height : 1.2rem;
        font-size : 0.7rem;
        margin-top: 1rem;
        width : calc(85vw - 3rem);
        max-width : calc(400px - 3rem);
      }
    .adress {
      p {
        width : fit-content;
        margin-left : 1rem;
        position: relative;
        margin-top : 1rem;
        text-align: center;
        .fa-location-dot {
          position: absolute;
          top : 0.1rem;
          left : -1rem;
          color : #FF6E40;
        }
      }
    }
    }
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
  // .button {
  //   cursor: pointer;
  //   margin : 0 auto 4rem auto;
  //   background : #1E3D59;
  //   width : fit-content;
  //   padding : 0.8rem 1.3rem;
  //   border-radius: 1rem;
  //   text-align : center;
  //   box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
  //   a {
  //     color : #F5F0E1;
  //     text-decoration: none;
  //   }
  // }
}

</style>