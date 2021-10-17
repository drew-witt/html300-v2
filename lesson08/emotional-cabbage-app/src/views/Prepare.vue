<template>
  <div class="prepare">
    <Nav />
    <Jumbotron classObject="bgWhite" heading="Prepare" msg="Preparing cabbage basically consist of cleaning and cutting 
    the cabbage to the desired size. When cutting cabbage, a stainless steel knife should be used because if the knife is 
    carbon steel, the cut edges of the cabbage will turn black. The head should not be cut open until it is going to be 
    used because once the cabbage is cut it starts to lose its vitamin C content rapidly. If it is necessary to cut a portion 
    from the head and the remainder will be stored, be sure to wrap the remaining sections tightly in plastic wrap and store 
    in the refrigerator." />
    <main>
      <CarouselPrepare />
      <ImageSection />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import ImageSection from '@/components/ImageSection.vue'
import CarouselPrepare from '@/components/CarouselPrepare.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Prepare',
  components: {
    Jumbotron,
    ImageSection,
    CarouselPrepare,
    Nav,
    Footer
  }
}
</script>