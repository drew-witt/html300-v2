<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');


#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c502e;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c502e;
}

#nav a.router-link-exact-active {
  color: #3fcf8e;
}
</style>
