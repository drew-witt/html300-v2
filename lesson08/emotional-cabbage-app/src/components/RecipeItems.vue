<template>
 <!-- Fills out and binds attributes from the object array to RecipeItemCard components -->
            <main class="main__primary-container col-sm-12 col-md-9 col-xl-8">
            <h1>Recipes</h1> 
              <section class="main__menu-list"> 
                <RecipeItemCard 
                v-for="item in items" 
                v-bind:key="item.key"
                v-bind:recipeName="item.recipeName"
                v-bind:text="item.text"
                v-bind:imageSrc="item.imageSrc"
                />
              </section>
          </main>
</template>

<script>
import RecipeItemCard from '@/components/RecipeItemCard.vue'

export default {
  name: 'RecipeItems',
  components: {
    RecipeItemCard
  },
  props: {},
  data() {
    return { items:
      [
        { id: 1, recipeName:"Cabbage", imageSrc:"BoiledCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 2, recipeName:"Cabbage", imageSrc:"BoiledCabbage02.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, recipeName:"Cabbage", imageSrc:"CabbageFooter.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 4, recipeName:"Cabbage", imageSrc:"CabbageHands.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 5, recipeName:"Cabbage", imageSrc:"IcyCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 6, recipeName:"Cabbage", imageSrc:"CabbagePile.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 7, recipeName:"Cabbage", imageSrc:"CabbageRoll.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 8, recipeName:"Cabbage", imageSrc:"CabbageStillLife.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 9, recipeName:"Cabbage", imageSrc:"FriedCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 10, recipeName:"Cabbage", imageSrc:"PickledCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 11, recipeName:"Cabbage", imageSrc:"RoastedCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 12, recipeName:"Cabbage", imageSrc:"SauteedCabbage.jpg", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }

      ]
      }
  }
}
</script>