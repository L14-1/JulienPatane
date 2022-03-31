<template>
  <div class="parcours">
    <h1>Mon parcours</h1>
    <div class="text-photo-container">
        <div class="text-photo-container--text">
            <p>Diplômé des métiers du sport et de l'animation, je suis <i class="orangeAccent">éducateur coach sportif</i> sur le bassin grenoblois depuis plusieurs années.</p>
            <br>
            <p>Un parcours et une histoire qui ont démarré dans un club de basket en tant que salarié en 2010.<br>
                Puis coordinateur d'équipe dans le milieu périscolaire, directeur d'accueil collectif de mineurs, intervenant sportif dans diverses associations pour les publics enfants et adultes, j'ai décidé de devenir micro entrepreneur en 2017.</p>
            <br>
            <p>La petite aventure continue avec un virage complémentaire depuis février 2020. Un parcours de formation pour devenir <i class="orangeAccent">praticien kinésiologue certifié</i>.</p>
        </div>
        <div class="text-photo-container--photo">
            <img src="../assets/Julien-voyage-plage.jpg" alt="">
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
        <img src="../assets/Julien-voyage-plage.jpg" alt="" class="ju_pics-hide">
        <img src="../assets/nn.jpg" alt="" class="ju_pics-hide">
        <img src="../assets/yyy.jpg" alt="" class="ju_pics-hide">
    </div>
    <p class="text-photo-container--text">Grand passionné de voyages, véritable amoureux de l'Amérique latine, je me suis aperçu que prendre soin de soi est accessible <i class="orangeAccent">partout</i> et <i class="orangeAccent">pour tous</i>.<br><br>
    C'est une philosophie de vie, ce sont des rituels à adopter au quotidien. Notre voyage intérieur est infini.<br>A très bientôt.<br><br>
    <i class="blueAccent">Julien Patane</i></p>
    </div>

    <div class="diplomes">
        <h2>
            <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="diplomeLogo">
                <path d="M20.5 0C21.5267 0 22.5533 0.327655 23.4286 0.913741L26.1598 2.692L29.2924 3.07657H29.3417L29.3944 3.12272C30.4245 3.33953 31.3676 3.82528 32.1141 4.52349C32.8606 5.2217 33.3797 6.10367 33.6112 7.06688L33.6606 7.11303V7.16225L34.0719 10.1434L35.9738 12.4509L36.0265 12.497V12.5462C37.1749 14.266 37.2275 16.4843 35.9738 18.1225L34.0242 20.6745L33.5076 23.3173L38.8054 30.8657L40.5 33.2192H32.6339L30.732 37.3542L29.5474 40L27.8527 37.5957L22.657 30.2888C21.2651 30.8272 19.6856 30.8734 18.3398 30.2888L13.1456 37.5957L11.451 39.9954L10.2664 37.3495L8.36608 33.2177H0.5L2.19464 30.8611L7.33778 23.5557L6.92646 20.6715L5.02452 18.1241L4.97187 18.0779V18.0318C3.82346 16.3089 3.77081 14.143 5.02452 12.5016L6.92646 9.9527L7.54344 7.06688H7.49408C7.49408 7.02842 7.5385 7.00535 7.54344 6.96997C7.83959 4.95943 9.54574 3.32423 11.706 3.07811H11.7586L14.8435 2.69354L17.5698 0.915279C18.4207 0.332272 19.4451 0.0122845 20.5 0ZM20.5 3.12272C20.1216 3.12272 19.7465 3.2304 19.4717 3.41499L16.5431 5.38399L16.1811 5.62397L15.7698 5.67319L12.17 6.15314H12.1206C11.3835 6.23005 10.8636 6.71461 10.783 7.40376V7.49914L10.1134 10.9141L10.064 11.2479L9.80569 11.5371L7.69974 14.2753C7.30487 14.7906 7.25551 15.6505 7.7491 16.392L9.80569 19.084L10.0624 19.4224L10.115 19.8069L10.6283 23.1696V23.2158C10.6539 23.4566 10.742 23.6879 10.885 23.8896L10.9886 23.9388V23.988C11.2338 24.2616 11.5843 24.434 11.9643 24.4679H12.0663L15.8175 25.094L16.2289 25.1402L16.5415 25.3817L19.4701 27.3507C20.0179 27.7199 20.9903 27.766 21.7833 27.3045L24.4585 25.3817L24.7679 25.1417L25.2285 25.0925L28.83 24.6125H28.8827C29.1155 24.5948 29.3402 24.5241 29.5372 24.4067C29.7342 24.2893 29.8975 24.1286 30.013 23.9388C30.1233 23.7617 30.1939 23.5654 30.2203 23.3619V23.2665L30.8883 19.7593L30.9409 19.3747L31.1976 19.0824L33.3036 16.3443C33.6984 15.832 33.7478 14.9229 33.2542 14.1814L31.1976 11.6802L30.9409 11.391L30.8916 10.9603L30.426 7.73757C30.4227 7.71603 30.3832 7.71449 30.3766 7.69142C30.2734 7.32141 30.0665 6.98381 29.7774 6.71342C29.4882 6.44303 29.1271 6.24963 28.7313 6.15314C28.7066 6.14698 28.705 6.11006 28.682 6.10699L25.2351 5.67319L24.8238 5.62397L24.4618 5.38399L21.5332 3.41499C21.2585 3.2304 20.8817 3.12272 20.5049 3.12272H20.5ZM9.13771 26.5354L6.61715 30.1411H10.579L10.9903 31.1026L12.119 33.5531L15.6152 28.5536L14.8452 28.0245L11.6073 27.4937V27.5399C11.5661 27.5399 11.5415 27.4984 11.5036 27.4937C10.6383 27.3765 9.82248 27.0445 9.141 26.5323L9.13771 26.5354ZM31.8623 26.5816C31.1598 27.1692 30.2713 27.5784 29.2924 27.6891H29.243L26.1038 28.0737L25.3848 28.6029L28.8794 33.5531L30.0097 31.1026L30.421 30.1396H34.3861L31.8656 26.5816H31.8623Z" fill="#FF6E40"/>
            </svg>
            Mes diplômes
        </h2>
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
        @include largeScreen {
            width : 1100px;
        }
        &--text {
            @include tablet {
                margin : 0 11vw 0 11vw;
            }
            @include pc {
                flex : 50%;
                margin : 0;
            }
        }
        &--photo {
            display : none;
            @include pc {
                flex : 50%;
                display: flex;
                justify-content: center;
                // img {
                //     margin-right : 1rem;
                // }
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
            margin-top : 7rem;
        }
        @include largeScreen {
            width : 1100px;
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
                    width : 40vw;
                    height : 30vw;
                    max-width : 400px;
                    max-height : 300px;
                    object-fit: cover;
                }
                @include largeScreen {
                    max-width : 500px;
                    max-height : 350px;
                }
            }
        }
    }
    p {
        margin : 0 1rem 1rem 1rem;
        // text-align: justify;
        line-height: 26px;
    }
    .ju_pics {
        display : flex;
        margin : 2rem 0 2rem 5vw;
        padding-bottom : 2rem;
        width : 95vw;
        overflow-x: auto;
        white-space: nowrap;
        @include pc {
            flex : 50%;
            overflow-x: hidden;
            margin : 2rem 0;
            padding-left : 1.5rem;
        }
        @include largeScreen {
            margin-right : 4rem;
        }
        img {
            width : 15rem;
            border-radius: 0.5rem;
            margin : 0 5vw;
            object-fit : cover;
            box-shadow: 0px 4px 4px rgba(30, 61, 89, 0.5);
            @include pc {
                margin : 0;
                width : 40vw;
                height : 30vw;
                max-width : 400px;
                max-height : 300px;
                box-shadow: 0px 0px 0px rgba(30, 61, 89, 0.5);
                border-radius : 0;
            }
            @include largeScreen {
                max-width : 500px;
                max-height : 350px;
            }
        }
        &-hide {
            @include pc {
                display : none;
            }
        }
        &::-webkit-scrollbar {
            height: 0.5rem;
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
    }
    .diplomes {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @include tablet {
            width : 410px;
            padding : 0 2.3rem;
        }
        @include pc {
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            padding : 1rem 0;
            width : 880px
        }
        h2{
            position : relative;
            width : fit-content;
            margin-bottom : 1rem;
        }
        .diplomeLogo {
            position : absolute;
            left : -3rem;
            top : 0.5rem;
            margin-right : 0.8rem;
        }
        margin : 1rem 1rem 0.5rem 1rem;
        border : 2px solid #FF6E40;
        ul {
            margin : 0 0.5rem 0 3rem;
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
        justify-content: space-evenly;
    }
}

</style>