<template>
  <div id="app">
    <div id="nav">
      <img src="./assets/Logo.svg" alt="julien Patane Logo">
      <div class="nav-title">
        <p>Julien Patane</p>
        <p>Sport & Bien-être</p>
      </div>
      <div class="nav-menu" @click="menuSwitch">
        <div class="nav-menu_hamburger"></div>
      </div>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <div class="menu_links" v-if="menu == 'opened'">
      <ul>
        <li @click="servicesSwitch" >Prestations <i class="arrow down"></i></li>
        <ul class="sublinks" v-if="servicesMenu == 'opened'">
          <li>Coaching</li>
          <li>Cohérence cardiaque</li>
          <li>Réflexologie</li>
          <li>Kinésiologie</li>
        </ul>
        <li @click="pricesSwitch" >Tarifs <i class="arrow down"></i></li>
        <ul class="sublinks" v-if="pricesMenu == 'opened'">
          <li>Coaching</li>
          <li>Cohérence cardiaque</li>
          <li>Réflexologie</li>
          <li>Kinésiologie</li>
        </ul>
        <li>Mon parcours</li>
        <li>Les bienfaits du sport</li>
        <li>F.A.Q.</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      menu: "default",
      servicesMenu: "default",
      pricesMenu: "default",
    };
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
  }
}
.menu_links {
  display: flex;
  justify-content: right;
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
    }
    .down {
      transform: rotate(45deg);
    }
  }
}
</style>
