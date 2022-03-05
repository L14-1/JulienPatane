<template>
  <div class="parcours">
    <h1>Mon parcours</h1>
    <p>Diplômé des métiers du sport et de l'animation, je suis <i class="orangeAccent">éducateur coach sportif</i> sur le bassin grenoblois depuis plusieurs années.</p>
    <p>Un parcours et une histoire qui ont démarré dans un club de basket en tant que salarié en 2010.
    Puis coordinateur d'équipe dans le milieu périscolaire, directeur d'accueil collectif de mineurs, intervenant sportif dans diverses associations pour les publics enfants et adultes, j'ai décidé de devenir micro entrepreneur en 2017.</p>
    <p>La petite aventure continue avec un virage complémentaire depuis février 2020. Un parcours de formation pour devenir <i class="orangeAccent">praticien kinésiologue certifié</i>.</p>

    <div class="ju_pics">
    <img src="../assets/uuu.jpg" alt="Julien Patane, de dos, en tailleur sur une mer de sel">
    </div>

    <p>Grand passionné de voyages, véritable amoureux de l'Amérique latine, je me suis aperçu que prendre soin de soi est accessible partout et pour tous.</p>
    <p>C'est une philosophie de vie, ce sont des rituels à adopter au quotidien. Notre voyage intérieur est infini. A très bientôt.</p>
    <p class="blueAccent">Julien Patane</p>

    <div class="diplomes">
        <h2><font-awesome-icon icon="fa-solid fa-ribbon" />Mes diplômes</h2>
        <ul>
            <li>BP JEPS Mention Sports Collectifs et Activités Physiques Pour Tous</li>
            <li>Certifié en méthode Réflexologie Cranio sacrée - Ostéo Fluidique</li>
            <li>Certifié en méthode cohérence cardiaque</li>
            <li>Futur certifié en kinésiologie</li>
        </ul>
    </div>

    <div class="buttons">
        <div class="button-nav"><router-link to="/prestations">Mes prestations</router-link></div>
        <div class="button-nav"><router-link to="/tarifs">Mes tarifs</router-link></div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Parcours',
}
</script>

<style lang="scss">

.parcours {
    p {
        margin : 0 2.5rem 1rem 2.5rem;
        text-align: justify;
        font-weight: 500;
    }
    .ju_pics {
        display : flex;
        justify-content: center;
        margin : 2rem 0;
        img {
            width : 20rem;
            border-radius: 0.5rem;
            box-shadow: 0px 4px 4px rgba(30, 61, 89, 0.5);
        }
    }
    .diplomes {
        .fa-ribbon {
            color : #FF6E40;
            font-size: 1.5rem;
            margin-right : 1rem;
        }
        margin : 0 1rem;
        border : 2px solid #FF6E40;
        ul {
            margin : 0 3rem;
            li {
                margin-bottom : 1rem;
                list-style: disc;
                line-height: 26px;
            }
        }
    }
    .buttons {
        margin : 2rem 1rem;
        display: flex;
        justify-content: space-around;
    }
}

</style>