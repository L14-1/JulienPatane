<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
      <img src="./assets/Logo.svg" alt="julien Patane Logo">
      </router-link>
      <div class="nav-title">
        <p>Julien Patane</p>
        <p>Sport & Bien-être</p>
      </div>
      <div class="nav-menu" @click="menuSwitch">
        <div :class="[ menu == 'default' ? 'nav-menu_hamburger' : 'nav-menu_hamburgerCross' ]" ></div>
      </div>
    </div>
    <div class="menu_links" v-if="menu == 'opened'" >
      <ul>
        <li @click="servicesSwitch" ><router-link to="/prestations">Prestations</router-link><i :class="[ servicesMenu == 'default' ? 'left' : 'down', 'arrow' ]"></i></li>
        <ul class="sublinks" v-if="servicesMenu == 'opened'">
          <li @click="closingNav">Coaching</li>
          <li @click="closingNav">Cohérence cardiaque</li>
          <li @click="closingNav">Réflexologie</li>
          <li @click="closingNav">Kinésiologie</li>
        </ul>
        <li @click="pricesSwitch" ><router-link to="/tarifs">Tarifs</router-link><i :class="[ pricesMenu == 'default' ? 'left' : 'down', 'arrow' ]"></i></li>
        <ul class="sublinks" v-if="pricesMenu == 'opened'">
          <li @click="closingNav"><router-link to="/tarifs">Coaching</router-link></li>
          <li @click="closingNav">Cohérence cardiaque</li>
          <li @click="closingNav">Réflexologie</li>
          <li @click="closingNav">Kinésiologie</li>
        </ul>
        <li @click="closingNav"><router-link to="/mon-parcours">Mon parcours</router-link></li>
        <li @click="closingNav"><router-link to="/les-bienfaits-du-sport">Les bienfaits du sport</router-link></li>
        <li @click="closingNav"><router-link to="/faq">F.A.Q.</router-link></li>
      </ul>
    </div>
    <router-view/>
    <FooterComponent />
  </div>
</template>

<script>

import FooterComponent from '@/components/footerComponent.vue'

export default {
  data: function () {
    return {
      menu: "default",
      servicesMenu: "default",
      pricesMenu: "default",
    };
  },
  components: {
    FooterComponent
  },
  methods: {
    menuSwitch() {
      if (this.menu == "opened") {
        this.menu = "default";
        this.servicesMenu = "default";
        this.pricesMenu = "default";
      } else if (this.menu == "default"){
        this.menu = "opened";
      }
    },
    servicesSwitch() {
      if (this.servicesMenu == "default") {
        this.servicesMenu = "opened";
        this.pricesMenu = "default";
      } else if (this.servicesMenu == "opened"){
        this.servicesMenu = "default";
      }
    },
    pricesSwitch() {
      if (this.pricesMenu == "default") {
        this.pricesMenu = "opened";
        this.servicesMenu = "default";
      } else if (this.pricesMenu == "opened"){
        this.pricesMenu = "default";
      }
    },
    closingNav() {
      this.menu = "default";
      this.servicesMenu = "default";
      this.pricesMenu = "default";
    }
  },
};
</script>


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

#app {
  padding-top : 5rem;
  color: #424242;
  h1 {
    color : #1E3D59;
    padding : 1.5rem 3rem;
    text-align: center;
  }
  h2 {
    font-size : 18px;
    font-weight: 600;
    color : #1E3D59;
    text-align: center;
    padding : 1rem 0;
  }
  .orangeAccent {
    font-style: normal;
    color : #FF6E40;
  }
  .blueAccent {
    font-style: normal;
    color : #1E3D59;
  }
  .boldAccent {
    font-style: normal;
    font-weight : bold;
  }
  .button-nav {
    cursor: pointer;
    background : #1E3D59;
    width : 10rem;
    padding : 0.7rem 0;
    border-radius: 1rem;
    text-align : center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    a {
      color : #F5F0E1;
      text-decoration: none;
    }
  }
}

html {
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(180, 180, 180);
        border-radius: 2rem;
    }
    &::-webkit-scrollbar-track {
        background-color: none;
    }
    overflow-x: hidden;
}

#nav {
  z-index: 999;
  position: fixed;
  width : 100vw;
  top : 0;
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
    display : flex;
    align-items : center;
    justify-content: center;
    width : 1.8rem;
    height : 1.2rem;
    cursor: pointer;
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
    &_hamburgerCross {
      position: relative;
      width : 21px;
      &::after, &::before {
        content : '';
        position: absolute;
        width : 21px;
        height : 2px;
        background: #F5F0E1;
      }
      &::after {
        transform: rotate(45deg);
        transition: transform 0.3s ease-out;
      }
      &::before {
        transform: rotate(-45deg);
        transition: transform 0.3s ease-out;
      }
    }
  }
}
.menu_links {
  z-index: 999;
  cursor : pointer;
  position : fixed;
  right : 0;
  top : 5rem;
  color : #424242;
  a {
    color : #424242;
    text-decoration: none;
  }
  ul {
    width : 20rem;
    background: #d8d8d8;
    li {
      position: relative;
      padding : 1rem 0.5rem;
    }
    .sublinks {
      width : 20rem;
      background : #e7e7e7;
      li {
        padding : 1rem;
      }
    }
    .arrow {
      position: absolute;
      right : 1rem;
      top : 1.2rem;
      border: solid black;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 4px;
    }
    .left {
      transform: rotate(135deg);
      transition: transform 0.3s ease-out;
    }
    .down {
      transform: rotate(45deg);
      transition: transform 0.3s ease-out;
    }
  }
}
</style>
