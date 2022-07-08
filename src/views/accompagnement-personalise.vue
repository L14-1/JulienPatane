<template>
  <div class="personnalise--page">
    <div class="anchors">
      <router-link to="/accompagnement-collectif"><div><p>Coaching collectif</p></div></router-link>
      <router-link to="/base-de-la-coherence-cardiaque"><div><p>Cohérence cardiaque</p></div></router-link>
      <router-link to="/reflexologie-canio-sacree"><div><p>Reflexologie</p></div></router-link>
      <router-link to="/la-pratique-kinesiologique"><div><p>Kinésiologie</p></div></router-link>
    </div>
    <h1>Prestations</h1>
    <div class="page-container">
      <div class="title-container">
        <h3>Accompagnement personnalisé</h3>
        <h4>1 ou 2 personnes</h4>
      </div>
      <p class="under-title-text">
        Seul ou à plusieurs, l’activité physique n’est pas seulement un moyen très efficace pour perdre du poids et conserver sa silhouette svelte et tonique.
        <br>En <i class="orangeAccent">complément</i> d’un rythme de vie à l’écoute de vos besoins, c’est aussi un formidable allié pour votre <i class="orangeAccent">bien-être</i> général. Le sport -ou plutôt le mouvement- contribue à prévenir bon nombre de déséquilibres sur le plan physique et mental.
        <br><br>Voyons-en bref les bienfaits du sport sur votre organisme et votre qualité de vie générale:
      </p>
      <div class="box-container">
        <div class="box" @click="firstBoxSwitch">
          <p class="the-title">1. Respectez votre rythme !<i :class="[ firstBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <transition name="opening-fade">
          <p class="the-text" v-if="firstBox">Pour commencer, il convient de revenir sur la signification de « être à l’écoute de vos besoins ».<br>C’est lors de notre première rencontre que nous échangeons sur vos problématiques et attentes. Cette séance « test » nous permet d’identifier vos capacités. C’est ensemble que nous pourrons construire pas à pas, par vos ressentis, la variabilité de l’intensité des efforts.</p>
          </transition>
        </div>
        <div class="box" @click="secondBoxSwitch">
          <p class="the-title">2. Ritualiser, créer une routine !<i :class="[ secondBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <transition name="opening-fade">
          <p class="the-text" v-if="secondBox">Comme de nombreuses activités tel que la méditation, la cohérence cardiaque ou d’autres domaines, le sport nécessite d’être pratiqué de manière régulière. C’est lors de notre première séance que nous définissons ensemble la fréquence de nos rendez-vous.<br>Grâce à la méthode d’intervalle / fractionné que je vous propose, vous pourrez rapidement intégrer ces séances dans votre semaine, de manière accompagnée ou en autonomie, seul ou à plusieurs !</p>
          </transition>
        </div>
        <div class="box" @click="thirdBoxSwitch">
          <p class="the-title">3. La méthode intervalle training c’est quoi<i :class="[ thirdBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <transition name="opening-fade">
          <p class="the-text" v-if="thirdBox">Plus précisément appelé HIIT Training, cette méthode s’adapte partout et pour tous.
            <br>De courtes périodes d’exercices de haute intensité alterné avec des intervalles de mouvements plus lents.
            <br>Très facile à mettre en place, ces séances durent entre 20 et 35 minutes.
            <br>Les exercices s’effectuent au poids du corps et ne nécessite pas d’espace ou de matériels particulier.
            <br>Avec ou sans pathologies, elle propose de nombreux bienfaits.
          </p>
          </transition>
        </div>
        <div class="box" @click="fourthBoxSwitch">
          <p class="the-title">4. Le mouvement pour tous<i :class="[ fourthBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <transition name="opening-fade">
          <p class="the-text" v-if="fourthBox">Vous êtes une personne active, vous avez dû ralentir la pratique sportive à la suite d’une blessure, une grossesse, une maladie, une pathologie et vous souhaitez être accompagné dans la reprise d’une activité physique et des mouvements adaptés. Le cœur de mes séances se résume en 2 mots. « Bienveillance » et « Plaisir ».</p>
          </transition>
        </div>
      </div>
      <div class="pic-container">
        <img src="../assets/Julien-et-client-sport2.jpg" alt="Julien et un client, exercice avec un élastique, l'élastique est bloqué sous le pied et ils le tire jusqu'au dessus de leur tête" class="portrait-pic">
        <img src="../assets/Julien-séance-sport4.jpg" alt="Julien et un client, exercice avec un ballon de yoga, le client est assis et bouge ses jambes en tenant le ballon au niveau de sa tête" class="portrait-pic">
        <img src="../assets/Julien-séance-sport5.jpg" alt="Julien et un client, exercice avec un ballon de yoga, le client est en postion de gainage avec les coudes sur le ballon." class="portrait-pic">
        <img src="../assets/Julien-séance-sport6.jpg" alt="Julien et un client, exercice avec un ballon de yoga, julien tient le ballon au niveau de sa tête et le client frappe dedans." class="portrait-pic">
      </div>
      <div class="button"><router-link to="/tarifs">Mes tarifs</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
    name : "personnalisePage",
    data: function () {
        return {
        firstBox: false,
        secondBox: false,
        thirdBox: false,
        fourthBox: false,
        windowWidth: 0,
        };
    },
    methods: {
        firstBoxSwitch() {
            if (this.firstBox == true) {
                this.firstBox = false;
            } else {
                this.firstBox = true;
                this.secondBox = false;
                this.thirdBox = false;
                this.fourthBox = false;
            }
        },
        secondBoxSwitch() {
            if (this.secondBox == true) {
                this.secondBox = false;
            } else {
                this.firstBox = false;
                this.secondBox = true;
                this.thirdQuestion = false;
                this.fourthBox = false;
            }
        },
        thirdBoxSwitch() {
            if (this.thirdBox == true) {
                this.thirdBox = false;
            } else {
                this.firstBox = false;
                this.secondBox = false;
                this.thirdBox = true;
                this.fourthBox = false;
            }
        },
        fourthBoxSwitch() {
            if (this.fourthBox == true) {
                this.fourthBox = false;
            } else {
                this.firstBox = false;
                this.secondBox = false;
                this.thirdBox = false;
                this.fourthBox = true;
            }
        },
    }
}
</script>

<style lang="scss" >

@import '../assets/_mixin.scss';

    .personnalise--page, .accompagnement-collectif, .coherence-cardiaque, .reflexologie-cranio, .pratique-kine {
        width : 100vw;
        max-width : 1100px;
        display: flex;
        flex-direction: column;
        margin : auto;
        h1 {
            margin-top : 3rem;
        }
        .anchors {
            position : fixed;
            top: 5rem;
            z-index : 800;
            cursor: pointer;
            display: flex;
            margin : 0;
            background: white;
            width : 100vw;
            padding : 0.7rem;
            align-items : center;
            justify-content: space-between;
            @include pc {
            // width : 50rem;
            left : calc(50% - 25rem);
            }
            a {
                text-decoration: none;
                color : white;
            }
            div {
            display : flex;
            align-items : center;
            justify-content: space-around;
            width : 22vw;
            max-width : calc(50rem / 4);
            font-weight : 400;
            font-size: 12px;
            height : 3rem;
            background-color: #1E3D59;
            transition : background-color 0.3s ease-in;
            &:hover {
                background-color: #bbc4cd;
                color: white;
                transition : background-color 0.6s ease-out;
            }
            p {
                text-align: center;
            }
            }
        }
        .button {
            cursor: pointer;
            margin : 0 auto 4rem auto;
            background-color : #1E3D59;
            transition : background-color 0.5s ease-out;
            width : fit-content;
            padding : 0.8rem 2rem;
            border-radius: 1rem;
            text-align : center;
            box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
            a {
            color : #F5F0E1;
            text-decoration: none;
            }
            &:hover {
            background-color : #34628C;
            transition : background-color 0.5s ease-out;
            }
        }
        .page-container {
            margin : 0 1.5rem;
            .title-container {
            @include tablet {
                width : fit-content;
                margin : 2rem auto;
            }
            }
            h3, h4 {
            color : #DF643D;
            }
            h3 {
            margin-top : 4rem;
            font-size : 24px;
            font-weight : 600;
            &:first-child {
                margin-top : 0;
            }
            }
            .margined {
            margin-bottom : 1.5rem;
            }
            h4 {
            font-size : 18px;
            margin-bottom : 1.5rem;
            }
            .under-title-text {
            line-height: 26px;
            @include pc {
                margin : 2rem 5rem;
            }
            }
            .box-container {
            @include pc {
                display : flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            margin-top : 3rem;
            .box {
                cursor : pointer;
                margin-bottom : 1rem;
                padding : 1rem 1rem;
                background: rgba(30, 61, 89, 0.01);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
                @include pc {
                width : 49%;
                cursor: default;
                }
                .the-title {
                position: relative;
                padding-right : 3rem;
                color : #FF6E40;
                margin-bottom : 0.5rem;
                @include pc {
                    padding-right : 0;
                }
                .arrow {
                    position: absolute;
                    right : 1rem;
                    top : 0.5rem;
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
                p {
                line-height: 26px;
                }
            }
            }
            .yt-container {
            display : flex;
            justify-content: space-around;
            margin-bottom : 3rem;
            iframe {
                max-width : 90vw;
            }
            }
            .pic-container {
                display : flex;
                margin : 4rem 0 2rem 0;
                padding-bottom : 2rem;
                overflow-x: auto;
                white-space: nowrap;
                img {
                    width : 65vw;      
                    max-width : 20rem;
                    border-radius: 0.5rem;
                    margin : 0 0.5rem;
                    object-fit : cover;
                    box-shadow: 0px 4px 4px rgba(30, 61, 89, 0.5);
                    // &:first-child {
                    //   margin-left : 0.5rem;
                    // }
                }
                .portrait-pic {
                height : 20rem;
                }
                &::-webkit-scrollbar {
                    height: 0.5rem;
                }
                &::-webkit-scrollbar-thumb {
                    background-color: #1e3d5996;
                    border-radius: 2rem;
                    &:hover {
                        background-color: rgb(128, 128, 128);
                    }
                }
                &::-webkit-scrollbar-track {
                    background-color: none;
                }
                &-one {
                width : fit-content;
                margin : 0 auto;
                img {
                    margin-top : 2rem;
                    width : 100%;
                    max-width : 20rem;
                    border-radius: 0.5rem;
                    box-shadow: 0px 4px 4px rgba(30, 61, 89, 0.5);
                }
                }
            }
            .list {
            display : flex;
            flex-direction: column;
            align-items: center;
            ul {
                margin : 2rem auto;
                li {
                list-style-type: disc;
                margin : 0 0 1rem 1rem;
                }
            }
            }
            .container {
            margin-top : 3rem;
            padding : 1rem;
            position: relative;
            width : 85vw;
            max-width : 450px;
            background-color: #fbfbfc;
            @include tablet {
            width : 400px;
            margin : 3rem auto; 
            }
            box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.13);
            margin-bottom : 2rem;
            h4 {
            font-size : 1.1rem;
            font-weight : 600;
            color : #424242;
            margin : 0;
            // text-align: center;
            }
            h5 {
            font-weight : 600;
            // text-align: center;
            }
            // h4, h5 {
            //   margin : 0 1rem;
            // }
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
                font-weight : 400;
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
                margin-bottom : 1rem;
                img {
                width : 4rem;
                &:nth-child(2) {
                    margin-left : 2rem;
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
        }

    }
</style>