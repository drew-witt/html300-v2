<template>
  <div class="recipes">
    <Nav />
    <Jumbotron classObject="bgWhite" heading="Recipes" msg="There nemerous ways to prepare cabbage, but here we have the twelve 
    most basic and popular methods. Of course, you can even eat cabbage raw in the popular Dutch dish koosla, or as it's known 
    in the US, coleslaw. If you are looking for a more spicy way to cook your cabbage, you can try fermenting your cabbage as 
    German saurkraut or Korean kimchi. An additional page on fermented cabbage will be added to this site soon. " />
      <!-- Bootstrap grid: 2 columns, second column (aside)-->
      <div class="container-fluid">
        <section class="row">
          <RecipeItems />
          <Reviews />
        </section>
      </div>
    <Footer /> 
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Jumbotron from '@/components/Jumbotron.vue'
import RecipeItems from '@/components/RecipeItems.vue'
import Reviews from '@/components/Reviews.vue'

export default {
  name: 'Recipes',
  components: {
    Nav,
    Footer,
    Jumbotron,
    RecipeItems,
    Reviews
  }
}



</script>