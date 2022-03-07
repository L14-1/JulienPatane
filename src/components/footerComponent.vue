<template>
  <div class="footer">
    <div class="container">
    <img src="../assets/Logo.svg" alt="julien Patane Logo">
    <div class="name-logo">
      <p>Julien Patane</p>
      <p>Sport & cohérence cardiaque<br>Réflexologie & Kinésiologie</p>
      <div class="social-logos">
        <a href="https://facebook.com"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
        <a href="https://instagram.com"><font-awesome-icon icon="fa-brands fa-instagram-square" /></a>
      </div>
    </div>
    <ul>
      <li>Acompagnement sportif</li>
      <li><router-link to="/mon-parcours">Mon parcours</router-link></li>
      <li>Cohérence cardiaque</li>
      <li><router-link to="/tarifs">Tarifs</router-link></li>
      <li>Reflexologie</li>
      <li><router-link to="/faq">F.A.Q.</router-link></li>
      <li>Kinésiologie</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';

.footer {
  background : #1E3D59;
  color : #F5F0E1;
  @include pc {
    height : 13rem;
    display : flex;
    align-items : center;
  }
  .container {
    max-width : 900px;
    margin : auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include pc {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  img {
    margin : 1.5rem 0;
    width : 3.5rem;
    @include pc {
      width : 6rem;
    }
  }
  p {
    text-align : center;
    font-weight : 300;
    font-size : 1.3rem;
    margin : 0.5rem 0;
    line-height: 25px;
    @include pc {
      font-size : 1rem;
    }
  }
  .name-logo {
    @include pc {
      width : 80rem;
    }
    .social-logos {
      display : flex;
      justify-content: center;
    }
    .fa-facebook-square {
      color : rgb(212, 116, 25);
    }
    .fa-instagram-square {
      color : #FFC13B;
    }
    .fa-facebook-square, .fa-instagram-square {
      background : #F5F0E1;
      font-size : 3rem;
      margin : 3rem 2rem;
      box-shadow: inset 0 0 0 0.2rem #1E3D59;
      @include pc {
        margin : 1rem 1.5rem;
        font-size : 2rem;
      }
    }
  }
  ul {
    display : flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width : 25rem;
    margin : 1rem 0 1rem 5vw;
    @include pc {
      margin : 0;
    }
    li {
      width : 45vw;
      max-width : 12rem;
      text-align: center;
      margin-bottom : 1rem;
      a {
        color : #F5F0E1;
        text-decoration: none;
      }
    }
  }
}

</style>
