<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
      <img src="./assets/Logo.svg" alt="julien Patane Logo" @click="closingNav">
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
        <li @click="servicesSwitch" >Prestations<i :class="[ servicesMenu == 'default' ? 'left' : 'down', 'arrow' ]"></i></li>
        <ul class="sublinks" v-if="servicesMenu == 'opened'">
          <router-link to="/prestations"><li @click="closingNav">Coaching</li></router-link>
          <router-link to="/prestations#coherence"><li @click="closingNav">Cohérence cardiaque</li></router-link>
          <router-link to="/prestations#reflexologie"><li @click="closingNav">Réflexologie</li></router-link>
          <router-link to="/prestations#kinesiologie"><li @click="closingNav">Kinésiologie</li></router-link>
        </ul>
        <router-link to="/tarifs"><li @click="closingNav" >Tarifs</li></router-link>
        <router-link to="/mon-parcours"><li @click="closingNav">Mon parcours</li></router-link>
        <router-link to="/les-bienfaits-du-sport"><li @click="closingNav">Les bienfaits du sport</li></router-link>
        <a href="mailto:someone@example.com"><li class="contact-me" @click="closingNav">Contactez-moi</li></a>
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
      } else {
        this.servicesMenu = "default";
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
  display : flex;
  flex-direction : column;
  justify-content: center;
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
  .button-nav-orange {
    position : relative;
    padding-top : 0.5rem;
    font-weight : 600;
    a {
      color : #FF6E40;
      text-decoration: none;
    }
    &::after {
      content : '';
      position : absolute;
      height : 1px;
      width : 7.7rem;
      background: #FF6E40;
      bottom : 0.8rem;
      left : 0;
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
        &:hover {
          background-color: rgb(128, 128, 128);
        }
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
    font-weight : 200;
    font-size : 1.2rem;
    text-align: center;
    line-height: 1.6rem;
    p:first-child {
      font-weight : 300;
    }
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
  z-index: 998;
  cursor : pointer;
  position : fixed;
  right : 0;
  top : 5rem;
  color : #424242;
  border : none;
  a {
    color : #424242;
    text-decoration: none;
  }
  ul {
    width : 20rem;
    background: white;
    li {
      position: relative;
      padding : 1rem 0.5rem;
      
    }
    .contact-me {
      background : #FFC13B;
      color : white;
    }
    .sublinks {
      width : 20rem;
      // background : #e7e7e7;
      li {
        padding : 1rem 0 1rem 2.5rem;
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
