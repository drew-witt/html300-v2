<template>

  <!-- Images section component, uses a v-for loop on the MainImage to create the multiple images section-->
  <section>
    <!-- Three images with rounded corners and some y axis margin-->
    <MainImage 
      v-for="image in images" 
      v-bind:key="image.id"
      v-bind:alt="image.alt"
      v-bind:title="image.title"
      v-bind:imageSrc="image.imageSrc" />
  </section>
</template>

<script>
import MainImage from '@/components/MainImage.vue'

export default {
  name: 'ImageSection',
  components: {
    MainImage
  },
  props: {},
  data() {
    return { images:
      [
      { id: 1, imageSrc:"CabbageHands.jpg", alt: "Cabbage Farm", title:"Cabbage Farm" },
      { id: 2, imageSrc:"SauteedCabbage.jpg", alt: "Sauteed Cabbage", title:"Sauteed Cabbage" },
      { id: 3, imageSrc:"RoastedCabbage.jpg", alt: "Roasted Cabbage", title:"Roasted Cabbage" }
      ]
    }
  }
}
</script>