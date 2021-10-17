<template>
 <!-- Bootstrap-Vue Carousel component with 6 images-->
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
  name: 'CarouselPrepare',
  components: {
  },
  props: {},
  data() {
    return { 
        sliding: null,
        items:
      [
        { id: 1, src:"BoiledCabbage.jpg", alt:"Boiled Cabbage", title:"Boiled Cabbage" },
        { id: 2, src:"BoiledCabbage02.jpg", alt:"Another Boiled Cabbage", title:"Boiled Cabbage" },
        { id: 3, src:"CabbageRoll.jpg", alt:"Cabbage Rolls", title:"Cabbage Rolls" },
        { id: 4, src:"CabbageStillLife.jpg", alt:"Raw Cabbage", title:"Raw Cabbage" },
        { id: 5, src:"FriedCabbage.jpg", alt:"Fried Cabbage", title:"Fried Cabbage" },
        { id: 6, src:"PickledCabbage.jpg", alt:"Pickled Cabbage", title:"Variety of Pickled Cabbage" }
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