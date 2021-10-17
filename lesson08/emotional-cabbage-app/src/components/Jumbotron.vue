<template>
  <!-- Jumbotron can render a message if the msg prop is blank -->
  <section class="my-3" :class="classObject + ' ' + textClass" >
    <h1 class="display-3 my-3 text-center text-uppercase">{{ heading }}</h1>
    <p v-if="msg"> {{ msg }}</p>
    <p v-else >Sometimes sweet, sometimes tart. Always nutritious and delicious.</p>

  </section>
</template>

<script>
export default {
  name: 'Jumbotron',
  props: {
    heading: { type: String, required: false },
    msg: { type: String, required: false },
    classObject: { type: String, required: false },
    textClass: { type: String, required: false }
  }, data() {
    return {
    }
  }
}
</script>