<template>
  <div class="parcours">
    <h1>Mon parcours</h1>
    <div class="text-photo-container">
        <div class="text-photo-container--text">
            <p>Diplômé des métiers du sport et de l'animation, je suis <i class="orangeAccent">éducateur coach sportif</i> sur le bassin grenoblois depuis plusieurs années.</p>
            <p>Un parcours et une histoire qui ont démarré dans un club de basket en tant que salarié en 2010.
                Puis coordinateur d'équipe dans le milieu périscolaire, directeur d'accueil collectif de mineurs, intervenant sportif dans diverses associations pour les publics enfants et adultes, j'ai décidé de devenir micro entrepreneur en 2017.</p>
            <p>La petite aventure continue avec un virage complémentaire depuis février 2020. Un parcours de formation pour devenir <i class="orangeAccent">praticien kinésiologue certifié</i>.</p>
        </div>
        <div class="text-photo-container--photo">
            <img src="../assets/uuu.jpg" alt="">
        </div>
    </div>

    <div class="dual-photo-container">
        <div class="dual-photo-container--photo">
            <img src="../assets/nn.jpg" alt="">
        </div>
        <div class="dual-photo-container--photo">
            <img src="../assets/yyy.jpg" alt="">
        </div>
    </div>

    <div class="text-photo-container">
    <div class="ju_pics">
        <img src="../assets/uuu.jpg" alt="Julien Patane, de dos, en tailleur sur une mer de sel">
    </div>
    <p class="text-photo-container--text">Grand passionné de voyages, véritable amoureux de l'Amérique latine, je me suis aperçu que prendre soin de soi est accessible <i class="orangeAccent">partout</i> et <i class="orangeAccent">pour tous</i>.<br>
    C'est une philosophie de vie, ce sont des rituels à adopter au quotidien. Notre voyage intérieur est infini. A très bientôt.<br>
    <i class="blueAccent">Julien Patane</i></p>
    </div>

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

@import '../assets/_mixin.scss';

.parcours {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text-photo-container {
        @include pc {
            display : flex;
            justify-content: space-between;
            align-items: center;
            width : 900px;
            margin-top : 4rem;
        }
        &--text {
            @include pc {
                flex : 50%
            }
        }
        &--photo {
            display : none;
            @include pc {
                flex : 50%;
                display: flex;
                justify-content: center;
            }
            img {
                width : 300px;
                display: none;
                @include pc {
                    display : block;
                }
            }
            
        }
    }
    .dual-photo-container {
        display: none;
        @include pc {
            display : flex;
            justify-content: space-between;
            align-items: center;
            width : 900px;
            margin-top : 4rem;
        }
        &--photo {
            flex : 50%;
            display: flex;
            justify-content: center;
            img {
                width : 300px;
                display: none;
                @include pc {
                    display : block;
                }
            }
        }
    }
    p {
        margin : 0 2.5rem 1rem 2.5rem;
        text-align: justify;
        font-weight: 500;
    }
    .ju_pics {
        display : flex;
        justify-content: center;
        margin : 2rem 0;
        @include pc {
            flex : 50%;
        }
        img {
            width : 20rem;
            border-radius: 0.5rem;
            box-shadow: 0px 4px 4px rgba(30, 61, 89, 0.5);
        }
    }
    .diplomes {
        @include pc {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding : 1rem 0;
            width : 880px
        }
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
        margin : 2rem 0;
        width : 100vw;
        max-width : 25rem;
        display : flex;
        justify-content: space-around;
    }
}

</style>