<template>
  <div id="app">
    <div class="blackBack" v-if="menu == 'opened' || contactPage && windowWidth >= 1100"></div>
    <div id="nav">
      <router-link to="/">
      <img src="./assets/Logo.svg" alt="julien Patane Logo" @click="closingNav">
      </router-link>
      <div class="nav-title">
        <p>Julien Patane</p>
        <p>Sport & Bien-être</p>
      </div>
      <div class="nav-menu" @click="menuSwitch" v-if="windowWidth < 1100">
        <div :class="[ menu == 'default' ? 'nav-menu_hamburger' : 'nav-menu_hamburgerCross' ]" ></div>
      </div>
    </div>
    <div class="menu_links" v-if="menu == 'opened' || windowWidth >= 1100" >
      <ul>
        <li @click="servicesSwitch" v-if="windowWidth < 1100">Prestations<i :class="[ servicesMenu == 'default' ? 'left' : 'down', 'arrow' ]"></i></li>
        <router-link to="/prestations" v-if="windowWidth >= 1100"><li class="underline-anim-1">Prestations</li></router-link>
          <transition name="opening-fade">
        <ul class="sublinks" v-if="servicesMenu == 'opened'">
          <router-link to="/prestations"><li @click="closingNav">Coaching</li></router-link>
          <router-link to="/prestations#coherence"><li @click="closingNav">Cohérence cardiaque</li></router-link>
          <router-link to="/prestations#reflexologie"><li @click="closingNav">Réflexologie</li></router-link>
          <router-link to="/prestations#kinesiologie"><li @click="closingNav">Kinésiologie</li></router-link>
        </ul>
          </transition>
        <router-link to="/tarifs"><li @click="closingNav" class="underline-anim-2">Tarifs</li></router-link>
        <router-link to="/mon-parcours"><li @click="closingNav" class="underline-anim-3">Mon parcours</li></router-link>
        <router-link to="/les-bienfaits-du-sport"><li @click="closingNav" class="underline-anim-4">Les bienfaits du sport</li></router-link>
        
        <li class="contact-me" @click="openingContact">Contactez-moi</li>
      </ul>
    </div>
    <router-view/>
    <FooterComponent />
    <transition name="slide-fade">
    <ContactComponent v-if="contactPage" />
    </transition>
    <transition name="slide-fade">
    <div class="close-cross" @click="closingContact" v-if="contactPage"></div>
    </transition>
  </div>
</template>

<script>

import FooterComponent from '@/components/footerComponent.vue';
import ContactComponent from '@/components/contactComponent.vue';

export default {
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
      menu: "default",
      servicesMenu: "default",
      pricesMenu: "default",
      windowWidth: 0,
      contactPage: false,
    };
  },
  components: {
    FooterComponent,
    ContactComponent
  },
  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
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
    },
    openingContact() {
      this.menu = "default";
      this.servicesMenu = "default";
      this.pricesMenu = "default";
      this.contactPage = true;
    },
    closingContact() {
        this.contactPage = false;
    }
  },
};
</script>


<style lang="scss">

@import './assets/_mixin.scss';

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
    padding : 1.5rem 3rem 2rem 3rem;
    text-align: center;
    font-size : 24px;
    @include tablet {
      font-size : 38px;
    }
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
    font-weight : 600;
    color : #FF6E40;
  }
  .blueAccent {
    font-style: normal;
    font-weight : 600;
    color : #1E3D59;
  }
  .boldAccent {
    font-style: normal;
    font-weight : 600;
  }
  .button-nav {
    cursor: pointer;
    background-color : #1E3D59;
    width : 8.5rem;
    padding : 0.7rem 0;
    border-radius: 1rem;
    text-align : center;
    font-size: 14px;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    transition : background-color 0.5s ease-out;
    a {
      color : #F5F0E1;
      text-decoration: none;
    }
    &:hover {
      background-color : #34628C;
      transition : background-color 0.5s ease-out;
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
  @include largeScreen {
    justify-content: left;
  }
  img {
    width : 2.83rem;
    margin-left : 1rem;
    @include largeScreen {
    margin-right : 5rem;
    }
  }
  .nav-title {
    font-weight : 200;
    font-size : 18px;
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
.blackBack {
  position : fixed;
  z-index : 900;
  top : 0;
  width : 100vw;
  height : 100vh;
  background : rgba(0, 0, 0, 0.452);
}
.menu_links {
  z-index: 998;
  cursor : pointer;
  position : fixed;
  right : 0;
  top : 5rem;
  color : #424242;
  border : none;
  @include largeScreen {
    top : 1rem;
    right : 2rem;
    z-index : 1000;
  }
  a {
    color : #424242;
    text-decoration: none;
  }
  ul {
    @include largeScreen {
      display : flex;
      justify-content: flex-start;
      background: transparent;
      color : white;
      width : fit-content;
      align-items : center;
      width : 65vw;
      .underline-anim-1 {
        &::after {
          content : '';
          position : absolute;
          bottom : 0.7rem;
          left : 0.5rem;
          height : 2px;
          width : 0rem;
          background: white;
          transition : width 0.3s ease-in-out;
        }
        &:hover {
          &::after {
            width : 5.5rem;
            transition : width 0.3s ease-in-out;
          }
        }
      }
      .underline-anim-2 {
        &::after {
          content : '';
          position : absolute;
          bottom : 0.7rem;
          left : 0.5rem;
          height : 2px;
          width : 0rem;
          background: white;
          transition : width 0.3s ease-in-out;
        }
        &:hover {
          &::after {
            width : 2.7rem;
            transition : width 0.3s ease-in-out;
          }
        }
      }
      .underline-anim-3 {
        &::after {
          content : '';
          position : absolute;
          bottom : 0.7rem;
          left : 0.5rem;
          height : 2px;
          width : 0rem;
          background: white;
          transition : width 0.3s ease-in-out;
        }
        &:hover {
          &::after {
            width : 6.7rem;
            transition : width 0.3s ease-in-out;
          }
        }
      }
      .underline-anim-4 {
        &::after {
          content : '';
          position : absolute;
          bottom : 0.7rem;
          left : 0.5rem;
          height : 2px;
          width : 0rem;
          background: white;
          transition : width 0.3s ease-in-out;
        }
        &:hover {
          &::after {
            width : 10.5rem;
            transition : width 0.3s ease-in-out;
          }
        }
      }
    }
    width : 20rem;
    background: white;
    
    li {
      position: relative;
      padding : 1rem 0.5rem;
      font-weight : 400;
      @include largeScreen {
        color : white;
        margin : 0 1rem;
      } 
      
    }
    .contact-me {
      background-color : #FFC13B;
      color : white;
      @include largeScreen {
        position : absolute;
        right : 0;
        padding : 0.3rem 0.5rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
        transition : background-color 0.5s ease-in;
        &:hover {
          background-color: #FF9C40;
          transition : background-color 0.5s ease-out;
        }
      }
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
      @include largeScreen {
        display: none;
      }
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
.close-cross {
  z-index: 1100;
  position : fixed;
  right : 1rem;
  bottom : calc(100vh - 9rem);
  width : 1.5rem;
  height : 1.5rem;
  cursor: pointer;
  @include largeScreen {
    right : calc(50vw - 20rem + 1rem);
    bottom : calc(100vh - 10.5rem);
  }
  &::after, &::before {
    content : '';
    position : absolute;
    background : #1E3D59;
    width : 1.5rem;
    height : 2px;
    top : 0.75rem;
    left : 0;
  }
  &::after {
    transform: rotate(45deg);
  }
  &::before {
    transform: rotate(-45deg);
  }
}
.slide-fade-enter-active {
  transition: all 1s ease-in-out;
}
.slide-fade-leave-active {
  transition: all 1s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}

.opening-fade-enter-active {
  transition: all 0.5s ease-out;
}
.opening-fade-leave-active {
  transition: none;
}
.opening-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}
</style>
