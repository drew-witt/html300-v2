<template>
  <div class="nutrition">
    <Nav />
    <Jumbotron classObject="bgWhite" heading="Nutrition" msg="Cabbage provides fiber and other nutrients 
    like potassium and vitamin K, making it a great complement to a healthy lifestyle.
    One cup of raw, chopped cabbage (89g) provides 22 calories, 1.1g of protein, 5.2g of carbohydrates, 
    and 0.1g of fat. Cabbage also provides potassium, folate, and vitamin K. This nutrition information is provided by the USDA." />
    <main>
      <CarouselNutrition />
    </main>
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue'
import CarouselNutrition from '@/components/CarouselNutrition.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Nutrition',
  components: {
    Jumbotron,
    CarouselNutrition,
    Nav,
    Footer
  }
}
</script>