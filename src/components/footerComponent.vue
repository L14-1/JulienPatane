<template>
  <div class="footer">
    <img src="../assets/Logo.svg" alt="julien Patane Logo">
    <p>Julien Patane</p>
    <p>Sport & cohérence cardiaque<br>Réflexologie & Kinésiologie</p>
    <div class="social-logos">
      <a href="facebook.com"><font-awesome-icon icon="fa-brands fa-facebook-square" /></a>
      <a href="instagram.com"><font-awesome-icon icon="fa-brands fa-instagram-square" /></a>
    </div>
    <ul>
      <li>Acompagnement sportif</li>
      <li>Mon parcours</li>
      <li>Cohérence cardiaque</li>
      <li>Tarifs</li>
      <li>Reflexologie</li>
      <li>FAQ</li>
      <li>Kinésiologie</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss">

.footer {
  background : #1E3D59;
  display: flex;
  color : #F5F0E1;
  flex-direction: column;
  align-items: center;
  img {
    margin : 1.5rem 0;
    width : 3.5rem;
  }
  p {
    text-align : center;
    font-weight : 300;
    font-size : 1.3rem;
    margin : 0.5rem 0;
    line-height: 25px;
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
  }
  ul {
    display : flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin : 1rem 2rem;
    li {
      text-align: center;
      width : 12rem;
      margin-bottom : 1rem;
    }
  }
}

</style>
