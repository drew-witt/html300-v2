<template>
<!-- Footer has largely different HTML in each section, so no v-for or child component.  
Also includes v-if statement to switch the email registration section based on a theoretical user state data value.-->
    <footer>
        <section class="footer__block">
            <h1>{{ blocks[0].headerText }}</h1>
            <p>Made with Love and Cabbages.</p>
            <p>Copyright © 2016 Cabbage™. All Rights Reserved.</p>
        </section>
        <section class="footer__block">
            <h1>{{ blocks[1].headerText }}</h1>
            <template v-if="isRegistered">
                <p>Connect with us!</p>
            </template>
            <template v-else>
            <p>Head on over for updates!</p>
            <form><input type="email"><input type="submit" value="JOIN"></form>
            </template>
        </section>
        <section class="footer__block">
            <h1>{{ blocks[2].headerText }}</h1>
            <p><a href="">BLOG</a></p>
            <p><a href="">RESOURCES</a></p>
            <p><a href="">TEAM</a></p>
            <p><a href="">NUTRITION</a></p>
            <p><a href="">CONTACT</a></p>
        </section>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {},
    data() {
    return { isRegistered: true,
    blocks:
      [
          {id: 1},
          {id: 2},
          {id: 3},
      ]
    }
    }
}
</script>