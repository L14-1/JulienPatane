<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '@/components/footerComponent.vue'

export default {
  name: 'Home',
  components: {
    FooterComponent
  }
}
</script>
