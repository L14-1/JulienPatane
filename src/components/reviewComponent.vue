<template>
  <div class="reviewComponent">
        <h4>Vos témoignages</h4>
        <div class="reviews-container">
            <div class="theReview-container" v-for="reviews in reviews" :key="reviews.id">
                <div class="theReview">
                    <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="top-mark">
                        <path d="M11.6264 16.2C11.6264 14.895 11.2664 13.785 10.5464 12.87C9.45141 11.49 7.33641 11.325 6.10641 11.595C5.59641 8.7 8.05641 5.01 11.2364 3.42L8.79141 0C3.99141 2.28 -0.718586 7.53 0.0914139 14.145C0.601414 18.33 3.01641 21.09 6.43641 21.09C7.93641 21.09 9.18141 20.655 10.1564 19.77C11.1464 18.885 11.6264 17.7 11.6264 16.2ZM25.7714 16.2C25.7714 14.895 25.4114 13.785 24.6914 12.87C23.5964 11.49 21.4814 11.325 20.2514 11.595C19.7414 8.7 22.2014 5.01 25.3814 3.42L22.9364 0C18.1364 2.28 13.4264 7.53 14.2364 14.145C14.7464 18.33 17.1614 21.09 20.5814 21.09C22.0814 21.09 23.3264 20.655 24.3014 19.77C25.2914 18.885 25.7714 17.7 25.7714 16.2Z" fill="#FF6E40"/>
                    </svg>
                        <p>
                            {{ reviews.review }}
                        </p>
                    <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="bottom-mark">
                        <path d="M11.6264 16.2C11.6264 14.895 11.2664 13.785 10.5464 12.87C9.45141 11.49 7.33641 11.325 6.10641 11.595C5.59641 8.7 8.05641 5.01 11.2364 3.42L8.79141 0C3.99141 2.28 -0.718586 7.53 0.0914139 14.145C0.601414 18.33 3.01641 21.09 6.43641 21.09C7.93641 21.09 9.18141 20.655 10.1564 19.77C11.1464 18.885 11.6264 17.7 11.6264 16.2ZM25.7714 16.2C25.7714 14.895 25.4114 13.785 24.6914 12.87C23.5964 11.49 21.4814 11.325 20.2514 11.595C19.7414 8.7 22.2014 5.01 25.3814 3.42L22.9364 0C18.1364 2.28 13.4264 7.53 14.2364 14.145C14.7464 18.33 17.1614 21.09 20.5814 21.09C22.0814 21.09 23.3264 20.655 24.3014 19.77C25.2914 18.885 25.7714 17.7 25.7714 16.2Z" fill="#FF6E40"/>
                    </svg>
                </div>
                <div class="sun-rating">
                    <img src="../assets/May_Sun_From_Argentina_Flag_clip_art.svg" alt="" v-if="reviews.rating > 0">
                    <img src="../assets/May_Sun_From_Argentina_Flag_clip_art.svg" alt="" v-if="reviews.rating > 1">
                    <img src="../assets/May_Sun_From_Argentina_Flag_clip_art.svg" alt="" v-if="reviews.rating > 2">
                    <img src="../assets/May_Sun_From_Argentina_Flag_clip_art.svg" alt="" v-if="reviews.rating > 3">
                    <img src="../assets/May_Sun_From_Argentina_Flag_clip_art.svg" alt="" v-if="reviews.rating > 4">
                    <img src="../assets/Soleil-vide.svg" alt="" v-if="reviews.rating < 5">
                    <img src="../assets/Soleil-vide.svg" alt="" v-if="reviews.rating < 4">
                    <img src="../assets/Soleil-vide.svg" alt="" v-if="reviews.rating < 3">
                    <img src="../assets/Soleil-vide.svg" alt="" v-if="reviews.rating < 2">
                    <img src="../assets/Soleil-vide.svg" alt="" v-if="reviews.rating < 1">
                    <p class="name">
                        {{ reviews.name }}
                    </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewComponent',
  data: function () {
    return {
      reviews : [
          {
              id: 0,
              name: 'Irène',
              review: "Julien élabore un programme après avoir pris en compte notre façon de travailler, de nous dépenser, de manger et aussi suivant l’humeur du moment. Tout est pris en compte afin que son programme nous permette d’avancer et de nous sentir mieux dans et dans notre tête et dans notre corps. Rien n’est laissé au hasard ! Il est méthodique et précis. C’est un coach engagé et passionné ! Merci pour ton écoute !",
              rating: 5,
          },
          {
              id: 1,
              name: 'Martine',
              review: "En ce qui me concerne je suis ravie de travailler avec toi depuis de nombreuses années. Le sport m'aide à garder mon autonomie dans ma vie, de tous les jours merci d'être aussi à l'écoute, si je dois recommander un coach sportif, je conseillerai aux personnes en situation de handicap notamment de faire appel à toi UN GRAND MERCI COACH",
              rating: 4,
          },
          {
              id: 2,
              name: 'Coralie',
              review: "Nous en dire plus: Un vrai coach professionnel à l'écoute de ses clients, motivant et inspirant. Sa capacité d'adaptation et son professionnalisme sont un vrai atout pour se motiver, se surpasser et atteindre ses objectifs. Sa sympathie et son empathie s'ajoutent à son accompagnement ... Un grand Merci pour ton suivi",
              rating: 5,
          },
          {
              id: 3,
              name: 'Leia',
              review: "Sportive depuis toujours, par plaisir, j ai décroché pour diverses raisons. Et puis, j 'ai fait appel à toi, Julien, quand j'ai su que tu en faisais ton job, pour diverses raisons aussi: je connais tes qualités: ton talent pour créer le lien, motiver et surtout, voir en l'autre ses propres capacités. Bref, en dehors de ton savoir-faire, c'est ton savoir être que dit que j ai fait le bon choix. Merci Coach, d'être toi.",
              rating: 5,
          },
          {
              id: 4,
              name: 'Cathy',
              review: "J'ai commencé les séances de sport avec Julien il y a 6 mois à raison d'une séance par semaine. C'est un coach hyper positif, toujours bienveillant. il est soucieux de mon bien être ainsi que du bon déroulé des séances, il est toujours à l'écoute. Il sait adapter les séances en fonction de mes besoins. Il propose des séances toujours différentes. Bref, je recommande à 100%",
              rating: 5,
          },
          {
              id: 5,
              name: 'Delphine',
              review: "Un coach comme on aimerait en voir plus souvent !!! Julien est passionné par son métier, j’en suis la parfaite témoin. Moi, qui quelques mois auparavant avait une vraie aversion pour le sport il a su me faire comprendre qu’à un delà de l’aspect sportif c’est une manière de gérer et de penser sa vie différemment. Julien est plus qu’un coach sportif c’est un coach de vie : sport, kinesio, la combinaison parfaite.",
              rating: 5,
          },
      ]
    };
  },
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';

.reviewComponent {
    h4 {
        font-size : 1.5rem;
        @include tablet {
            font-size : 2.3rem;
        }
    }
    @include largeScreen {
        background : rgba(30, 61, 89, 0.1);
        padding-bottom : 3rem;
    }
    .reviews-container {
        display: flex;
        overflow-x: auto;
        flex-wrap: nowrap;
        width : 100vw;
        padding-bottom : 2rem;
        @include largeScreen {
            flex-wrap: wrap;
            width : 1000px;
            margin: 2rem auto 0 auto;
            justify-content: space-evenly;
        }
        .theReview-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            border : 1px solid rgb(177, 177, 177);
            background : white;
            margin-right : 1.5rem;
            @include largeScreen {
                border : none;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            &:first-child {
                margin-left : 1rem;
                @include largeScreen {
                    margin-left : 0;
                }
            }
            &:nth-child(n+4) {
                @include largeScreen {
                    margin-top : 2rem;
                }
            }
            &:nth-child(3n) {
                @include largeScreen {
                    margin-right : 0;
                }
            }
            .theReview {
                position : relative;
                background: rgba(255, 110, 64, 0.1);
                width : 275px;
                height: 320px;
                border-radius: 10px;
                margin : 3rem 0.8rem;
                padding : 0.5rem 1rem;
                @include largeScreen {
                    background: white;
                }
                .top-mark {
                    position : absolute;
                    top : -2rem;
                    left : -0.5rem;
                }
                .bottom-mark {
                    position : absolute;
                    transform : rotateX(180deg) rotateZ(180deg);
                    bottom : -2rem;
                    right : -0.5rem;
                }
            }
            .sun-rating {
                
                img {
                    width : 40px;
                    margin-right : 0.5rem;
                    margin-bottom : 1rem;
                }
                .name {
                    font-size : 18px;
                    font-weight : 600;
                    width : fit-content;
                    margin : 0 auto;
                    margin-bottom : 1rem;
                }
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
}


</style>
