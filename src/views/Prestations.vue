<template>
  <div class="prestations">
    <div class="anchors">
      <div><p><router-link to="/prestations">Coaching</router-link></p></div>
      <div><p><router-link to="/prestations#coherence">Cohérence cardiaque</router-link></p></div>
      <div><p><router-link to="/prestations#reflexologie">Reflexo</router-link></p></div>
      <div><p><router-link to="/prestations#kinesiologie">Kinéso</router-link></p></div>
    </div>
    <h1>Prestations</h1>
    <div class="page-container">
      <h3>Accompagnement personnalisé</h3>
      <h4>1 ou 2 personnes</h4>
      <p class="under-title-text">
        Seul ou à plusieurs, l’activité physique n’est pas seulement un moyen très efficace pour perdre du poids et conserver sa silhouette svelte et tonique.
        <br>En <i class="orangeAccent">complément</i> d’un rythme de vie à l’écoute de vos besoins, c’est aussi un formidable allié pour votre <i class="orangeAccent">bien-être</i> général. Le sport -ou plutôt le mouvement- contribue à prévenir bon nombre de déséquilibres sur le plan physique et mental.
        <br><br>Voyons-en bref les bienfaits du sport sur votre organisme et votre qualité de vie générale:
      </p>
      <div class="box-container">
        <div class="box" @click="firstBoxSwitch">
          <p class="the-title">1. Respectez votre rythme !<i :class="[ firstBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <p class="the-text" v-if="firstBox">Pour commencer, il convient de revenir sur la signification de « être à l’écoute de vos besoins ».<br>C’est lors de notre première rencontre que nous échangeons sur vos problématiques et attentes. Cette séance « test » nous permet d’identifier vos capacités. C’est ensemble que nous pourrons construire pas à pas, par vos ressentis, la variabilité de l’intensité des efforts.</p>
        </div>
        <div class="box" @click="secondBoxSwitch">
          <p class="the-title">2. Ritualiser, créer une routine !<i :class="[ secondBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <p class="the-text" v-if="secondBox">Comme de nombreuses activités tel que la méditation, la cohérence cardiaque ou d’autres domaines, le sport nécessite d’être pratiqué de manière régulière. C’est lors de notre première séance que nous définissons ensemble la fréquence de nos rendez-vous.<br>Grâce à la méthode d’intervalle / fractionné que je vous propose, vous pourrez rapidement intégrer ces séances dans votre semaine, de manière accompagnée ou en autonomie, seul ou à plusieurs !</p>
        </div>
        <div class="box" @click="thirdBoxSwitch">
          <p class="the-title">3. La méthode intervalle training c’est quoi<i :class="[ thirdBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <p class="the-text" v-if="thirdBox">Plus précisément appelé HIIT Training, cette méthode s’adapte partout et pour tous.
            <br>De courtes périodes d’exercices de haute intensité alterné avec des intervalles de mouvements plus lents.
            <br>Très facile à mettre en place, ces séances durent entre 20 et 35 minutes.
            <br>Les exercices s’effectuent au poids du corps et ne nécessite pas d’espace ou de matériels particulier.
            <br>Avec ou sans pathologies, elle propose de nombreux bienfaits.
          </p>
        </div>
        <div class="box" @click="fourthBoxSwitch">
          <p class="the-title">4. Le mouvement pour tous<i :class="[ fourthBox ? 'left' : 'down', 'arrow' ]"></i></p>
          <p class="the-text" v-if="fourthBox">Vous êtes une personne active, vous avez dû ralentir la pratique sportive à la suite d’une blessure, une grossesse, une maladie, une pathologie et vous souhaitez être accompagné dans la reprise d’une activité physique et des mouvements adaptés. Le cœur de mes séances se résume en 2 mots. « Bienveillance » et « Plaisir ».</p>
        </div>
      </div>
      <div class="pic-container">
        <img src="../assets/Julien-et-client-sport2.jpg" alt="Julien et un client, exercice avec un élastique, l'élastique est bloqué sous le pied et ils le tire jusqu'au dessus de leur tête" class="portrait-pic">
        <img src="../assets/Julien-séance-sport4.jpg" alt="Julien et un client, exercice avec un ballon de yoga, le client est assis et bouge ses jambes en tenant le ballon au niveau de sa tête" class="portrait-pic">
        <img src="../assets/Julien-séance-sport5.jpg" alt="Julien et un client, exercice avec un ballon de yoga, le client est en postion de gainage avec les coudes sur le ballon." class="portrait-pic">
        <img src="../assets/Julien-séance-sport6.jpg" alt="Julien et un client, exercice avec un ballon de yoga, julien tient le ballon au niveau de sa tête et le client frappe dedans." class="portrait-pic">
      </div>
      <div class="container">
        <h4>Accompagnement personnalisé</h4>
        <h5>1 ou 2 personnes</h5>
        <div class="inside-container">
          <p class="price-container"><i class="price">40€</i> / séance</p>
          <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur.<br>Jusqu’à 2 personnes.</p>
            <div class="breakline"></div>
          <p class="price-container"><i class="price">20€</i> / séance</p>
          <div class="pics">
            <img src="../assets/services-a-la-personne-logo.svg" alt="">
            <img src="../assets/Picto-reduction-impot-50-1.svg" alt="">
          </div>
          <p>Vous êtes particulier ? <br>Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.</p>
          <p class="lowerCase">Plus d’informations:<br> https://www.servicesalapersonne.gouv.fr</p>
        </div>
      </div>
      <h3>Accompagnement collectif</h3>
      <h4>3 à 10 personnes</h4>
      <p class="under-title-text">
        Vous êtes un groupe de 3 personnes ou plus ?
        <br>Réunissez vos forces et lancez-vous pour des cours collectifs ! Lors de notre premier contact, nous fixerons ensemble un créneau hebdomadaire adapté à vos disponibilités.
        <br><br>Les séances <i class="orangeAccent">HIIT</i> ou circuit training impliquent de courtes rafales d’exercices de haute intensité, travaillant jusqu’à <i class="orangeAccent">100 %</i> de la capacité maximale, alternées avec des intervalles d’activité plus faibles ou un arrêt complet. Parce que l’intensité est élevée, la durée d’une séance hors échauffement et étirements est courte – jamais <i class="orangeAccent">plus de 35 minutes</i>.
      </p>
      <div class="pic-container">
        <img src="../assets/Julien-et-client-sport.jpg" alt="Julien et un client, étirement au sol après une séance de sport." class="portrait-pic">
        <img src="../assets/Julien-et-client-footing.jpg" alt="Julien et un client, de face, en train de courir." class="portrait-pic">
        <img src="../assets/Julien-et-client-ettirement.jpg" alt="Julien et un client, étirement debout après une séance de sport." class="portrait-pic">
      </div>
      <div class="container">
        <h4>Accompagnement collectif</h4>
        <h5>3 à 10 personnes</h5>
        <div class="inside-container">
          <p class="price-container"><i class="price">15€</i> / séance / personne</p>
          <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur.</p>
          <div class="breakline"></div>
          <p class="price-container"><i class="price">7,5€</i> / séance / personne</p>
          <div class="pics">
            <img src="../assets/services-a-la-personne-logo.svg" alt="">
            <img src="../assets/Picto-reduction-impot-50-1.svg" alt="">
          </div>
          <p>Vous êtes particulier ? <br>Bénéficiez d’une réduction d’impôt sur le revenu de 50% des sommes versées à un salarié à domicile.</p>
          <p class="lowerCase">Plus d’informations:<br> https://www.servicesalapersonne.gouv.fr</p>
        </div>
      </div>
      <div class="button"><router-link to="/les-bienfaits-du-sport">Decouvrez les bienfaits<br>du sport sur la santé !</router-link></div>
      <h3 id="coherence">Base de la cohérence cardiaque</h3>
      <h4>“ Le mouvement c’est la vie ”</h4>
      <p class="under-title-text">
        La cohérence cardiaque s’intéresse à la variabilité du rythme cardiaque qui est l’une des manifestations physiologiques de nos sentiments et de nos <i class="orangeAccent">émotions</i>. 
        <br>Elle est reconnue comme un marqueur puissant de l’activité du système nerveux autonome et de son équilibre. Le cœur et le cerveau interagissent en permanence. Lorsque l’un s’emballe, l’autre suit. C’est ainsi que notre état émotionnel influence les battements de notre cœur.
        <br><br>Grâce à des techniques simples, on peut apprendre à agir sur son rythme cardiaque pour <i class="orangeAccent">apaiser</i> ses émotions, mieux <i class="orangeAccent">gérer</i> son stress et prendre de <i class="orangeAccent">meilleures décisions</i>.
        <br>A l’aide d’exercices, nous analysons ensemble la variabilité de votre respiration et apprenons comment mieux la réguler pour bénéficier des effets positifs :
      </p>
      <div class="list">
        <ul>
          <li>Baisse du niveau de stress</li>
          <li>Amélioration des peformances</li>
          <li>Meilleure gestion de vos émotions</li>
          <li>Renforcement du système immunitaire </li>
          <li>Régulation de la glycémie</li>
          <li>Meilleure concentration </li>
        </ul>
      </div>
      <div class="yt-container">
        <iframe width="560" height="315"
          src="https://www.youtube.com/embed/S7TrmMJogiM">
        </iframe>
      </div>
      <div class="container">
        <h4>Cohérence cardiaque</h4>
        <div class="inside-container">
          <p class="price-container"><i class="price">12€</i> / séance / personne</p>
          <p>La séance dure une heure et se déroule à votre domicile ou dans un lieu extérieur. <br> <br>Elle est complémentaire avec l’accompagnement sportif , la reflexologie ou la kinésiologie</p>
        </div>
      </div>
      <h3 id="reflexologie" class="margined">Réflexologie Cranio-Sacrée</h3>
      <p class="under-title-text">
        La Réflexologie crânio-sacrée est une approche unique et inspirée également appelé "<i class="orangeAccent">ostéo fluidique</i>".
        <br>C'est une technique manuelle douce qui consiste à appliquer une légère pression sur les os du crâne et du visage de même que sur la partie inférieure de la moelle epinière qui s’étend jusqu'au sacrum.
        <br><br>Efficace et utile pour un <i class="orangeAccent">rééquilibrage</i> optimal du bassin, de la posture et colonne vertébrale, elle procure des résultats notables sur le <i class="orangeAccent">stress</i> et l’<i class="orangeAccent">anxiété</i> en agissant directement sur le liquide céphalo rachidien.
        <br><br><i class="blueAccent">Les motivations principales pour effectuer une séance sont :</i>
        <br>- éliminer des <i class="orangeAccent">douleurs chroniques</i>.
        <br>- gérer des problématiques liés à la sphère crânienne (<i class="orangeAccent">maux de tête, migraines, acouphènes, vertiges</i>).
        <br>- retrouver du <i class="orangeAccent">tonus</i> et de la <i class="orangeAccent">vitalité</i>.
        <br>- se relaxer.
        <br><br><i class="boldAccent">Elle ne comporte aucune contre indication et sepratique sur tout public.</i>
      </p>
      <div class="pic-container">
        <img src="../assets/Julien-seance-Kinesiologie5.jpg" alt="Julien et une cliente, julien en train de pratiquer de la réflexologie cranio-sacrée." >
      </div>
      <div class="container">
        <h4>Réflexologie</h4>
        <div class="inside-container">
          <p class="price-container"><i class="price">55€</i> / séance</p>
          <p>La séance dure en moyenne 1h15 et se déroule à mon cabinet</p>
          <div class="adress"><p><font-awesome-icon icon="fa-solid fa-location-dot" />34 chemin de la reviree, 38240 Meylan</p></div>
        </div>
      </div>
      <h3 id="kinesiologie" class="margined">La pratique kinésiologique</h3>
      <p class="under-title-text">
        « Les bras m’en tombent », « J’ai les jambes en coton », « J’en ai plein le dos »
        <br><br>Ces expressions populaires attestent du rapport étroit entre nos muscles et nos émotions. <i class="orangeAccent">Écoutons votre corps</i> ! Il a quelque chose à nous dire.
        <br>Initiée dans les années 1960 par le chiropracteur DRGOODHEART, la kinésiologie vise à rétablir <i class="orangeAccent">l'équilibre</i> global de la personne : structurel, psycho émotionnel,biochimique.
        <br>Aussi appelée science du mouvement ou physiologie du mouvement, elle fait le lien entre les muscles, les organes et les méridiens d’acupuncture.
        <br>Une pratique professionnelle destinée à favoriser un état d'équilibre et de <i class="orangeAccent">bien être</i>.
        <br>Grace au test musculaire, nous établissons un dialogue silencieux avec le corps afin de détecter l'origine du stress, les émotions, <i class="orangeAccent">les événements</i> qui bloquent la personne dans son plein potentiel. Tout est en inter-relation: Si l'un des systèmes est perturbé, toute <i class="orangeAccent">l'énergie</i> de la personne sera déséquilibrée.
      </p>
      <div class="pic-container">
        <img src="../assets/Julien-seance-Kinesiologie3.jpg" alt="Julien et une cliente, en salle de kinésiologie, la cliente est allongée et Julien tient son bras gauche et sa jambe gauche en l'air, la jambe gauche est pliée.">
        <img src="../assets/Julien-seance-Kinesiologie5.jpg" alt="Julien et une cliente, en salle de kinésiologie, la cliente est allongée et julien tient sa tête et son bras." >
        <img src="../assets/Julien-seance-Kinesiologie.jpg" alt="Julien et une cliente, en salle de kinésiologie, la cliente est allongée et julien tient ses pieds" >
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
  name: 'Prestations',
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
      firstBox: false,
      secondBox: false,
      thirdBox: false,
      fourthBox: false,
      windowWidth: 0,
    };
  },
  methods: {
    resizeHandler() {
      this.windowWidth = window.innerWidth;
    },
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


<style lang="scss">

@import '../assets/_mixin.scss';

.prestations {
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
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);
    @include pc {
      width : 50rem;
      left : calc(50% - 25rem);
    }
    div {
      display : flex;
      align-items : center;
      justify-content: space-around;
      width : 25vw;
      font-weight : 400;
      font-size: 13px;
      height : 3.5rem;
      background: #dde2e6;
      border : 1px solid white;
      border-right : none;
      &:first-child {
        border-left : none;
        @include pc {
          border-left : 1px solid white;
        }
      }
      @include pc {
        &:last-child {
          border-right : 1px solid white;
        }
      }
      p {
        text-align: center;
      }
      a {
        text-decoration: none;
        color : #1E3D59;
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
    h3, h4 {
      color : #DF643D;
      @include pc {
        text-align : center;
      }
    }
    h3 {
      margin-top : 4rem;
      &:first-child {
        margin-top : 0;
      }
    }
    .margined {
      margin-bottom : 1.5rem;
    }
    h4 {
      font-size : 0.8rem;
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
    @include pc {
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