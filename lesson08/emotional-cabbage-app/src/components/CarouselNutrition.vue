<template>
 <!-- Bootstrap-Vue Carousel component with 4 images-->
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide v-for="item in items"
      :key="item.id"
      :img-src="getImgUrl(item.src)" ></b-carousel-slide>
    </b-carousel>

  </div>
</template>

<script>

export default {
  name: 'CarouselNutrition',
  components: {
  },
  props: {},
  data() {
    return { 
        sliding: null,
        items:
      [
        { id: 1, src:"VitaminB6.jpg", alt:"Diagram of vitamin B6 and its benefits", title:"B6" },
        { id: 2, src:"VitaminB9.jpg", alt:"Diagram of vitamin B9 and its benefits", title:"B9" },
        { id: 3, src:"VitaminC.jpg", alt:"Diagram of vitamin C and its benefits", title:"C" },
        { id: 4, src:"VitaminK.jpg", alt:"Diagram of vitamin K and its benefits", title:"K" }
      ]
    };
  },
    methods: {
      getImgUrl(url) {
        return require('../assets/' + url);
      }
    }
};
</script>