<template>
  <div class="about">
    <Nav />
    <Jumbotron classObject="bgWhite" heading="About" msg="Did you know there are over 400 types of cabbage in this world? 
    Below are only six of the basic types of cabbage. Click on each term for an explanation."/>
    <main>
      <Accordion />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Accordion from '@/components/Accordion.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Accordion,
    Nav,
    Footer
  }
}
</script>

