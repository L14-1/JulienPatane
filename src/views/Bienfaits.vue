<template>
  <div class="bienfaits">
    <h1>Les bienfaits du sport sur la santé</h1>
    <ul>
        <li><font-awesome-icon icon="fa-solid fa-yin-yang" /><i class="boldAccent">Un antistress de qualité :</i><br>Conséquence des hormones, et de ce bien-être général, les niveaux de stress et d’anxiété diminuent également de manière significative avec la pratique d’une <i class="orangeAccent">activité sportive</i>. Une meilleure oxygénation du cerveau améliorant nos capacités de réflexion ou mémoire et lutte contre les tensions nerveuses. En outre, il favorise un <i class="orangeAccent">sommeil de qualité</i>, stimulant et régulant les hormones concernées</li>
        <li><font-awesome-icon icon="fa-solid fa-comment-medical" /><i class="boldAccent">Pour prévenir ou accompagner le cancer :</i><br>De nombreuses études scientifiques ont révélé l’action préventive de l’activité sportive contre certains types de <i class="orangeAccent">cancer</i> Au-delà de l’aspect préventif, le sport permet également aux patients atteints de cancer de conserver une bonne condition physique. Notamment en ce qui concerne la masse musculaire. Cela peut jouer un <i class="orangeAccent">rôle positif</i> dans la résistance aux traitements et le processus de guérison.</li>
        <li><font-awesome-icon icon="fa-solid fa-bone" /><i class="boldAccent">Un renforcement de la structure osseuse :</i><br>Ce n’est pas l’effet le plus connu du sport sur le corps, mais il s’agit pourtant de l’un de ses plus grands bienfaits. Bénéfique pour l’amélioration de votre <i class="orangeAccent">densité osseuse</i>, celle-ci ne dépend donc pas uniquement de la quantité de calcium que vous ingérez, mais aussi du sport que vous pratiquez. Le mouvement est donc tout à fait indiqué pour limiter l’apparition chroniques de type <i class="orangeAccent">lombalgies</i>, rhumatismes inflammatoires, ostéoporoses, ou encore arthroses.</li>
        <li><font-awesome-icon icon="fa-solid fa-heart-pulse" /><i class="boldAccent">Lutte contre les maladies cardiovasculaires :</i><br>Une activité physique régulière améliore et régule le fonctionnement du système cardiaque, en diminuant les facteurs de <i class="orangeAccent">risque cardiovasculaire</i>. En l’occurrence, il régule l’hypertension artérielle, le taux de sucre dans le sang lié aux problématiques dû au diabète, augmente le taux de bon cholestérol.</li>
        <li><font-awesome-icon icon="fa-solid fa-user-doctor" /><i class="boldAccent">Limiter les signes de vieillissement :</i><br>Tout en contribuant à la diminution des blessures osseuses, maux de dos, douleurs articulaires, et autres maladies chroniques, améliorant ainsi la longévité. En effet, le sport permet de repousser <i class="orangeAccent">la perte d’autonomie</i> qui survient le plus souvent avec l’âge. Celle-ci est liée à notre mode de vie sédentarisé, et non pas seulement au vieillissement.</li>
        <li><font-awesome-icon icon="fa-solid fa-face-laugh-beam" /><i class="boldAccent">Le plaisir d’être ensemble :</i><br>De façon indirecte, le sport permet de renforcer les liens d’appartenance <i class="orangeAccent">sociale</i>. Le sport réunit autour d’une même passion des individus différents. De quoi pouvoir tisser des liens relationnels forts, des valeurs d’amitié, de solidarité, de respect et de dépassement de soi. Faisons équipe ensemble !</li>
    </ul>
    <div class="buttons">
        <div class="button-nav"><router-link to="/prestations">Mes prestations</router-link></div>
        <div class="button-nav"><router-link to="/tarifs">Mes tarifs</router-link></div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Bienfaits',
}
</script>

<style lang="scss">

.bienfaits {
    ul {
        margin : 0 2rem 0 4rem;
        li {
            position : relative;
            margin : 1.5rem 0;
            line-height: 26px;
            font-weight: 500;
            .fa-yin-yang{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
                transform: rotateY(180deg) rotateZ(180deg);
            }
            .fa-comment-medical{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
            }
            .fa-bone{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
                transform: rotate(45deg);
            }
            .fa-heart-pulse{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
            }
            .fa-user-doctor{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
            }
            .fa-face-laugh-beam{
                position : absolute;
                left : -2rem;
                top : 0.3rem;
                font-size : 1.3rem;
                color : #FF6E40;
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