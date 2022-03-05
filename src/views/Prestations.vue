<template>
  <div class="prestations">
    <div class="anchors">
      <div><p>Coaching</p></div>
      <div><p>Cohérence cardiaque</p></div>
      <div><p>Reflexo</p></div>
      <div><p>Kinéso</p></div>
    </div>
    <h1>Mes prestations</h1>
    <div class="page-container">
      <h3>Accompagnement personnalisé</h3>
      <h4>1 ou 2 personnes</h4>
      <p>
        Seul ou à plusieurs, l’activité physique n’est pas seulement un moyen très efficace pour perdre du poids et conserver sa silhouette svelte et tonique.
        <br>En <i class="orangeAccent">complément</i> d’un rythme de vie à l’écoute de vos besoins, c’est aussi un formidable allié pour votre <i class="orangeAccent">bien-être</i> général. Le sport -ou plutôt le mouvement- contribue à prévenir bon nombre de déséquilibres sur le plan physique et mental.
        <br><br>Voyons-en bref les bienfaits du sport sur votre organisme et votre qualité de vie générale:
      </p>
      <div :class="[ firstBox ? 'opened-box' : '' , 'box']" @click="firstBoxSwitch">
        <p class="the-title">1. Respectez votre rythme !<i :class="[ firstBox ? 'left' : 'down', 'arrow' ]"></i></p>
        <p class="the-text" v-if="firstBox">Pour commencer, il convient de revenir sur la signification de « être à l’écoute de vos besoins »<br>C’est lors de notre première rencontre que nous échangeons sur vos problématiques et attentes. Cette séance « test » nous permet d’identifier vos capacités. C’est ensemble que nous pourrons construire pas à pas, par vos ressentis, la variabilité de l’intensité des efforts.</p>
      </div>
      <div :class="[ secondBox ? 'opened-box' : '' , 'box']" @click="secondBoxSwitch">
        <p class="the-title">2. Ritualiser, créer une routine !<i :class="[ secondBox ? 'left' : 'down', 'arrow' ]"></i></p>
        <p class="the-text" v-if="secondBox">Comme de nombreuses activités tel que la méditation, la cohérence cardiaque ou d’autres domaines, le sport nécessite d’être pratiqué de manière régulière. C’est lors de notre première séance que nous définissons ensemble la fréquence de nos rendez-vous.<br>Grâce à la méthode d’intervalle / fractionné que je vous propose, vous pourrez rapidement intégrer ces séances dans votre semaine, de manière accompagnée ou en autonomie, seul ou à plusieurs !</p>
      </div>
      <div :class="[ thirdBox ? 'opened-box' : '' , 'box']" @click="thirdBoxSwitch">
        <p class="the-title">3. La méthode intervalle training c’est quoi<i :class="[ thirdBox ? 'left' : 'down', 'arrow' ]"></i></p>
        <p class="the-text" v-if="thirdBox">Plus précisément appelé HIIT Training, cette méthode s’adapte partout et pour tous.
          <br>De courtes périodes d’exercices de haute intensité alterné avec des intervalles de mouvements plus lents.
          <br><br>Très facile à mettre en place, ces séances durent entre 20 et 35 minutes.
          <br><br>Les exercices s’effectuent au poids du corps et ne nécessite pas d’espace ou de matériels particulier.
          <br><br>Avec ou sans pathologies, elle propose de nombreux bienfaits.
        </p>
      </div>
      <div :class="[ fourthBox ? 'opened-box' : '' , 'box']" @click="fourthBoxSwitch">
        <p class="the-title">4. Le mouvement pour tous<i :class="[ fourthBox ? 'left' : 'down', 'arrow' ]"></i></p>
        <p class="the-text" v-if="fourthBox">Vous êtes une personne active, vous avez dû ralentir la pratique sportive à la suite d’une blessure, une grossesse, une maladie, une pathologie et vous souhaitez être accompagné dans la reprise d’une activité physique et des mouvements adaptés. Le cœur de mes séances se résume en 2 mots. « Bienveillance » et « Plaisir ».</p>
      </div>
      <img src="../assets/DSC_0735.jpg" alt="">
      <div class="button"><router-link to="/tarifs">Tarifs</router-link></div>
      <h3>Accompagnement collectif</h3>
      <h4>3 à 10 personnes</h4>
      <p>
        Vous êtes un groupe de 3 personnes ou plus ?
        <br>Réunissez vos forces et lancez-vous pour des cours collectifs ! Lors de notre premier contact, nous fixerons ensemble un créneau hebdomadaire adapté à vos disponibilités.
        <br><br>Les séances <i class="orangeAccent">HIIT</i> ou circuit training impliquent de courtes rafales d’exercices de haute intensité, travaillant jusqu’à <i class="orangeAccent">100 %</i> de la capacité maximale, alternées avec des intervalles d’activité plus faibles ou un arrêt complet. Parce que l’intensité est élevée, la durée d’une séance hors échauffement et étirements est courte – jamais <i class="orangeAccent">plus de 35 minutes</i>.
      </p>
      <img src="../assets/DSC_0735.jpg" alt="">
      <div class="button"><router-link to="/tarifs">Tarifs</router-link></div>
      <h3>Base de la cohérence cardiaque</h3>
      <h4>“ Le mouvement c’est la vie ”</h4>
      <p>
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
      <img src="../assets/DSC_0735.jpg" alt="">
      <div class="button"><router-link to="/tarifs">Tarifs</router-link></div>
      <div class="button"><router-link to="/bienfaits">Decouvrez les bienfaits<br>du sport sur la santé !</router-link></div>
      <h3>Réflexologie Cranio-Sacrée</h3>
      <p>
        La Réflexologie crânio-sacrée est une approche unique et inspirée également appelé "<i class="orangeAccent">ostéo fluidique</i>".
        <br>C'est une technique manuelle douce qui consiste à appliquer une légère pression sur les os du crâne et du visage de même que sur la partie inférieure de la moelle epinière qui s’étend jusqu'au sacrum.
        <br><br>Efficace et utile pour un <i class="orangeAccent">rééquilibrage</i> optimal du bassin, de la posture et colonne vertébrale, elle procure des résultats notables sur le <i class="orangeAccent">stress</i> et l’<i class="orangeAccent">anxiété</i> en agissant directement sur le liquide céphalo rachidien.
        <br><br><i class="blueAccent">Les motivations principales pour effectuer une séance sont :</i>
        <br>- éliminer des <i class="orangeAccent">douleurs chroniques</i>.
        <br>- gérer des problématiques liés à la sphère crânienne (<i class="orangeAccent">maux de tête, migraines, acouphènes, vertiges</i>).
        <br>- retrouver du <i class="orangeAccent">tonus</i> et de la <i class="orangeAccent">vitalité</i>.
        <br>- se relaxer.
        <br><br>Elle ne comporte aucune contre indication et sepratique sur tout public.
      </p>
      <img src="../assets/DSC_0735.jpg" alt="">
      <div class="button"><router-link to="/tarifs">Tarifs</router-link></div>
      <h3>La pratique kinésiologique</h3>
      <p>
        « Les bras m’en tombent », « J’ai les jambes en coton », « J’en ai plein le dos »
        <br><br>Ces expressions populaires attestent du rapport étroit entre nos muscles et nos émotions. <i class="orangeAccent">Écoutons votre corps</i> ! Il a quelque chose à nous dire.
        <br>Initiée dans les années 1960 par le chiropracteur DRGOODHEART, la kinésiologie vise à rétablir <i class="orangeAccent">l'équilibre</i> global de la personne : structurel, psycho émotionnel,biochimique.
        <br>Aussi appelée science du mouvement ou physiologie du mouvement, elle fait le lien entre les muscles, les organes et les méridiens d’acupuncture.
        <br>Une pratique professionnelle destinée à favoriser un état d'équilibre et de <i class="orangeAccent">bien être</i>.
        <br>Grace au test musculaire, nous établissons un dialogue silencieux avec le corps afin de détecter l'origine du stress, les émotions, <i class="orangeAccent">les événements</i> qui bloquent la personne dans son plein potentiel. Tout est en inter-relation: Si l'un des systèmes est perturbé, toute <i class="orangeAccent">l'énergie</i> de la personne sera déséquilibrée.
      </p>
      <img src="../assets/DSC_0735.jpg" alt="">
      <div class="button"><router-link to="/tarifs">Tarifs</router-link></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Prestations',
  data: function () {
    return {
      firstBox: false,
      secondBox: false,
      thirdBox: false,
      fourthBox: false
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


<style lang="scss">
.prestations {
  .anchors {
    cursor: pointer;
    display: flex;
    margin : 0;
    div {
      display : flex;
      align-items : center;
      justify-content: space-around;
      width : 25vw;
      font-weight : bold;
      font-size : 0.9rem;
      height : 3.5rem;
      background: rgba(30, 61, 89, 0.15);
      border : 1px solid black;
      border-right : none;
      &:first-child {
        border-left : none;
      }
      p {
        text-align: center;
      }
    }
  }
  .button {
    cursor: pointer;
    margin : 2rem auto 4rem auto;
    background : #1E3D59;
    width : fit-content;
    padding : 0.8rem 2rem;
    border-radius: 1rem;
    text-align : center;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.13);
    a {
      color : #F5F0E1;
      text-decoration: none;
    }
  }
  .page-container {
    margin : 0 1.5rem;
    h3, h4 {
      color : #DF643D;
    }
    h4 {
      font-size : 0.8rem;
    }
    p {
      margin : 2rem 0;
      font-weight : 500;
    }
    .box {
      cursor : pointer;
      margin-bottom : 1rem;
      padding : 0.2rem 0.5rem;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      // border-radius: 10px;
      .the-title {
        position: relative;
        margin-bottom : 2rem;
        padding-right : 3rem;
        color : #FF6E40;
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
    }
    img {
      width : calc(100vw - 3rem);
      margin-top : 1rem;
    }
    .list {
      display : flex;
      flex-direction: column;
      align-items: center;
      ul {
        li {
          list-style-type: disc;
          margin-bottom : 1rem;
          font-weight : 500;
        }
      }
    }
  }
}


</style>