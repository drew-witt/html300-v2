<template>
  <div class="home">
    <Nav />
    <Jumbotron classObject= "bgWhite" heading="Cabbage" msg="Sometimes sweet, sometimes tart. Always nutritious and delicious." />
    <main>
      <Accordion />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {  
  name: 'Home',
  components: {
    Jumbotron,
    Nav,
    Footer
  }
}
</script>