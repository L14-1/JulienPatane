<template>
  <div class="merci">
    <h1>Merci pour votre message !</h1>

    <p>J'essaierai de vous répondre au plus vite !</p>
  </div>
</template>

<script>

export default {
  name: 'Merci',
  
}
</script>

<style lang="scss">

@import '../assets/_mixin.scss';


.merci {
    padding-top : 5rem;
    height : 70vh;
    p {
        text-align: center;
    }
}

</style>