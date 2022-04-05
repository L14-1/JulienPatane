<template>
  <div class="footer">
    <div class="container">
    <img src="../assets/Logo.svg" alt="julien Patane Logo">
    <div class="name-logo">
      <p>Julien Patane</p>
      <p>Sport & cohérence cardiaque<br>Réflexologie & Kinésiologie</p>
      <div class="social-logos">
        <a href="https://www.facebook.com/CoachJulienPatane/" target="_blank"><img src="../assets/Logo-facebook.svg" alt="logo facebook" class="facebook"></a>
        <a href="https://instagram.com/julienpatane?utm_medium=copy_link" target="_blank"><img src="../assets/Logo-instagram.svg" alt="logo instagram" class="instagram"></a>
      </div>
    </div>
    <ul>
      <li><router-link to="/prestations">Acompagnement sportif</router-link></li>
      <li><router-link to="/mon-parcours">Mon parcours</router-link></li>
      <li><router-link to="/prestations#coherence">Cohérence cardiaque</router-link></li>
      <li><router-link to="/tarifs">Tarifs</router-link></li>
      <li><router-link to="/prestations#reflexologie">Reflexologie</router-link></li>
      <li><router-link to="/faq">F.A.Q.</router-link></li>
      <li><router-link to="/prestations#kinesiologie">Kinésiologie</router-link></li>
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
    margin : 1.5rem 0 0.5rem 0;
    width : 3.5rem;
    @include pc {
      width : 6rem;
      margin : 1.5rem 0;
    }
  }
  p {
    text-align : center;
    font-weight : 300;
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
    p {
      &:first-child {
        margin-bottom : 0;
      }
      &:nth-child(2) {
        margin-top : 0.2rem;
      }
    }  
    .social-logos {
      display : flex;
      justify-content: center;
    }
    .facebook, .instagram {
      width : 2.5rem;
      margin : 1.5rem 1.2rem 1rem 1.2rem;
      @include pc {
        margin : 1rem 1.5rem;
        width : 2rem;
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
      font-weight: 300;
      font-size: 0.9rem;
      a {
        color : #F5F0E1;
        text-decoration: none;
        font-weight : 300;
        font-size: 0.9rem;
      }
    }
  }
}

</style>
