<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/Logo.svg" alt="julien Patane Logo">
      <div class="nav-title">
        <p>Julien Patane</p>
        <p>Sport & Bien-être</p>
      </div>
      <div class="nav-menu">
        <div class="nav-menu_hamburger"></div>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">



*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: 'Inter', sans-serif;
}

#nav {
  height : 5rem;
  background: #1E3D59;
  color : #F5F0E1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width : 3.5rem;
    margin-left : 1rem;
  }
  .nav-title {
    font-weight : 300;
    font-size : 1.2rem;
    text-align: center;
    line-height: 2rem;
  }
  .nav-menu {
    margin-right : 1rem;
    &_hamburger {
      position: relative;
      width : 21px;
      height : 2px;
      background: #F5F0E1;
      &::after, &::before {
        content : '';
        position: absolute;
        width : 21px;
        height : 2px;
        background: #F5F0E1;
      }
      &::after {
        bottom : 5px;
      }
      &::before {
        top : 5px;
      }
    }
  }
}
</style>
