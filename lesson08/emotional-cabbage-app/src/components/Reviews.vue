<template>
 <!-- Fills out a v-for on a template to render two elements, article and section, into the menu correctly -->
  <aside class="aside__sidebar col-sm-12 col-md-3 col-xl-4">
    <h1>Reviews</h1>
  <template v-for="item in items">
    <article class="aside__recipe-item" v-bind:key="item.id">
      <span class="aside__recipe-item__bold">{{ item.name }}</span>
      <br> {{ item.text }}
    </article>
    <section class="aside__review-stars" v-bind:key="item.reviewid">{{ item.stars }}</section>

  </template>

  </aside>
</template>

<script>

export default {
  name: 'Reviews',
  components: {
  },
  props: {},
  data() {
    return { items:
      [
        { reviewid: 1, stars: "", name:"", text:"", },
        { reviewid: 2, stars: "", name:"", text:"", },
        { reviewid: 3, stars: "", name:"", text:"", },
        { reviewid: 4, stars: "", name:"", text:"", },
        { reviewid: 5, stars: "", name:"", text:"", },
        { reviewid: 6, stars: "", name:"", text:"", },
        { reviewid: 7, stars: "", name:"", text:"", }
      ]
      }
  }
}
</script>