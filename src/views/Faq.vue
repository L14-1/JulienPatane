<template>
  <div class="faq">
    <h1>Foire aux questions</h1>
    <div class="container">
    <div :class="[ firstQuestion ? 'opened-question' : '' , 'question']" @click="firstQuestionSwitch">
      <p class="the-question">Quelle est la durée d’une séance d’accompagnement sportif ?<i :class="[ firstQuestion ? 'left' : 'down', 'arrow' ]"></i></p>
      <p class="the-answer" v-if="firstQuestion">Une séance individuelle ou collective dure 1 heure.</p>
    </div>
    <div :class="[ secondQuestion ? 'opened-question' : '' , 'question']" @click="secondQuestionSwitch">
      <p class="the-question">Quel est le minimum de personne pour un cours collectif ?<i :class="[ secondQuestion ? 'left' : 'down', 'arrow' ]"></i></p>
      <p class="the-answer" v-if="secondQuestion">Le minimum pour un cours collectif est de 3 personnes.</p>
    </div>
    <div :class="[ thirdQuestion ? 'opened-question' : '' , 'question']" @click="thirdQuestionSwitch">
      <p class="the-question">Les personnes en situation de handicap peuvent-elles être accompagnées sportivement ?<i :class="[ thirdQuestion ? 'left' : 'down', 'arrow' ]"></i></p>
      <p class="the-answer" v-if="thirdQuestion">Non, malheureusement je n’ai pas l’agrégation pour travailler avec des personnes en situation de handicap.</p>
    </div>
    <div :class="[ fourthQuestion ? 'opened-question' : '' , 'question']" @click="fourthQuestionSwitch">
      <p class="the-question">Les chèque CESU (Service à la personne) sont-ils  acceptés ?<i :class="[ fourthQuestion ? 'left' : 'down', 'arrow' ]"></i></p>
      <p class="the-answer" v-if="fourthQuestion">Oui, les chèque CESU sont acceptés.</p>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Faq',
  data: function () {
    return {
      firstQuestion: false,
      secondQuestion: false,
      thirdQuestion: false,
      fourthQuestion: false
    };
  },
  methods: {
    firstQuestionSwitch() {
      if (this.firstQuestion == true) {
        this.firstQuestion = false;
      } else {
        this.firstQuestion = true;
        this.secondQuestion = false;
        this.thirdQuestion = false;
        this.fourthQuestion = false;
      }
    },
    secondQuestionSwitch() {
      if (this.secondQuestion == true) {
        this.secondQuestion = false;
      } else {
        this.firstQuestion = false;
        this.secondQuestion = true;
        this.thirdQuestion = false;
        this.fourthQuestion = false;
      }
    },
    thirdQuestionSwitch() {
      if (this.thirdQuestion == true) {
        this.thirdQuestion = false;
      } else {
        this.firstQuestion = false;
        this.secondQuestion = false;
        this.thirdQuestion = true;
        this.fourthQuestion = false;
      }
    },
    fourthQuestionSwitch() {
      if (this.fourthQuestion == true) {
        this.fourthQuestion = false;
      } else {
        this.firstQuestion = false;
        this.secondQuestion = false;
        this.thirdQuestion = false;
        this.fourthQuestion = true;
      }
    },
  }
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';

.faq {
  @include pc {
    margin : auto;
    margin-bottom : 14rem;
  }
  .question {
    cursor : pointer;
    width : 84vw;
    max-width : 700px;
    margin-left : 8vw;
    @include pc {
      margin-left : 0;
    }
    margin-bottom : 1rem;
    padding : 1rem 0.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .the-question {
      position: relative;
      padding-right : 4rem;
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
    .the-answer {
      padding-left : 4rem;
      margin-top : 1rem;
    }
    &:first-child {
      @include pc {
        margin-top : 5rem;
      }
    }
  }
  .opened-question {
    background: rgba(255, 110, 64, 0.06);
  }
}

</style>